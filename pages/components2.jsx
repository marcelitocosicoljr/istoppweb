import React from "react";
import Button from "components/UI/Button";
import Header from "components/UI/Header";
import InfoCard from "components/UI/InfoCard";
import DataTable from "components/UI/DataTable";
import RouteLegs from "../components/UI/RouteLegs";
import styled from "@emotion/styled";

const ComponentPage2 = () => {
  return (
    <Container>
      <div>
        <Header>Mars</Header>
        <Header color="dark">Dark Header</Header>
      </div>
    </Container>
  );
};

export default ComponentPage2;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const Group = styled.div`
  display: flex;
  gap: 2rem;
`;
