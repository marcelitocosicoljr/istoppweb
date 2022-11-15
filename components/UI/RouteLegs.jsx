import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const RouteLegs = ({ index, origin, destination }) => {
  return (
    <Box sx={styles.container}>
      <span>{index}</span>
      <span>Origin</span>
      <span>{origin}</span>
      <span>Destination</span>
      <span>{destination}</span>
    </Box>
  );
};

export default RouteLegs;

const styles = {
  container: {
    padding: "1rem",
    border: "1px solid #acacac",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-evenly",
    gap: "2rem",
    borderRadius: " 0.25rem",
  },
};
