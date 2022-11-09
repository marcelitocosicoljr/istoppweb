import React from "react";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import InfoCard from "../components/UI/InfoCard";
import DataTable from "../components/UI/DataTable";
import RouteLegs from "../components/UI/RouteLegs";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const ComponentPage1 = () => {
  return (
    <Container>
      <div>

        <Header>Default Header</Header>
        <Header color="dark">Dark Header</Header>
      </div>
      <Group>
        <Button>Default Button</Button>
        <Button shadow>No Shadow Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="white">White Button</Button>
        <Button color="error">Red Button</Button>
        <Button color="tertiary">Tertiary Button</Button>
      </Group>
      <Group>
        <InfoCard label="Buses on the route" value="4" />
        <InfoCard label="Number of trips" value="9" />
      </Group>
      <div>
        <DataTable />
      </div>
      <Group>
        <RouteLegs index={1} origin={83} destination={177} />
        <RouteLegs index={2} origin={90} destination={77} />
      </Group>
    </Container>
  );
};

export default ComponentPage1;

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
