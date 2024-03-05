import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import PhotoUploadComponent from "../PhotoUploadComponent";
import { useState } from "react";

interface Props{
    open: boolean;
    onClose: () => void;
    handleImageUpload: (file: File) => void;
    handleCreateReport: () => void;
    handleSetUserComments: (part: string) => void;
    isFunctionRunning: boolean;
}
export const CreateReportModal = ({open, onClose, handleImageUpload, handleCreateReport, handleSetUserComments, isFunctionRunning}: Props) => {

    const [userComments, setUserComments] = useState('');

  const isConfirmDisabled = !userComments;

  const handleUserCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setUserComments(name);
    handleSetUserComments(name);
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
                            <Typography>Add Report Entry</Typography>
                            <PhotoUploadComponent
                                handleImageUpload={handleImageUpload}
                             />
                            <TextField
                            required
                            label="User comments"
                            value={userComments}
                            onChange={handleUserCommentsChange}
                            />

                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                <Button variant="outlined" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                variant="contained"
                                onClick={handleCreateReport}
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