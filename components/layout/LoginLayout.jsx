import React from "react";
import Image from "next/image";
import LogoWhite from "public/images/istoppWhite.png";
import Title from "../UI/Title";
import { Box, Typography } from "@mui/material";

const LoginLayout = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftPane}>{children}</Box>
      <Box sx={styles.rightPane}>
        <Box sx={styles.rightPaneContainer}>
          <Box sx={styles.logoContainer}>
            <Image src={LogoWhite} alt="ISTOPP Logo" fill />
          </Box>
          <Title color="white">What is ISTOPP?</Title>
          <Typography sx={{ marginTop: ".25rem", fontSize: "1.125" }}>
            The Information System on Transport Operation in Puerto Princesa
            (ISTOPP) Insert About Section Here
          </Typography>
          <Typography sx={{ fontSize: "1.125" }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetu
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125",
              alignSelf: "end",
              marginTop: "3rem",
              color: "#808080",
              fontWeight: "300",
            }}
          >
            Powered by: SaveTravelPH
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginLayout;

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    height: "100vh",
  },

  leftPane: {
    padding: "1rem",
  },

  rightPane: {
    backgroundColor: "#030744",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },

  logoContainer: {
    position: "relative",
    width: { lg: "16rem", xl: "20rem" },
    height: { lg: "16rem", xl: "20rem" },
  },

  rightPaneContainer: {
    maxWidth: { lg: "70%", xl: "55%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    color: "#fff",
    textAlign: "center",
  },
};
