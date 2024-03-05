
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
                Date
              </TableCell>
              <TableCell sx={{ width: "15%" }}>
                Area
              </TableCell>
              <TableCell sx={{ width: "30%" }}>
                Image
              </TableCell>
              <TableCell sx={{ width: "40%" }}>
                Notes
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
  