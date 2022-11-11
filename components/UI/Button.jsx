import { Button as ButtonMUI } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const Button = ({
  children,
  color = "primary",
  size = "large",
  shadow = false,
  onClick = () => {},
  props,
}) => {
  return (
    <ButtonMUI
      sx={[styles.button, color === "tertiary" && styles.textWhite]}
      variant="contained"
      color={color}
      size={size}
      disableElevation={shadow}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;

const styles = {
  button: {
    padding: "1rem 3rem",
    fontSize: "16px",
    whiteSpace: "nowrap",
    fontWeight: "800",
    textTransform: "capitalize",
    borderRadius: "99999px",
  },
  textWhite: {
    color: "#fff",
  },
};

const ButtonUI = styled(ButtonMUI)``;
