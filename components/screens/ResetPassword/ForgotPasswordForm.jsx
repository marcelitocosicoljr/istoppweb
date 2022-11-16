import React from "react";
import Title from "components/UI/Title";
import { Typography, Box } from "@mui/material";
import InputField from "components/UI/InputField";
import CustomButton from "components/UI/CustomButton";
import Link from "next/link";

const ForgotPasswordForm = () => {
  return (
    <Box sx={styles.container}>
      <form style={styles.form}>
        <Box sx={{ margin: "auto 0" }}>
          <Title sx={{ marginBottom: "1rem" }}>Forgot Password</Title>
          <Typography
            variant="h6"
            sx={{ lineHeight: "1.3", fontWeight: "700" }}
          >
            Please enter your email address, username, or mobile number and you
            will receive a verification code to change your password
          </Typography>
          <Box sx={{ marginTop: "4rem" }}>
            <InputField
              type="rounded"
              label="Enter Username | Email Address | Mobile Number"
              fullWidth
              fontSize="1rem"
            />
          </Box>
          <Box sx={{ marginTop: "6rem" }}>
            <Link href={"/forgot-password/verify-account"}>
              <CustomButton>Send</CustomButton>
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;

const styles = {
  container: {
    padding: { lg: "4rem 6rem", xl: "6rem 10rem" },
    wdith: "100%",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "100%",
  },
};
