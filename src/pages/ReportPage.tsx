import React from 'react'
import { ReportType } from '../utils/Types'
import { useReports } from '../contexts/ReportsProvider'
import { Container, Box, Typography, Button  } from '@mui/material'
import { ReportTable } from '../components/ReportTable'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


interface Props{
    entryID: string;
    entryName: string;

}
const ReportPage = ({entryID, entryName}:Props) => {
    const {createNewReport} = useReports();
    
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
            ... Report
          </Typography> 

          <Button
          variant="contained"
          onClick={() => downloadReport()}
          >
            Download
          </Button>
          <Button
            variant="contained"
            // onClick={() => navigate("/datasources/create")}
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
          <ReportTable entryID= {entryID}/>
        </Box>
      </Container>
    )
}

export default ReportPage