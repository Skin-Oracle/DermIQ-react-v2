
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DiagnosisTableRow } from '../components/DiagnosisTableRow';
import { useEntries } from "../contexts/EntriesProvider";

export const DiagnosisTable = () => {
  const { entries } = useEntries();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ "& th": { p: "8px 16px" } }}>
            <TableCell colSpan={2} sx={{ width: "20%" }}>
              Name
            </TableCell>
            <TableCell sx={{ width: "25%" }}>
              Diagnosis
            </TableCell>
            <TableCell sx={{ width: "15%" }}>
              Body Part
            </TableCell>
            <TableCell sx={{ width: "15%" }}>
              Date Created
            </TableCell>
            <TableCell sx={{ width: "20%" }} />
            <TableCell sx={{ width: "5%" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.length !==0 ? (
            entries
            .map((entry) => {
              const { id, body_part, entry_name, diagnosis } = entry;
              return (
                <DiagnosisTableRow
                  key={id}
                  entryID={id}
                  entryName={entry_name}
                  diagnosis={diagnosis}
                  bodyPart={body_part}
                />
              );
            })):(
              <TableRow>
              <TableCell colSpan={6} sx={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 250,
                  }}
                >
                  <Typography sx={{ color: "#404040", fontSize: "1.25rem" }}>
                    You do not have any entries
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#727272",
                      maxWidth: "75%",
                      textAlign: "center",
                      mb: "10px",
                    }}
                  >
                    To get started, please add a diagnosis
                  </Typography>
                  <Button
                    variant="contained"
                    // onClick={() => navigate("/datasources/create")}
                  >
                    New Diagnosis
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
