import { useReports } from '../contexts/ReportsProvider'
import { Container, Box, Typography, Button  } from '@mui/material'
import { ReportTable } from '../components/ReportTable'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import * as APITypes from "../API";
import { CreateDiagnosisModal } from '../components/modals/CreateDiagnosisModal';
import { CreateReportModal } from '../components/modals/CreateReportModal';




const ReportPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { diagnosis } = location.state || {};

    const {createNewReport} = useReports();
    const { entryId } = useParams<"entryId">();
    const  [uploadedImage, setUploadedImage] = useState<File>()
    const [userComments, setUserComments] = useState<string>("");
    const imageURLPath = "https://finaldermiqbucket182827-dev.s3.us-west-1.amazonaws.com/public/";
    const OPENAI_API_KEY='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'

    const [isModalOpen, setIsModalOpen]  = useState<boolean>(false);
    
  const downloadReport = async () => {
    const input = document.body; // Adjust this to target the specific element you want to convert
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate dynamic height to maintain aspect ratio
    const imgWidth = 208; // Approx. A4 width in mm
    const pageHeight = 295;  // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;

    const doc = new jsPDF('p', 'mm');
    let position = 0;

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    doc.save('report.pdf');
  };

  const handleGoHome = () => {
    navigate('/'); // This navigates to the HomePage route
  };

  const handleSetUserComments = (comment: string) =>{
    setUserComments(comment)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageUpload = (selectedImage: File) => {
    setUploadedImage(selectedImage);
  }

  const callGetSizeEndpoint = async () => {
    if (!uploadedImage) {
      console.error('No image uploaded');
      return;
    }

    try {
      // Prepare the image to be sent as form data
      const formData = new FormData();
      formData.append('uploaded_file', uploadedImage);

      // Use your FastAPI server URL with the /predict endpoint
      const response = await axios.post('http://localhost:8000/getSize', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Important header for file uploads
        }
      });


      // Response from the `/predict` endpoint
      return response.data.area;

    } catch (error) {
      console.error('Error during image upload and get size:', error);
    }
  };

  async function getNextStepsCare(disease:string, size:number) {
    const messages = [
        {
            role: "system",
            content: "This is a model trained on medical data. It can suggest the next steps of care based on a diagnosed disease and its size."
        },
        {
            role: "user",
            content: `The patient has been diagnosed with ${disease} with a size of ${size} mm^2. What should the next steps of care be? Answer in 2 sentences`
        }
    ];
    
    const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
            model: "gpt-3.5-turbo",
            messages,
            temperature: 0.7
        },
        {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        },
    );
    
    return response.data.choices[0].message['content'];

}
  async function uploadImageToS3() {
    if (uploadedImage){
      const response = await uploadData({
        key: uploadedImage.name,
        data: uploadedImage,
      }).result;

    
      return response
  }
  }
  const handleCreateReport = async () =>{
    
    const size = await callGetSizeEndpoint();

    const nextSteps = await getNextStepsCare(diagnosis, size);

    await uploadImageToS3();

    const reportID=uuidv4()
    const imageURL=imageURLPath+uploadedImage?.name
    const newReport: APITypes.CreateReportInput = {
      id: reportID,
      imageuri:imageURL,
      area: size,
      usercomments: "",
      nlpresponse: nextSteps,
      entry_id: entryId,
    }
    await createNewReport(newReport);
    handleCloseModal();
  }


    return (
        <Container
            sx={{ width: "100%", py: "50px"}}
            maxWidth="xl"
            disableGutters>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    mb: "30px",
                }}
            >
          <Typography sx={{ fontSize: "1.5rem", color: "#404040", fontWeight: 600 }}>
            {`${diagnosis} Report`}
          </Typography> 

          <Button
          variant="contained"
          onClick={handleGoHome}
          >
            Back
          </Button>

          <Button
          variant="contained"
          onClick={() => downloadReport()}
          >
            Download
          </Button>
          <Button
            variant="contained"
            onClick={handleOpenModal}
          >
            New Report Entry
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #e9e8ed",
            borderRadius: 0,
          }}
        >
          {entryId && (
              <ReportTable entryID={entryId}/>
          )}
        </Box>
        <CreateReportModal
          open={isModalOpen}
          onClose={handleCloseModal}
          handleImageUpload={handleImageUpload}
          handleCreateReport={handleCreateReport}
          handleSetUserComments={handleSetUserComments}
        />
      </Container>
    )
}

export default ReportPage