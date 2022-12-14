import { TextField, Typography } from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import React from "react";

const InputField = ({
  label,
  placeHolder,
  type,
  color,
  value,
  onChange = () => {},
  fullWidth = false,
  fontSize = "14px",
}) => {
  const styles = {
    component: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      mb: 1,
    },
    textLabel: {
      marginBottom: "8px",
      fontSize: `${fontSize}`,
      fontWeight: "600",
      marginTop: "5px",
    },
    textField: {
      border: "1px solid #8E8E8E",
      padding: "13px 15px",
      outline: "none",
      maxWidth: `${fullWidth ? "100%" : "400px"}`,
      fontSize: `${fontSize}`,
      letterSpacing: "1px",
      background: `${color == "transparent" ? "transparent" : "#fff"}`,
      borderRadius: `${type == "rounded" ? "30px" : "3px"}`,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  };

  return (
    <div>
      <Box sx={styles.component}>
        {label && <span style={styles.textLabel}>{label}</span>}
        <input
          placeholder={placeHolder}
          style={styles.textField}
          value={value}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};

export default InputField;
