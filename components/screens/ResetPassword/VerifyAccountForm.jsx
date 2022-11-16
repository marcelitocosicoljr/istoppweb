import React from "react";
import Title from "components/UI/Title";
import { Typography, Box } from "@mui/material";
import InputField from "components/UI/InputField";
import CustomButton from "components/UI/CustomButton";
import Link from "next/link";
import Button from "@mui/material";

const VerifyAccountForm = () => {
  return (
    <Box sx={styles.container}>
      <form style={styles.form}>
        <Box sx={{ margin: "auto 0" }}>
          <Title sx={{ marginBottom: "1rem" }}>
            Verify Your <br />
            Account
          </Title>
          <Typography
            variant="h6"
            sx={{ lineHeight: "1.3", fontWeight: "700", maxWidth: "23rem" }}
          >
            Please enter the verification code sent to you by the system admin.
          </Typography>
          <Box sx={{ marginTop: "2rem" }}>
            <InputField
              type="rounded"
              label="Enter Code"
              fullWidth
              fontSize="1rem"
            />
            <CustomButton
              variant="text"
              sx={{
                padding: ".25rem",
                color: "#6493E3",
                fontWeight: "600",
                margin: "2rem 0",
                borderRadius: "0",
              }}
            >
              Resend code
            </CustomButton>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Link href={"/forgot-password/reset-password"}>
              <CustomButton>Verify</CustomButton>
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default VerifyAccountForm;

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
