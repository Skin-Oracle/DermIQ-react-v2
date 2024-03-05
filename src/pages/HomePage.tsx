import {WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import FileUploader from '../components/FileUploader';
// import DermLogo from '../assets/DermLogo.png';
import './HomePage.css';
import {Button, Container, Box, Typography} from '@mui/material'
import { DiagnosisTable } from '../components/DiagnosisTable';
import { useUsersContext } from '../contexts/UsersProvider';
import { useEffect, useState } from 'react';
import { CreateDiagnosisModal } from '../components/modals/CreateDiagnosisModal';
import { useEntries } from '../contexts/EntriesProvider';
import { useReports } from '../contexts/ReportsProvider';
import axios from 'axios'
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import * as APITypes from "../API";
import { useNavigate } from 'react-router-dom';

const HomePage = ({ signOut, user }: WithAuthenticatorProps) => {
  const OPENAI_API_KEY='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'

  const {users, fetchOrCreateUser} = useUsersContext();
  const [isModalOpen, setIsModalOpen]  = useState<boolean>(false);
  const { entries, createNewEntry, fetchEntries} =useEntries();
  const [ bodyPart, setBodyPart] = useState<string>("");
  const [entryName, setEntryName] = useState<string>("");
  const [isFunctionRunning, setIsFunctionRunning] = useState<boolean>(false)
  const  [uploadedImage, setUploadedImage] = useState<File>()
  const imageURLPath = "https://finaldermiqbucket182827-dev.s3.us-west-1.amazonaws.com/public/";
  const {reports, createNewReport} = useReports();
  const navigate = useNavigate();
  

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageUpload = (selectedImage: File) => {
    setUploadedImage(selectedImage);
  }
  const handleSetBodyPart = (part: string) =>{
    setBodyPart(part)
  }

  const handleSetEntryName = (name: string) =>{
    setEntryName(name)
  }

  const callPredictEndpoint = async () => {
    if (!uploadedImage) {
      console.error('No image uploaded');
      return;
    }

    try {
      // Prepare the image to be sent as form data
      const formData = new FormData();
      formData.append('uploaded_file', uploadedImage);

      // Use your FastAPI server URL with the /predict endpoint
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Important header for file uploads
        }
      });
      // Handle the response data as needed, e.g., store in state, display on UI
      return response.data.Diagnosis
    } catch (error) {
      console.error('Error during image upload and prediction:', error);
    }
  };

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

    return response.data.choices[0].text;
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
  const handleCreateEntry = async () =>{
    setIsFunctionRunning(true)
    const diagnosis = await callPredictEndpoint();
    let size;

    if (diagnosis == 'other'){
      size = -1;
    }
    else{
      size = await callGetSizeEndpoint();
    }

    const nextSteps = await getNextStepsCare(diagnosis, size);

    await uploadImageToS3();
    const entryID=uuidv4()

    if(user && user.userId){
      const newEntry: APITypes.CreateEntryInput = {
        id: entryID,
        body_part: bodyPart,
        entry_name: entryName,
        diagnosis: diagnosis,
        user_id: user.userId,
      };
      await createNewEntry(newEntry)
    }
    const reportID=uuidv4()
    const imageURL=imageURLPath+uploadedImage?.name
    const newReport: APITypes.CreateReportInput = {
      id: reportID,
      imageuri:imageURL,
      area: size,
      usercomments: "",
      nlpresponse: nextSteps,
      entry_id: entryID,
    }
    await createNewReport(newReport);
    setIsFunctionRunning(false);
    navigate(`reports/${entryID}`, { state: { diagnosis } });
  }

  
  useEffect(() => {
    if (user && user.userId) {
      fetchEntries(user.userId);
    }
  }, [user, fetchEntries]);
  

  return (
    <>
    { entries ? (
      <>
      <Container
        sx={{ width: "100%", py: "50px",
        mx: "50px",
        maxWidth:"1000px"}}
        disableGutters
      >
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
            Diagnoses
          </Typography>

          <Button
            variant="contained"
            onClick={handleOpenModal}
          >
            New Diagnosis
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #e9e8ed",
            borderRadius: 0,
          }}
        >
          <DiagnosisTable handleOpenModal={handleOpenModal} />
        </Box>
        <CreateDiagnosisModal
        open={isModalOpen}
        onClose={handleCloseModal}
        handleImageUpload={handleImageUpload}
        handleCreateEntry={handleCreateEntry}
        handleSetBodyPart={handleSetBodyPart}
        handleSetEntryName={handleSetEntryName}
        isFunctionRunning={isFunctionRunning}
      />
      </Container>
    </>
    ):
    (<Typography>Loading</Typography>)
    }
      </>
  )
}

export default HomePage




