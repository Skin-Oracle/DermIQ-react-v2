import { Box, Button, Modal, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import PhotoUploadComponent from "../PhotoUploadComponent";
import { useState } from "react";
import { cardio } from 'ldrs'

interface Props{
    open: boolean;
    onClose: () => void;
    handleImageUpload: (file: File) => void;
    handleCreateReport: () => void;
    handleSetUserComments: (part: string) => void;
    isFunctionRunning: boolean;
}
export const CreateReportModal = ({open, onClose, handleImageUpload, handleCreateReport, handleSetUserComments, isFunctionRunning}: Props) => {
    cardio.register()
    const [userComments, setUserComments] = useState('');
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const isConfirmDisabled = !userComments || !isPhotoUploaded; // Confirms is disabled if any of the fields is empty

  const handleUserCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setUserComments(name);
    handleSetUserComments(name);
  };

  const handleConfirm = () => {
    handleCreateReport();
    setUserComments("")
  }
  const handleImageUploadWrapper = (file: File) => {
    handleImageUpload(file);
    setIsPhotoUploaded(true); // Set to true once a photo is uploaded
};

  const theme = createTheme({
    typography: {
      fontFamily: [
        'DM Sans',
      ].join(','),
    },
  });
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
                            <Typography sx={{fontFamily:"DM Sans", fontSize: "25px", color: "#404040", fontWeight: 800 }}>Add Report Entry</Typography>
                            <PhotoUploadComponent
                                handleImageUpload={handleImageUploadWrapper}
                             />
                            <TextField
                            required
                            label="User comments"
                            value={userComments}
                            onChange={handleUserCommentsChange}
                            disabled={isFunctionRunning}
                            />

                        {isFunctionRunning ? (
                                <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                    <l-cardio
                                        size="50"
                                        stroke="4"
                                        speed="2" 
                                        color="black" 
                                    ></l-cardio>
                                </Box>
                            ):(
                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                <Button variant="outlined" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                variant="contained"
                                onClick={handleConfirm}
                                disabled={isConfirmDisabled}
                                >
                                    Confirm
                                </Button>
                            </Box>)}
                        </Box>
                    </Box>
                </>
            </Modal>
        </ThemeProvider>
    )
}