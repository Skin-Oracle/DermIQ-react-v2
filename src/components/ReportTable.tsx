
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
              <TableCell sx={{ width: "10%" }}>
                Date
              </TableCell>
              <TableCell sx={{ width: "10%" }}>
                Area
              </TableCell>
              <TableCell sx={{ width: "30%" }}>
                Image
              </TableCell>
              <TableCell sx={{ width: "45%" }}>
                Notes
              </TableCell>
              <TableCell sx={{ width: "5%" }}>
                {/* delete */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports && reports[entryID] && reports[entryID].map((reportEntry) => {
              const { id, imageuri, nlpresponse } = reportEntry;
              return (
                imageuri != null && nlpresponse != null && (
                  <ReportTableRow
                    entryID={entryID}
                    reportID={id}
                    imageuri={imageuri}
                    nlpresponse={nlpresponse}
                  />
                )
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  