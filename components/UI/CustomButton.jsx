import { Button as ButtonMUI } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  color = "primary",
  size = "large",
  shadow = false,
  onClick = () => {},
  props,
  sx = "",
  variant = "contained",
}) => {
  return (
    <ButtonMUI
      sx={[styles.button, color === "tertiary" && styles.textWhite, sx]}
      variant={variant}
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

export default CustomButton;

const styles = {
  button: {
    padding: ".7rem 3rem",
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
