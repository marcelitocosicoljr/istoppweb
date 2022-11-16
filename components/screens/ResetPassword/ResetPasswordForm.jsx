import React from "react";
import Title from "components/UI/Title";
import { Typography, Box } from "@mui/material";
import InputField from "components/UI/InputField";
import CustomButton from "components/UI/CustomButton";
import Link from "next/link";

const NewPasswordForm = () => {
  return (
    <Box sx={styles.container}>
      <form style={styles.form}>
        <Box sx={{ margin: "auto 0" }}>
          <Title sx={{ marginBottom: "1rem" }}>
            Enter New <br />
            Password
          </Title>
          <Typography
            variant="h6"
            sx={{ lineHeight: "1.3", fontWeight: "700", maxWidth: "18rem" }}
          >
            Your new password must be different from your previously used
            passwords.
          </Typography>
          <Box sx={{ marginTop: "2rem" }}>
            <InputField
              type="rounded"
              label="New Password"
              fullWidth
              fontSize="1rem"
            />
            <InputField
              type="rounded"
              label="Re-enter New Password"
              fullWidth
              fontSize="1rem"
            />
          </Box>
          <Box sx={{ marginTop: "4rem" }}>
            <Link href={"/forgot-password/password-changed"}>
              <CustomButton>Save</CustomButton>
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default NewPasswordForm;

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
