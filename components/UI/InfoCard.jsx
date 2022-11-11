import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const InfoCard = ({ label = "", value = "" }) => {
  const theme = useTheme();

  return (
    <Container color={theme}>
      <span sx={{ fontSize: "0.75rem" }}>{label}</span>
      <Value>{value}</Value>
    </Container>
  );
};

export default InfoCard;

//Styles
const Container = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.palette.secondary.main};
  max-width: 16rem;
  width: 100%;
`;

const Value = styled.h2`
  margin: 0;
  font-size: 1.875rem;
  font-weight: 800;
`;
