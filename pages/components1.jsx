import React from "react";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import InfoCard from "../components/UI/InfoCard";
import DataTable from "../components/UI/DisplayTable";
import RouteLegs from "../components/UI/RouteLegs";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import DisplayTable from "../components/UI/DisplayTable";

const ComponentPage1 = () => {
  const rows = [
    {
      id: 1,
      trip_start: "8:25 PM",
      duration: 7.608721714,
    },
    {
      id: 2,
      trip_start: "9:30 AM",
      duration: 2.608501808,
    },
    {
      id: 3,
      trip_start: "5:27 PM",
      duration: 3.818998747,
    },
    {
      id: 4,
      trip_start: "2:40 PM",
      duration: 1.81176789,
    },
    {
      id: 5,
      trip_start: "10:42 AM",
      duration: 7.991921211,
    },
    {
      id: 6,
      trip_start: "8:57 AM",
      duration: 5.939031791,
    },
    {
      id: 7,
      trip_start: "1:15 PM",
      duration: 4.185985442,
    },
    {
      id: 8,
      trip_start: "8:01 PM",
      duration: 7.375507698,
    },
    {
      id: 9,
      trip_start: "11:02 PM",
      duration: 7.476034868,
    },
    {
      id: 10,
      trip_start: "2:11 PM",
      duration: 2.978955218,
    },
  ];

  const header = ["", "Trip Start", "Duration"];

  return (
    <div style={styles.container}>
      <div>
        <Header>Default Header</Header>
        <Header color="dark">Dark Header</Header>
      </div>
      <div style={styles.group}>
        <Button>Default Button</Button>
        <Button shadow>No Shadow Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="white">White Button</Button>
        <Button color="error">Red Button</Button>
        <Button color="tertiary">Tertiary Button</Button>
      </div>
      <div style={styles.group}>
        <InfoCard label="Buses on the route" value="4" />
        <InfoCard label="Number of trips" value="9" />
      </div>
      <div style={styles.stack}>
        <DisplayTable rows={rows} header={header} />
        <DisplayTable rows={rows} header={header} variant="2" />
      </div>
      <div style={styles.group}>
        <RouteLegs index={1} origin={83} destination={177} />
        <RouteLegs index={2} origin={90} destination={77} />
      </div>
    </div>
  );
};

export default ComponentPage1;

const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
  },

  stack: {
    display: "flex",
    gap: "2rem",
    flexDirection: "column",
  },

  group: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
};
