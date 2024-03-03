
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

interface Props {
    entryID?: string;
    entryName?: string | null;
    diagnosis?: string | null;
    bodyPart?: string | null;

}

export const DiagnosisTableRow = ({
    entryID,
    entryName,
    diagnosis,
    bodyPart,
}: Props) => {
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
                Button?
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }}>
            <Typography>
                Button?
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "15%" }}>
            <Typography>
                Button?
            </Typography>
        </TableCell>
        <TableCell sx={{ width: "10%" }}>
            <Typography>
                Button?
            </Typography>
        </TableCell>
        <TableCell align="right" sx={{ width: "5%" }}>
            <Typography>
                Button?
            </Typography>
        </TableCell>
      </TableRow>
    );
};