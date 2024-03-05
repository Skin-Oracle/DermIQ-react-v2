
import {
    Box,
    Button,
    CardMedia,
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
  createdAt: string;
  area: string;
}

export const ReportTableRow = ({entryID, reportID,imageuri, nlpresponse, createdAt, area}: Props) => {
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
        <TableCell sx={{ width: "10%" }}>
            <Typography>
                {createdAt}
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "10%" }}>
            <Typography>
                {`${area}  mm^2`}
            </Typography>
        </TableCell>
        <TableCell
          sx={{
            width: "35%",
          }}
        >
            <CardMedia
              component="img"
              image={imageuri}
              alt="ailment image" // Provide a description for screen readers
              sx={{ 
                width: '100%',      // Make image fill the cell width
                height: 'auto'      // Maintain image aspect ratio
              }}
            />
        </TableCell>
        <TableCell sx={{ width: "45%" }}>
            <Typography>
              {nlpresponse}
            </Typography>
        </TableCell>
      </TableRow>
    );
};