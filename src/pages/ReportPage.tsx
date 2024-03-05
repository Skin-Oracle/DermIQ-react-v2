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
import { CreateReportModal } from '../components/modals/CreateReportModal';




const ReportPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { diagnosis } = location.state || {};

    const {reports, createNewReport} = useReports();
    const { entryId } = useParams<"entryId">();
    const  [uploadedImage, setUploadedImage] = useState<File>()
    const [userComments, setUserComments] = useState<string>("");
    const [isFunctionRunning, setIsFunctionRunning] = useState<boolean>(false)
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
    
    doc.save(`${diagnosis}report.pdf`);
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


const generateSummaryMessages = async (entryId:string, newDisease:string, newSize:number, newUserComments:string) => {
  const messages = [
    {
      role: "system",
      content: "This is a model designed to summarize medical reports and patient feedback on skin conditions over time."
    }
  ];

  // Provide context from previous reports
  if (reports && reports[entryId]) {
    reports[entryId].forEach((report, index) => {
      messages.push(
        {
          role: "system",
          content: `Report ID: ${report.id}. Previous size: ${report.area} mm^2 on ${new Date(report.createdAt).toLocaleDateString()}.`
        },
        {
          role: "system",
          content: `Previous user comments: ${report.usercomments || "No comments provided."}`
        }
      );
    });
  }
  if (newUserComments) {
    messages.push(
      {
        role: "user",
        content: newUserComments
      }
    );
  }

  // Add the prompt for the AI to summarize the changes
  messages.push(
    {
      role: "user",
      content: `The patient's current condition of ${newDisease} has a size of ${newSize} mm^2. Based on the previous report information provided and current update, can you summarize the progression of the condition and the user's sentiments about their updated condition so they can share with their physician?`
    }
  );

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
  return messages;
};
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
    setIsFunctionRunning(true);
    
    const size = await callGetSizeEndpoint();
    const formattedSize = parseFloat(size.toFixed(2));
    let newNLPResponse = ""
    if(entryId){
      newNLPResponse = await generateSummaryMessages(entryId, diagnosis, formattedSize, userComments);
    }

    await uploadImageToS3();

    const reportID=uuidv4()
    const imageURL=imageURLPath+uploadedImage?.name
    const newReport: APITypes.CreateReportInput = {
      id: reportID,
      imageuri:imageURL,
      area: formattedSize,
      usercomments: userComments,
      nlpresponse: newNLPResponse,
      entry_id: entryId,
    }
    await createNewReport(newReport);
    setIsFunctionRunning(false);
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
          isFunctionRunning={isFunctionRunning}
        />
      </Container>
    )
}

export default ReportPage