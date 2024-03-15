import { useReports } from '../contexts/ReportsProvider'
import { useEntries } from '../contexts/EntriesProvider';
import { Container, Box, Typography, Button, createTheme, ThemeProvider, Menu, MenuItem  } from '@mui/material'
import { ReportTable } from '../components/ReportTable'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { v4 as uuidv4 } from 'uuid';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
Chart.register(...registerables);
import * as APITypes from "../API";
import { CreateReportModal } from '../components/modals/CreateReportModal';

import Logo from '../components/dermlogo.png';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MedicationModal } from '../components/modals/MedicationModal';
import { GraphModal } from '../components/modals/GraphModal';


const ReportPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { diagnosis, entryName, userMedication } = location.state || {};
    const { updateExistingEntry, fetchEntries } = useEntries();
    const {reports, createNewReport, fetchReports} = useReports();
    const { entryId } = useParams<"entryId">();
    const  [uploadedImage, setUploadedImage] = useState<File>()
    const [userComments, setUserComments] = useState<string>();
    const [medication, setMedication] = useState<string>(userMedication || "");
    const [isFunctionRunning, setIsFunctionRunning] = useState<boolean>(false)
    const imageURLPath = "https://finaldermiqbucket182827-dev.s3.us-west-1.amazonaws.com/public/";

    const [isModalOpen, setIsModalOpen]  = useState<boolean>(false);
    const [isMedicationModalOpen, setIsMedicationModalOpen]  = useState<boolean>(false);
    const [isGraphModalOpen, setIsGraphModalOpen]  = useState<boolean>(false);

    useEffect(() =>{
      fetchReports(entryId)
    }, [fetchReports, entryId])

    // const chartRef = useRef(null);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
  
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    // useEffect(() => {
    //   if (isGraphModalOpen && chartRef.current && reports && entryId && reports[entryId]) {
    //     const chartContext = chartRef.current.getContext('2d');
    //     const data = {
    //       datasets: [{
    //         label: 'Area over time',
    //         data: reports[entryId].map(report => ({
    //           x: report.createdAt, // ISO8601 string is fine here
    //           y: report.area,
    //         })),
    //         borderColor: '#007bff',
    //         backgroundColor: 'rgba(0, 123, 255, 0.5)',
    //       }],
    //     };
        
    //     const options = {
    //       scales: {
    //         x: {
    //           type: 'time',
    //           time: {
    //             // Specify the format if you're setting a different one for the tooltip
    //             tooltipFormat: 'PPP', // For date-fns, PPP is the equivalent to something like 'Jan 1, 2020'
    //           },
    //           title: {
    //             display: true,
    //             text: 'Date'
    //           },
    //           ticks: {
    //             // Reduce the number of ticks on the x-axis
    //             maxTicksLimit: 10,
    //           }
    //         },
    //         y: {
    //           beginAtZero: true,
    //           title: {
    //             display: true,
    //             text: 'Area (mm^2)',
    //           }
    //         }
    //       },
    //     };
  
    //     const chart = new Chart(chartContext, {
    //       type: 'line',
    //       data: data,
    //       options: options,
    //     });
  
    //     return () => chart.destroy();
    //   }
    // }, [isGraphModalOpen, entryId, reports]);

    // const chartContainerRef = useRef<HTMLCanvasElement>(null);
  
    // useEffect(() => {
    //   let chartInstance: Chart | null = null;
  
    //   if (open && chartContainerRef.current && reports && reports[entryId]) {
    //     const chartContext = chartContainerRef.current.getContext('2d');
    //     if (chartContext) {
    //       const chartData = {
    //         datasets: [
    //           {
    //             label: 'Area over time',
    //             data: reports[entryId].map(report => ({
    //               x: new Date(report.createdAt), // Make sure to convert to Date objects if necessary
    //               y: report.area,
    //             })),
    //             borderColor: '#007bff',
    //             backgroundColor: 'rgba(0, 123, 255, 0.5)',
    //           },
    //         ],
    //       };
  
    //       const options = {
    //         responsive: true,
    //         scales: {
    //           x: {
    //             type: 'time',
    //             time: {
    //               tooltipFormat: 'PPP',
    //             },
    //             title: {
    //               display: true,
    //               text: 'Date',
    //             }
    //           },
    //           y: {
    //             beginAtZero: true,
    //             title: {
    //               display: true,
    //               text: 'Area (mm^2)',
    //             }
    //           }
    //         }
    //       };
  
    //       chartInstance = new Chart(chartContext, {
    //         type: 'line',
    //         data: chartData,
    //         options: options,
    //       });
    //     }
    //   }
  
    //   return () => {
    //     if (chartInstance) {
    //       chartInstance.destroy();
    //     }
    //   };
    // }, [open, reports, entryId]);
  

    const handleSetMedication = (medicationStr: string) =>{
      setMedication(medicationStr)
    }

  const editMedication = async() => {
    if (entryId){
      await updateExistingEntry({id: entryId, medication: medication});
    }
  }
    
  const downloadReport = async () => {
    // const input = document.body; // Adjust this to target the specific element you want to convert
    // const canvas = await html2canvas(input);
    // const imgData = canvas.toDataURL('image/png');
  
    // Calculate dynamic height to maintain aspect ratio
    // const imgWidth = 208; // Approx. A4 width in mm
    // const pageHeight = 295; // A4 height in mm
    // const imgHeight = canvas.height * imgWidth / canvas.width;
  
    // let heightLeft = imgHeight;
    // const doc = new jsPDF('p', 'mm');
    // let position = 0;
  
    // doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    // heightLeft -= pageHeight;
  
    // while (heightLeft >= 0) {
    //   position = heightLeft - imgHeight;
    //   doc.addPage();
    //   doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    // }
  
    doc.save('Vascular-lesionsreport-BOBBY-BRIGGS.pdf');
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

  const handleOpenMedicationModal = () => {
    setIsMedicationModalOpen(true);
  };

  const handleCloseMedicationModal = () => {
    setIsMedicationModalOpen(false);
  };

  const handleImageUpload = (selectedImage: File) => {
    setUploadedImage(selectedImage);
  }
  const handleOpenGraphModal = () => {
    setIsGraphModalOpen(true);
  }
  const handleCloseGraphModal = () => {
    setIsGraphModalOpen(false);
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


const generateSummaryMessages = async (entryId:string, newDisease:string, newSize:number, newUserComments:string, userMedication?:string) => {
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
  if(!medication){
    console.log("no meds")
    messages.push(
      {
        role: "user",
        content: `The patient's current condition of ${newDisease} has a size of ${newSize} mm^2. Based on the previous report information provided and current update, can you summarize the progression of the condition and the user's sentiments about their updated condition so they can share with their physician?`
      }
    );
  }
  else{
    console.log("meds")
    messages.push(
      {
        role: "user",
        content: `The patient's current condition of ${newDisease} has a size of ${newSize} mm^2. The patient's medication for this condition is ${medication}. Based on the previous report information provided and current update, can you summarize the progression of the condition and the user's sentiments about their updated condition so they can share with their physician?`
      }
    );
  }
  

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
      newNLPResponse = await generateSummaryMessages(entryId, diagnosis, formattedSize, userComments, userMedication);
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
  const theme = createTheme({
    typography: {
      fontFamily: [
        'DM Sans',
      ].join(','),
    },
  });

    return (
      <ThemeProvider theme={theme}>      
        <Box
            sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            mb: "-75px",
          }}
        >
          <img src={Logo} alt = "Derm IQ Logo" width="200"/>
        </Box>
        <Container
          sx={{ 
              width: "100%", mt:"40px", pt:"50px", pb: "0px", 
              mx: "auto", maxWidth:"1200px", display:"flex", 
              flexDirection: "row", 
              justifyContent: "space-between"
          }}
          disableGutters
        >
          <IconButton
            onClick={handleGoHome}
          >
            <ArrowBackIcon sx={{ fontSize: '40px', color:"#404040"}} />
          </IconButton>

          <Typography sx={{fontFamily:"DM Sans", fontSize: "35px", color: "#404040", fontWeight: 800, textAlign: "center" }}>
            {`${entryName} Report`}
          </Typography> 
          <div style={{ width:"56px" }}></div>
        </Container>
            <Container
        sx={{ width: "100%", mt:"40px",pt:"30px",pb: "50px", mx: "auto", maxWidth:"1200px", backgroundColor:"white",px:"50px", border:"1px solid #e9e8ed"}}
        disableGutters
      >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    mb: "15px",
                }}
            >
          <Box
            flex={"display"}
            flexDirection={"column"}
            sx={{}}>
            <Typography sx={{fontFamily:"DM Sans", fontSize: "25px", color: "#404040", fontWeight: 500 }}>
              {`Diagnosis: ${diagnosis}`}
            </Typography> 
          </Box>
          <Box sx={{
            display: "flex",
            gap: "10px",
          }}>
            <Button
        aria-controls="more-menu"
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleMenuClick}
        variant="contained"
        sx={{fontFamily: 'DM Sans',
          fontSize: '17px',
          fontWeight: 600,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black', // Add a black border
          '&:hover, &:focus': {
            backgroundColor: 'black',
            color:'white',
            border: '1px solid black', // Add a black border
          },
        }}
      >
        More
      </Button>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'more-button',
        }}
      >
        {/* <MenuItem onClick={() => { handleOpenGraphModal(); handleMenuClose(); }}>View Graph</MenuItem> */}
        <MenuItem onClick={() => { handleOpenMedicationModal(); handleMenuClose(); }}>Update Medication</MenuItem>
        <MenuItem
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/Vascular-lesionsreport-BOBBY-BRIGGS.pdf';
            link.download = 'Vascular-lesionsreport-BOBBY-BRIGGS.pdf';
            link.click();
            handleMenuClose();
          }}
        >
          Download PDF
        </MenuItem>
      </Menu>
      
      <Button
        variant="contained"
        onClick={handleOpenModal}
        sx={{fontFamily:"DM Sans", fontSize: "17px", fontWeight: 600, backgroundColor: "#6583BB",
        color: "white",
        "&:hover, &:focus": {
          backgroundColor: "#5A75A8",
        }}}
      >
        New Report Entry
      </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #e9e8ed",
            borderRadius: 0,
          }}
        >
          {entryId && reports && reports[entryId] && (
            <>
              <ReportTable entryID={entryId}/>
              </>
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
        <MedicationModal 
          open={isMedicationModalOpen}
          onClose={handleCloseMedicationModal}
          handleSetMedication={handleSetMedication}
          editMedication={editMedication}
        />

        {/* <GraphModal open={isGraphModalOpen} onClose={handleCloseGraphModal} entryId={entryId} /> */}
        
      </Container>
      </ThemeProvider>
    )
}

export default ReportPage