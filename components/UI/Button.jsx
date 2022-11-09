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
    <ButtonUI
      variant="contained"
      color={color}
      size={size}
      disableElevation={shadow}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;

const ButtonUI = styled(ButtonMUI)`
  padding: 1em 2.5em;
  font-weight: 800;
  text-transform: capitalize;
  border-radius: 99999px;
  color: ${(props) => props.color === "tertiary" && "#fff"};
`;
