import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DisplayTable = ({ rows = [], header = [], variant = "default" }) => {
  const columns = Object.keys(rows[0]);

  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState({
    column: columns[0],
    asc: false,
  });

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  //For Paginations
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortData = (rows) => {
    const { column, asc } = sortBy;

    return rows.sort((a, b) => {
      if (a[column]?.toString() > b[column]?.toString()) return asc ? -1 : 1;

      if (b[column]?.toString() > a[column]?.toString()) return asc ? 1 : -1;

      return 0;
    });
  };

  console.log(sortData(rows));

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={variant === "default" ? styles.tableHead : styles.tableHead2}
            >
              {header?.map((column, idx) => (
                <TableCell key={idx} sx={{ fontWeight: 800 }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortData(rows).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rows
            ).map((row, idx) => (
              <>
                <TableRow key={row.trip_start}>
                  <TableCell>{idx + 1}.</TableCell>
                  {columns.map(
                    (column, idx) =>
                      column !== "id" && (
                        <TableCell key={idx} component="th" scope="row">
                          {row[column]}
                        </TableCell>
                      )
                  )}
                </TableRow>
              </>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const styles = {
  tableHead: {
    backgroundColor: "#c1c1c1",
    fontWeight: "800",
    "&>*": {
      color: "#4d4d4d",
      fontWeight: "800",
    },
  },

  tableHead2: {
    backgroundColor: "#fff",
    borderBottom: "2px solid #4d4d4d",
    fontWeight: "800",
    "&>*": {
      color: "#4d4d4d",
      fontWeight: "800",
    },
  },

  center: {
    display: "flex",
    gap: ".25rem",
    cursor: "pointer",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    marginTop: "1rem",
  },
};

export default DisplayTable;
