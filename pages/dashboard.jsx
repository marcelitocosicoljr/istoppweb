import { Box } from "@mui/material";
import CommutersData from "components/component/Dashboard/CommutersData";
import FleetData from "components/component/Dashboard/FleetData";
import RealTime from "components/component/Dashboard/RealTime";
import Navbar from "components/layout/Navbar/Navbar";
import BorderedTable from "components/UI/BorderedTable";
import CustomButton from "components/UI/CustomButton";
import RoundedSelect from "components/UI/RoundedSelect";
import React, { useState } from "react";

const Dashboard = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <Navbar />
      <Box sx={styles.pageContent}>
        <Box sx={styles.dashboardNavCon}>
          <CustomButton
            color={tab == 1 ? "primary" : "white"}
            onClick={() => setTab(1)}
          >
            Fleet Data
          </CustomButton>
          <CustomButton
            color={tab == 2 ? "primary" : "white"}
            onClick={() => setTab(2)}
          >
            Real Time Location
          </CustomButton>
          <CustomButton
            color={tab == 3 ? "primary" : "white"}
            onClick={() => setTab(3)}
          >
            Inventory
          </CustomButton>
          <CustomButton
            color={tab == 4 ? "primary" : "white"}
            onClick={() => setTab(4)}
          >
            Commuters Data
          </CustomButton>
        </Box>
        {tab == 1 && <FleetData />}
        {tab == 2 && <RealTime />}
        {tab == 3 && (
          <Box sx={{ mt: 4 }}>
            <RoundedSelect placeHolder="Sort by:" shadow="1" /> <br />
            <BorderedTable />
          </Box>
        )}
        {tab == 4 && <CommutersData />}
      </Box>
    </div>
  );
};

export default Dashboard;

const styles = {
  pageContent: {
    mt: 5,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "75%",
  },
  dashboardNavCon: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
};
