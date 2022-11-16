import React from "react";
import Title from "components/UI/Title";
import { Typography, Box } from "@mui/material";
import CustomButton from "components/UI/CustomButton";
import Link from "next/link";

const PasswordChangedSuccess = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={{ margin: "auto 0" }}>
        <Title sx={{ marginBottom: "1rem" }}>Password Changed!</Title>
        <Typography
          variant="h6"
          sx={{ lineHeight: "1.3", fontWeight: "700", maxWidth: "25rem" }}
        >
          You&apos;re all set. Your password has been changed successfully.
        </Typography>
        <Box sx={{ marginTop: "3rem" }}>
          <Link href={"/"}>
            <CustomButton>Back to ISTOPP Website</CustomButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordChangedSuccess;

const styles = {
  container: {
    padding: { lg: "4rem 6rem", xl: "6rem 10rem" },
    wdith: "100%",
    display: "flex",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "100%",
  },
};
