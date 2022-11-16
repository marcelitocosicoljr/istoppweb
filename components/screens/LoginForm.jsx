import React from "react";
import Title from "components/UI/Title";
import { Typography, Box, Button } from "@mui/material";
import InputField from "components/UI/InputField";
import CustomButton from "components/UI/CustomButton";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Box sx={styles.container}>
      <form style={styles.form}>
        <Typography
          variant="h6"
          sx={{
            lineHeight: "1.3",
            fontWeight: "800",
            color: "#030744",
            marginBottom: "4rem",
          }}
        >
          Information System on Transport <br /> Operation in Puerto Princesa
        </Typography>
        <Box sx={{ margin: "auto 0" }}>
          <Title sx={{ marginBottom: "2.5rem" }}>
            Transport Data <br />
            Made Accessible
          </Title>
          <Box>
            <InputField
              type="rounded"
              label="Username"
              fullWidth
              fontSize="1rem"
            />
            <InputField
              type="rounded"
              label="Password"
              fullWidth
              fontSize="1rem"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/forgot-password">
              <CustomButton
                variant="text"
                sx={{
                  padding: ".25rem",
                  color: "#6493E3",
                  fontWeight: "600",
                  margin: ".25rem 0",
                  borderRadius: "0",
                }}
              >
                Forgot Password?
              </CustomButton>
            </Link>
          </Box>
          <Box sx={{ marginTop: "2.5rem" }}>
            <Link href={"/dashboard"}>
              <CustomButton>Log in</CustomButton>
            </Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

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
