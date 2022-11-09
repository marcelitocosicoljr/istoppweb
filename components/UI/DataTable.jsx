import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

const data = [
  {
    id: 1,
    trip_start: "8:25 PM",
    duration: 7.608721714,
  },
  {
    id: 2,
    trip_start: "9:30 AM",
    duration: 2.608501808,
  },
  {
    id: 3,
    trip_start: "5:27 PM",
    duration: 3.818998747,
  },
  {
    id: 4,
    trip_start: "2:40 PM",
    duration: 1.81176789,
  },
  {
    id: 5,
    trip_start: "10:42 AM",
    duration: 7.991921211,
  },
  {
    id: 6,
    trip_start: "8:57 AM",
    duration: 5.939031791,
  },
  {
    id: 7,
    trip_start: "1:15 PM",
    duration: 4.185985442,
  },
  {
    id: 8,
    trip_start: "8:01 PM",
    duration: 7.375507698,
  },
  {
    id: 9,
    trip_start: "11:02 PM",
    duration: 7.476034868,
  },
  {
    id: 10,
    trip_start: "2:11 PM",
    duration: 2.978955218,
  },
];

const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>Trip Start</StyledTableCell>
            <StyledTableCell>Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.trip_start}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.duration}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8F8F8F",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default DataTable;
