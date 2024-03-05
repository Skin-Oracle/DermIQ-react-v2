
import {
    Button,
    IconButton,
    TableCell,
    TableRow,
    Typography,
  } from "@mui/material";
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useNavigate } from "react-router-dom";
  import { useEntries } from "../contexts/EntriesProvider";
interface Props {
    entryID: string;
    entryName?: string | null;
    diagnosis?: string | null;
    bodyPart?: string | null;
    createdAt?: string | null;
}

export const DiagnosisTableRow = ({
    entryID,
    entryName,
    diagnosis,
    bodyPart,
    createdAt,
}: Props) => {
    const navigate = useNavigate();
    const { deleteExistingEntry} = useEntries();
    return (
        <TableRow
        sx={{
          "& td": {
            color: "#404040",
            p: "12px 16px",
            borderColor: "rgb(236, 236, 236)",
            "&:last-child": { pr: "4px" },
          },
        }}
      >
        <TableCell
          colSpan={2}
          sx={{
            width: "35%",
            fontSize: "0.875rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: 500,
          }}
        >
            <Typography>
                {entryName}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "20%" }}>
            <Typography>
                {diagnosis}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }}>
            <Typography>
                {bodyPart}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }}>
            <Typography>
                {createdAt}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "10%" }}>
            <Typography>
                <Button
                variant="contained"
                onClick={()=>{if(entryID){
                    console.log(diagnosis)
                    navigate(`reports/${entryID}`, { state: { diagnosis } });
            }    
                }}
                >
                    View Report
                </Button>
            </Typography>
        </TableCell>
        <TableCell align="right" sx={{ width: "5%" }}>
            <IconButton
            onClick={() =>{deleteExistingEntry({id: entryID})}}>
                <DeleteIcon sx={{ fontSize: "18px" }} />
            </IconButton>
        </TableCell>
      </TableRow>
    );
};