from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import torch
# import torchvision
import torchvision.transforms as t
from PIL import Image

import cv2
import numpy as np
import imutils
from imutils import perspective

import logging
from fastapi import Request, status
from fastapi.exceptions import RequestValidationError

import os, sys

model_path = "best_model.pt"

class Derm_Vision:
    def __init__(self):

	# change cpu to cuda or mps depending on device hosting
	    
        self.model = torch.load(model_path, map_location=torch.device('cpu'))
        self.transform_m = t.Compose([
            t.Resize(384, interpolation=t.InterpolationMode.BILINEAR),
            t.CenterCrop(384),
            t.ToTensor(),
            t.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
         ])


        self.model_class_data = {0: "Actinic Keratoses and Intraepithelial Carcinoma / Bowen's disease",
                            1: 'Basal Cell Carcinoma',
                            2: 'Benign',
                            3: 'Benign keratosis-like lesions',
                            4: 'Dermatofibroma',
                            5: 'Melanoma',
                            6: 'Melanocytic Nevi',
                            7: 'Other',
                            8: 'Vascular lesions',
        }       

    def predict(self, image_path):
        img = Image.open(image_path).convert('RGB')  
        trans_img = self.transform_m (img)
        trans_img = trans_img.unsqueeze(0)
        outputs = self.model(trans_img)
        _, predicted = torch.max(outputs, 1)
        diagnosis = self.model_class_data[predicted.item()]

        probs = torch.nn.functional.softmax(outputs, dim=1).tolist()[0]
        
        Confidence = {"Actinic Keratoses and Intraepithelial Carcinoma / Bowen's disease" : probs[0], 
                      "Basal Cell Carcinoma": probs[1], 
                      'Benign': probs[2], 
                      'Benign keratosis-like lesions': probs[3], 
                      'Dermatofibroma': probs[4], 
                      'Melanoma': probs[5],  
                      'Melanocytic Nevi': probs[6],  
                      'Other': probs[7],  
                      'Vascular lesions': probs[8], }

        result = {'Diagnosis': diagnosis, 'Confidence': Confidence}


        return result
    
app = FastAPI()
model = Derm_Vision()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "http://localhost:8000",],  # The origin of your Vite app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
	exc_str = f'{exc}'.replace('\n', ' ').replace('   ', ' ')
	logging.error(f"{request}: {exc_str}")
	content = {'status_code': 10422, 'message': exc_str, 'data': None}
	return JSONResponse(content=content, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)


sys.path.append("/Users/parsahafezi/Workspace/DermaQ/Skin-Oracle/backend")
# make a directory to store images
working_dir = os.getcwd()
image_dir = f"{working_dir}/images"
if not os.path.exists(image_dir):
    os.makedirs(image_dir)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/predict")
async def create_upload_file(uploaded_file: UploadFile = File(...)):
    
    #validates file extension
    if(not uploaded_file.filename.lower().endswith(('.png', '.jpg', '.jpeg'))):
        raise HTTPException(status_code=415, detail="Invalid photo format")
    
    #stores the files in imagedir
    file_location = os.path.join(image_dir, uploaded_file.filename)
    with open(file_location, "wb+") as file_object:
        file_object.write(uploaded_file.file.read())

    print(uploaded_file.filename)
    #todo pass the location of the file to image processing pipeline and get valid prediction

    prediction = model.predict(file_location)
    response_content = prediction
    print(prediction)
    
    return prediction
    #return JSONResponse(content=response_content)


