
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
import DeleteIcon from '@mui/icons-material/Delete';
import { useReports } from "../contexts/ReportsProvider";



interface Props{
  entryID: string;
  reportID: string;
  imageuri: string;
  nlpresponse: string;
}

export const ReportTableRow = ({entryID, reportID,imageuri, nlpresponse}: Props) => {
    const { deleteExistingReport } = useReports();
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
                {/* this is gonna be an image not typography */}
                {imageuri}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "20%" }}>
            <Typography>
                {nlpresponse}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }}>
          <DeleteIcon onClick={() => deleteExistingReport(entryID, { id: reportID })}/>
        </TableCell>
      </TableRow>
    );
};