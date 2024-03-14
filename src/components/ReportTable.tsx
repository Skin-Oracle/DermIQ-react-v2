
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
    import { useReports } from "../contexts/ReportsProvider";
    import { ReportTableRow } from "./ReportTableRow";
    import { ReportType } from "../utils/Types";

  interface Props{
    entryID: string;
  }
  export const ReportTable = ({entryID} : Props) => {

    const {reports} = useReports(); // Assuming fetchReportForEntry is a function that handles fetching reports for a particular entryId
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ "& th": { p: "8px 16px" } }}>
              <TableCell sx={{ width: "15%" }}>
                <Typography sx={{fontFamily:"DM Sans", fontSize: "24px", color: "#404040", fontWeight: 800 }}>

                  Date
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "15%" }}>
              <Typography sx={{fontFamily:"DM Sans", fontSize: "24px", color: "#404040", fontWeight: 800 }}>

                  Area
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "30%" }}>
              <Typography sx={{fontFamily:"DM Sans", fontSize: "24px", color: "#404040", fontWeight: 800 }}>

                  Image
                </Typography>
              </TableCell>
              <TableCell sx={{ width: "40%" }}>
              <Typography sx={{fontFamily:"DM Sans", fontSize: "24px", color: "#404040", fontWeight: 800 }}>

                  Notes
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports && reports[entryID] && reports[entryID].map((reportEntry) => {
              const { id, imageuri, nlpresponse, createdAt, area } = reportEntry;
              return (
                imageuri != null && nlpresponse != null && area != null && (
                  <ReportTableRow
                    entryID={entryID}
                    createdAt={createdAt.split('T')[0]}
                    reportID={id}
                    imageuri={imageuri}
                    nlpresponse={nlpresponse}
                    area={area.toFixed(2)}
                  />
                )
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  