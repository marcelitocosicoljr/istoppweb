import { useState } from "react";
import usePagination from "hooks/usePagination";
import Pagination from "@mui/material/Pagination";

const DisplayTable = ({
  rows = [],
  header = [],
  index = false,
  lined = false,
}) => {
  const columns = Object.keys(rows[0]);
  let [page, setPage] = useState(1);
  const showPerPage = 10;

  const [sortBy, setSortBy] = useState({
    column: columns[0],
    asc: true,
  });

  function sort(rows = []) {
    const { column, asc } = sortBy;
    return rows.sort((a, b) => {
      if (a[column]?.toString() > b[column]?.toString) return asc ? -1 : 1;
      if (b[column]?.toString() > a[column]?.toString) return asc ? 1 : -1;
      return 0;
    });
  }

  const count = Math.ceil(rows.length / showPerPage);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    rows,
    showPerPage
  );

  const handleChange = (e, p) => {
    setPage(p);
    jump(p);
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead style={lined ? styles.tableHeadLine : styles.tableHead}>
          <tr>
            {header?.map((val, idx) => (
              <th
                key={idx}
                style={styles.heading}
                onClick={() =>
                  setSortBy((prev) => ({ column: val, asc: !prev.asc }))
                }
              >
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={styles.body} >
          {sort(currentData())?.map((row, idx) => (
            <tr key={idx} style={{ backgroundColor: idx % 2 ==  0 ? '#E2E0E0': '#D1CECE' }}>
              {index && <td style={styles.body}>{idx + 1}.</td>}
              {columns.map(
                (column, idx) =>
                  column !== "id" && (
                    <td key={idx} style={styles.body}>
                      {row[column]}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        <Pagination
          sx={styles.paginationSpacing}
          count={count}
          size="small"
          page={page}
          shape="rounded"
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    overflowX: "auto",
    backgroundColor: "#fff",
    border: "1px solid #d1d1d1",
    padding: ".5rem",
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  },

  table: {
    minWidth: "100%",
    fontSize: " 0.875rem" /* 14px */,
    lineHeight: "1.25rem" /* 20px */,
    borderCollapse: "collapse",
  },

  tableHead: {
    backgroundColor: "#d4d4d4",
  },

  tableHeadLine: {
    backgroundColor: "#030744",
    borderBottom: "2px solid #d4d4d4",
  },

  heading: {
    whiteSpace: "nowrap",
    padding: "0.625rem 1rem",
    textAlign: "left",
    fontWeight: "500",
    color: "#fff",
    cursor: "pointer",
    fontSize:'14px'
  },

  tableBody: {
    borderBottom: "1px solid #ebebeb",
  },

  body: {
    whiteSpace: "nowrap",
    padding: "0.625rem 1rem",
    textAlign: "left",
    color: "#242424",
    "&:first-of-type": {
      fontWeight: "600",
    },
    fontSize:'14px'
  },

  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: ".5rem",
  },

  paginationSpacing: {
    "&>*": {
      display: "flex",
      gap: ".5rem",
    },
  },
};

export default DisplayTable;
