import React, { useState } from "react";
import CustomButton from "../components/UI/CustomButton";
import Title from "../components/UI/Title";
import InfoCard from "../components/UI/InfoCard";
import RouteLegs from "../components/UI/RouteLegs";
import DisplayTable from "../components/UI/DisplayTable";
import TravelMockData from "data/TravelMockData.json";
import BarChart from "components/Plugins/ChartJS/BarChart";
import ChartData from "data/ChartData.json";
import { Chart as ChartJS } from "chart.js/auto";
import PieChart from "components/Plugins/ChartJS/PieChart";

import InputField from "components/UI/InputField";
import { Box, Typography } from "@mui/material";
import RoundedSelect from "components/UI/RoundedSelect";
import Label from "components/UI/Label";
import BorderedTable from "components/UI/BorderedTable";
import TextArea from "components/UI/TextArea";
import DateRangeUI from "components/UI/DateRange";
import { Tabs } from "components/UI/Tabs";
import DateSelector from "components/UI/DateSelector";
import MultiSelectUI from "components/UI/MultiSelect";

const UIComponentsPage = () => {
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
      {/* UI COMPONENTS FROM 1 */}

      <div>
        <Title variant="h2">Titles</Title>
        <Title>Default Title</Title>
        <Title color="dark">Dark Title</Title>
      </div>
      <div style={styles.group}>
        <Title variant="h2">Buttons</Title>
        <div style={styles.group}>
          <CustomButton>Default Button</CustomButton>
          <CustomButton shadow>No Shadow Button</CustomButton>
          <CustomButton color="secondary">Secondary Button</CustomButton>
          <CustomButton color="white">White Button</CustomButton>
          <CustomButton color="error">Red Button</CustomButton>
          <CustomButton color="tertiary">Tertiary Button</CustomButton>
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

      {/* UI COMPONENT FROM 2 */}

      <Title variant="h2">UI Components 2</Title>

      <Box sx={styles.componentBox}>
        <span style={styles.compontentLabelBox}>
          <Typography variant="overline" sx={styles.compontentLabel}>
            Input Field
          </Typography>
        </span>
        <br />
        <br />

        <InputField label="Username" placeHolder="" type="rounded" />
        <br />

        <InputField
          placeHolder="Enter password"
          type="rounded"
          color="transparent"
        />
        <br />

        <InputField placeHolder="Enter username" type="rounded" />
        <br />

        <InputField
          label="Username"
          placeHolder=""
          type=""
          color="transparent"
        />
        <br />

        <InputField placeHolder="Password" type="" color="white" />
        <br />

        <Box sx={{ width: "230px" }}>
          <InputField placeHolder="Search Francise Number" type="" />
        </Box>
        <br />

        <TextArea />

        <span style={styles.propsNote}>
          <strong>PROPERTIES :</strong> ( <strong> label</strong> ) ({" "}
          <strong>placeHolder</strong> ) ({" "}
          <strong>type : 'rounded', 'simple'</strong>) ({" "}
          <strong>color : 'white', 'transparent'</strong>)
        </span>
      </Box>

      <Box sx={styles.componentBox}>
        <span style={styles.compontentLabelBox}>
          <Typography variant="overline" sx={styles.compontentLabel}>
            Select Field
          </Typography>
        </span>
        <br />
        <br />
        <RoundedSelect label="Username" placeHolder="" shadow="0" />
        <RoundedSelect label="Username" placeHolder="" shadow="1" />
        <RoundedSelect label="Username" placeHolder="" shadow="3" />
        <RoundedSelect label="Username" placeHolder="" shadow="6" />
        <br />

        <DateRangeUI />
        <br />
        <DateSelector />
        <br />

        <MultiSelectUI />
      </Box>

      <Box sx={styles.componentBox}>
        <span style={styles.compontentLabelBox}>
          <Typography variant="overline" sx={styles.compontentLabel}>
            Labels
          </Typography>
        </span>
        <br />
        <br />

        <Box sx={{ width: "130px" }}>
          <Label text="Fetch" color="green" />
        </Box>
        <br />

        <Box sx={{ width: "220px" }}>
          <Label text="Month" subText="" />
        </Box>
        <br />

        <Box sx={{ width: "230px" }}>
          <Label text="Francise Number" color="blue" />
        </Box>
        <br />

        <Box sx={{ width: "220px" }}>
          <Label text="Minimum Hour" subText="24-hour Clock" />
        </Box>
        <br />

        <Box sx={{ width: "400px" }}>
          <Label text="Selected Node" subText="" />
        </Box>
      </Box>

      <span style={styles.propsNote}>
        <strong>PROPERTIES :</strong> ( <strong> text</strong> ) ({" "}
        <strong>subText</strong> ) ({" "}
        <strong>color : 'yellow', 'green', 'blue'</strong>)
      </span>

      <Box sx={styles.componentBox}>
        <span style={styles.compontentLabelBox}>
          <Typography variant="overline" sx={styles.compontentLabel}>
            Striped Table
          </Typography>
        </span>
        <br />
        <br />

        <BorderedTable />
      </Box>

      <Box sx={styles.componentBox}>
        <span style={styles.compontentLabelBox}>
          <Typography variant="overline" sx={styles.compontentLabel}>
            Information Box
          </Typography>
        </span>
        <br />
        <br />

        <Box
          className="infoBox"
          sx={{ border: "1px solid #8E8E8E", width: "300px", lineHeight: 2 }}
        >
          <p>
            Number of driver : 14 <br />
            Number of dates coverd: 98 <br />
            Total Boarding: 6573 <br />
            Total Departure: 6533 <br />
            Hour Distribution: 00
          </p>
        </Box>
        <br />
        <br />

        <Box className="infoBox" sx={{ border: "1px solid #8E8E8E" }}>
          <p>
            Total Volume of stops (in filtered set) : None
            <br />
            <br />
            Note: For browser performance, the heatmap visual is generate with a
            maximum of 5000 points. <br />
            <br />
            Heatmap intensity is called appropriately.
          </p>
        </Box>
        <br />
        <br />

        <Box className="infoBox" sx={{ border: "1px solid #8E8E8E" }}>
          <p>
            Number of driver : 14 <br />
            <br />
            Number of dates coverd: 98 <br />
            <br />
            Total Boarding: 6573 <br />
            <br />
            Total Departure: 6533 <br />
            <br />
            Hour Distribution: <br />
            <br />
            <br />
          </p>

          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Typography sx={{ minWidth: "120px" }}>Hour</Typography>
            <Typography sx={{ minWidth: "120px" }}>Boardings</Typography>
            <Typography sx={{ minWidth: "120px" }}>Departures</Typography>
          </Box>

          {[...Array(5)].map((data, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <p style={{ minWidth: "120px", marginTop: "10px" }}>6</p>
                <p style={{ minWidth: "120px" }}>273.0</p>
                <p style={{ minWidth: "120px" }}>133.0</p>
              </Box>
            );
          })}
        </Box>
        <br />
        <br />

        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>
              Navigation Menus
            </Typography>
          </span>
          <br />
          <br />
          <br />

          <Tabs />
        </Box>
      </Box>
    </div>
  );
};

export default UIComponentsPage;

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

  componentBox: {
    mt: 2,
    py: 2,
  },
  compontentLabelBox: {
    background: "#FADB47",
    padding: "3px 30px 7px",
    marginBottom: "20px",
    borderRadius: "30px",
  },
  compontentLabel: {
    color: "#2F2F30",
  },
  propsNote: {
    marginTop: "20px",
    display: "flex",
    maxWidth: "50%",
    color: "#2F2F30",
    fontSize: "12px",
    borderRadius: "20px",
    color: "grey",
  },
};
