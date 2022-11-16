import { useState } from "react";
import Button from "../components/UI/CustomButton";
import Title from "../components/UI/Title";
import InfoCard from "../components/UI/InfoCard";
import RouteLegs from "../components/UI/RouteLegs";
import DisplayTable from "../components/UI/DisplayTable";
import TravelMockData from "data/TravelMockData.json";
import BarChart from "components/Plugins/ChartJS/BarChart";
import ChartData from "data/ChartData.json";
import { Chart as ChartJS } from "chart.js/auto";
import PieChart from "components/Plugins/ChartJS/PieChart";

const ComponentPage1 = () => {
  //Don't remove
  console.log(ChartJS);
  const header = ["", "Trip Start", "Duration", "Date"];
  const header2 = ["Trip Start", "Duration", "Date"];

  const [userData, setUserData] = useState({
    labels: ChartData?.map((val) => val.time),
    datasets: [
      {
        label: "Average Travel Time",
        data: ChartData?.map((val) => val.number),
        backgroundColor: ["#F3592D"],
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: ["Work", "Personal", "Medical"],
    datasets: [
      {
        label: "Average Travel Time",
        data: [32, 20, 48],
        backgroundColor: ["#F3592D", "#FFE15B", "#5EA07B"],
      },
    ],
  });

  return (
    <div style={styles.container}>
      <div>
        <Title variant="h2">Titles</Title>
        <Title>Default Title</Title>
        <Title color="dark">Dark Title</Title>
      </div>
      <div style={styles.group}>
        <Title variant="h2">Buttons</Title>
        <div style={styles.group}>
          <Button>Default Button</Button>
          <Button shadow>No Shadow Button</Button>
          <Button color="secondary">Secondary Button</Button>
          <Button color="white">White Button</Button>
          <Button color="error">Red Button</Button>
          <Button color="tertiary">Tertiary Button</Button>
        </div>
      </div>
      <div style={styles.stack}>
        <Title variant="h2">Cards</Title>
        <div style={styles.group}>
          <InfoCard label="Buses on the route" value="4" />
          <InfoCard label="Number of trips" value="9" />
        </div>
      </div>
      <div style={styles.stack}>
        <Title variant="h2">Tables</Title>
        <DisplayTable rows={TravelMockData} header={header} index />
        <DisplayTable rows={TravelMockData} header={header2} lined />
      </div>
      <div style={styles.stack}>
        <Title variant="h2">Route Detail</Title>
        <div style={styles.group}>
          <RouteLegs index={1} origin={83} destination={177} />
          <RouteLegs index={2} origin={90} destination={77} />
        </div>
      </div>
      <div style={styles.stack}>
        <Title variant="h2">Charts</Title>
        <div style={styles.group}>
          <div style={styles.chartContainer}>
            <BarChart data={userData} />
          </div>
          <div style={styles.chartContainer}>
            <BarChart data={userData} />
          </div>
          <div style={styles.chartContainer}>
            <PieChart data={pieData} />
          </div>
        </div>
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

  chartContainer: {
    width: "40rem",
    height: "100%",
  },
};
