import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const InfoCard = ({ label = "", value = "" }) => {
  return (
    <Box sx={[styles.container]}>
      <label style={styles.label}>{label}</label>
      <h2 style={styles.value}>{value}</h2>
    </Box>
  );
};

export default InfoCard;

//Styles
const styles = {
  container: {
    padding: "1.3rem 2.0rem .7rem",
    borderRadius: " 0.2rem",
    backgroundColor: "#FBDC47",
    maxWidth: "16rem",
    width: "100%",
  },

  label: {
    fontSize: "0.65rem",
  },

  value: {
    margin: "0",
    fontSize: "1.825rem",
    fontWeight: "800",
    marginTop: "-5px",
  },
};
