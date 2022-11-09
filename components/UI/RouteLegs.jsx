import React from "react";
import styled from "@emotion/styled";

const RouteLegs = ({ index, origin, destination }) => {
  return (
    <Container>
      <span>{index}</span>
      <span>Origin</span>
      <span>{origin}</span>
      <span>Destination</span>
      <span>{destination}</span>
    </Container>
  );
};

export default RouteLegs;

const Container = styled.div`
  padding: 1rem;
  border: 1px solid #acacac;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  border-radius: 0.25rem;
`;
