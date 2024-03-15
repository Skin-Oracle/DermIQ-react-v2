import { Box, Button, Modal, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import PhotoUploadComponent from "../PhotoUploadComponent";
import { useState } from "react";

interface Props{
    open: boolean;
    onClose: () => void;
    handleImageUpload: (file: File) => void;
    handleCreateEntry: () => void;
    handleSetBodyPart: (part: string) => void;
    handleSetEntryName: (name: string) => void;
    isFunctionRunning: boolean;
}
export const CreateDiagnosisModal = ({open, onClose, handleImageUpload, handleCreateEntry, handleSetBodyPart, handleSetEntryName, isFunctionRunning}: Props) => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'DM Sans',
          ].join(','),
        },
      });
    const [entryName, setEntryName] = useState('');
    const [bodyPart, setBodyPart] = useState('');
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
    const isConfirmDisabled = !entryName || !bodyPart || !isPhotoUploaded; // Confirms is disabled if any of the fields is empty

    const handleImageUploadWrapper = (file: File) => {
        handleImageUpload(file);
        setIsPhotoUploaded(true); // Set to true once a photo is uploaded
    };
  const handleEntryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setEntryName(name);
    handleSetEntryName(name);
  };

  const handleBodyPartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const part = event.target.value;
    setBodyPart(part);
    handleSetBodyPart(part);
  };


    return(
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={onClose}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
            >
                <>
                    <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 800,
                        backgroundColor: "white",
                        borderRadius: 0,
                        overflowY: "hidden",
                    }}
                    >
                        <Box
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            width: "100%",
                            height: "100%",
                            mt: "10px",
                            p: "30px",
                            overflowY: "auto",
                            }}
                        >
                            <Typography sx={{fontFamily:"DM Sans", fontSize: "25px", color: "#404040", fontWeight: 800 }}>
                                Add Diagnosis
                            </Typography>
                            <TextField
                            required
                            label="Name"
                            value={entryName}
                            onChange={handleEntryNameChange}
                            sx={{
                                '& .MuiInputBase-input': {
                                  fontFamily: 'DM Sans', // For the text the user inputs
                                },
                                '& .MuiInputLabel-root': { // Target the label
                                  fontFamily: 'DM Sans', // Set the font family for the label
                                }
                              }}
                            />
                            <TextField
                            required
                            label="Body Part"
                            value={bodyPart}
                            onChange={handleBodyPartChange}
                            />
                            <Box sx={{display:"flex", width:"100%",alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
                            <Typography>Please upload an image that has a US quarter placed next to the mark</Typography>
                            </Box>
                            <PhotoUploadComponent
                                handleImageUpload={handleImageUploadWrapper}
                             />
                        {isFunctionRunning ? (
                                <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                <l-cardio
                                size="50"
                                stroke="4"
                                speed="2" 
                                color="black" 
                              ></l-cardio>
                              </ Box>
                                
                            ):(
                                <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                    <Button variant="outlined" onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleCreateEntry}
                                        disabled={isConfirmDisabled}
                                    >
                                        Confirm
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </>
            </Modal>
        </ThemeProvider>
    )
}