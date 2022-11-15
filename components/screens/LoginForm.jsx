import React from "react";
import Title from "components/UI/Title";
import { Typography, Box } from "@mui/material";
import InputField from "components/UI/InputField";
import Button from "components/UI/Button";

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
        <Title sx={{ marginBottom: "2.5rem" }}>
          Transport Data <br />
          Made Accessible
        </Title>
        <InputField
          type="rounded"
          label="Username"
          fullWidth
          placeHolder="Enter your username"
        />
        <InputField
          type="rounded"
          label="Password"
          fullWidth
          placeHolder="Enter your password"
        />
        <Box sx={{ marginTop: "2.5rem" }}>
          <Button>Log in</Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

const styles = {
  container: {
    padding: { lg: "4rem", xl: "6rem 8rem" },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};
