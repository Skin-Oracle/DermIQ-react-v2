import { Box, Button, Modal, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import { useEffect, useState } from "react";

interface Props{
    open: boolean;
    onClose: () => void;
    handleSetMedication: (medicationStr: string) => void;
    editMedication: () => void;
}
export const MedicationModal = ({open, onClose, handleSetMedication, editMedication}: Props) => {
    const [medicationName, setMedicationName] = useState('');
    const [medicationDosage, setMedicationDosage] = useState('');
    const [medicationFrequency, setMedicationFrequency] = useState('');
    const isConfirmDisabled = !medicationName || !medicationDosage || !medicationFrequency;


    useEffect(() => {
        handleSetMedication(medicationDosage + " " + medicationName + " " + medicationFrequency);
    }, [medicationDosage, medicationName, medicationFrequency, handleSetMedication]);

    const handleMedicationNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setMedicationName(name);
    };

    const handleMedicationDosageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dosage = event.target.value;
        setMedicationDosage(dosage);
    };

    const handleMedicationFrequencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const frequency = event.target.value;
        setMedicationFrequency(frequency);
    };

    const handleSubmit = () => {
        handleSetMedication(medicationDosage + " " + medicationName + " " + medicationFrequency);
        editMedication();
        onClose();
    }

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
                            <Typography sx={{fontFamily:"DM Sans", fontSize: "25px", color: "#404040", fontWeight: 800 }}>Update Medication</Typography>

                            <TextField
                                required
                                label="Medication Name"
                                variant="outlined"
                                value={medicationName}
                                onChange={handleMedicationNameChange}
                            />

                            <TextField
                                required
                                label="Dosage"
                                variant="outlined"
                                value={medicationDosage}
                                onChange={handleMedicationDosageChange}
                            />

                            <TextField
                                required
                                label="Frequency"
                                variant="outlined"
                                value={medicationFrequency}
                                onChange={handleMedicationFrequencyChange}
                            />

                            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", gap: "20px" }}>
                                <Button variant="outlined" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                variant="contained"
                                disabled={isConfirmDisabled}
                                onClick={handleSubmit}
                                >
                                    Confirm
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </>
            </Modal>
        </ThemeProvider>
    )
}