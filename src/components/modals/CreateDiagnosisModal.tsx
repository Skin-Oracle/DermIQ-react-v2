import { Box, Button, Modal, TextField, Typography } from "@mui/material"
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

    const [entryName, setEntryName] = useState('');
  const [bodyPart, setBodyPart] = useState('');

  const isConfirmDisabled = !entryName || !bodyPart; // Confirms is disabled if any of the fields is empty

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
        <>
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
                            <Typography>Add Diagnosis</Typography>
                            <TextField
                            required
                            label="Name"
                            value={entryName}
                            onChange={handleEntryNameChange}
                            />
                            <TextField
                            required
                            label="Body Part"
                            value={bodyPart}
                            onChange={handleBodyPartChange}
                            />
                            <PhotoUploadComponent
                                handleImageUpload={handleImageUpload}
                             />

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
                        </Box>
                    </Box>
                </>
            </Modal>
        </>
    )
}