@app.post("/getSize")
async def create_upload_file(uploaded_file: UploadFile = File(...)):
    
    #validates file extension
    if(not uploaded_file.filename.lower().endswith(('.png', '.jpg', '.jpeg'))):
        raise HTTPException(status_code=415, detail="Invalid photo format")
    
    #stores the files in imagedir
    file_location = os.path.join(image_dir, uploaded_file.filename)
    with open(file_location, "wb+") as file_object:
        file_object.write(uploaded_file.file.read())

    print(uploaded_file.filename)
    #todo pass the location of the file to image processing pipeline and get valid prediction

    image = cv2.imread(file_location)
    image_resized = cv2.resize(image,(int(image.shape[0] / np.floor(image.shape[0]/400)) ,int(image.shape[1] / np.floor(image.shape[0]/400)) ), interpolation = cv2.INTER_AREA)
    # gray scale and apply bilateralFilter
    gray = cv2.cvtColor(image_resized, cv2.COLOR_BGR2GRAY)
    # bilateralfilter to remove the noise edges
    # gray = cv2.bilateralFilter(gray, 9, 10, 10)
    # edged = cv2.Canny(gray, 50, 100)
    # edged = cv2.dilate(edged, None, iterations=1)
    # edged = cv2.erode(edged, None, iterations=1)
    gray = cv2.bilateralFilter(gray, 9, 10, 10)
    edged = cv2.Canny(gray, 40, 100)
    edged = cv2.dilate(edged, None, iterations=1)
    edged = cv2.erode(edged, None, iterations=1)
    cnts = cv2.findContours(edged.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)

    orig = image_resized.copy()

    orig_cen_y = image_resized.shape[0]/2
    orig_cen_x = image_resized.shape[1]/2

    box_dic = {}
    # loop over the contours individually
    idx = 0
    for c in cnts:
        # if the contour is not sufficiently large, ignore it
        if cv2.contourArea(c) < 40:
            continue

        # compute the rotated bounding box of the contour
        box = cv2.minAreaRect(c)

        box = cv2.boxPoints(box) if imutils.is_cv2() else cv2.boxPoints(box)
        box = np.array(box, dtype="int")

        # order the points in the contour such that they appear
        # in top-left, top-right, bottom-right, and bottom-left
        # order, then draw the outline of the rotated bounding
        # box

        box = perspective.order_points(box)
        cv2.drawContours(orig, [box.astype("int")], -1, (0, 255, 0), 2)


        # get the witdth and height of the bounding boxes
        width = np.linalg.norm(box[0] - box[1])
        height = np.linalg.norm(box[1] - box[2])
        area = width * height


        sum_x = 0
        sum_y = 0

        #lable the corners of the bounding boxes
        #calculate the bounding boxes centers
        for (x, y) in box:
            cv2.circle(orig, (int(x), int(y)), 5, (0, 0, 255), -1)
            sum_x += int(x)
            sum_y += int(y)

        box_dic[f"box_{idx}"] = {"area" : area, "cen" : {"x" : sum_x/4, "y": sum_y/4}, "dim" : {"width": width, "height" : height}}
        idx += 1

    sorted_boxes = sorted(box_dic.items(), key=lambda item: (((item[1]['cen']['x'] - orig_cen_x)/image_resized.shape[1]) ** 2 + ((item[1]['cen']['y'] - orig_cen_y)/image_resized.shape[0]) ** 2))
    sorted_boxes = sorted_boxes[0:2]
    
    def get_average_color(image, x, y, window_size):
        # Define the coordinates of the 5x5 window
        window_size = 5
        x_start = max(0, x - (window_size // 2))
        x_end = min(image.shape[1], x + (window_size // 2) + 1)
        y_start = max(0, y - (window_size // 2))
        y_end = min(image.shape[0], y + (window_size // 2) + 1)

        # Extract the region defined by the window
        window = image[y_start:y_end, x_start:x_end]

        # Calculate the average color
        average_color = np.mean(window, axis=(0, 1)).astype(int)

        return average_color

    sorted_boxes[0][1]["color_array"] = get_average_color(orig, int(sorted_boxes[0][1]["cen"]["x"]), int(sorted_boxes[0][1]["cen"]["y"]), 9)
    sorted_boxes[1][1]["color_array"] = get_average_color(orig, int(sorted_boxes[1][1]["cen"]["x"]), int(sorted_boxes[1][1]["cen"]["y"]), 9)

    
    silver = np.array([92,92,92])
    silver_area_real = np.pi * ((24.26/2)**2)

    real_area = 0
    if np.linalg.norm(sorted_boxes[0][1]["color_array"] - silver) < np.linalg.norm(sorted_boxes[1][1]["color_array"] - silver):
        sorted_boxes[0][1]["real_area"] = silver_area_real
        sorted_boxes[0][1]["is_quarter"] = True
        sorted_boxes[1][1]["real_area"] = (sorted_boxes[1][1]["area"] / sorted_boxes[0][1]["area"])* silver_area_real
        real_area = (sorted_boxes[1][1]["area"] / sorted_boxes[0][1]["area"])* silver_area_real
        sorted_boxes[1][1]["is_quarter"] = False

    else :
        sorted_boxes[1][1]["real_area"] = silver_area_real
        sorted_boxes[1][1]["is_quarter"] = True
        sorted_boxes[0][1]["real_area"] = (sorted_boxes[0][1]["area"] / sorted_boxes[1][1]["area"])* silver_area_real
        real_area = (sorted_boxes[0][1]["area"] / sorted_boxes[1][1]["area"])* silver_area_real
        sorted_boxes[0][1]["is_quarter"] = False

    
    return  {"area": real_area}

#     #return JSONResponse(content=response_content)

