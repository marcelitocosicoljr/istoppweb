import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import DateRangeUI from 'components/UI/DateRange'
import DisplayTable from 'components/UI/DisplayTable'
import InfoCard from 'components/UI/InfoCard'
import MultiSelectUI from 'components/UI/MultiSelect'
import TemporaryMap from 'components/UI/TemporaryMap'
import BarChart from 'components/Plugins/ChartJS/BarChart'
import ChartData from "data/ChartData.json";
import { Chart as ChartJS } from "chart.js/auto";


const FleetData = () => {

    const header2 = ["Time", "Route", "Plate Number"];
    const routesUnits = [
        {
            "id": 1,
            "trip_start": "8:58 AM",
            "duration": "Route 1",
            "date": "JDC123023"
          },
          {
            "id": 2,
            "trip_start": "3:08 AM",
            "duration": "Route 2",
            "date": "JDC123023"
          },
          {
            "id": 3,
            "trip_start": "3:08 AM",
            "duration": "Route 2",
            "date": "JDC123023"
          },
          {
            "id": 4,
            "trip_start": "3:08 AM",
            "duration": "Route 2",
            "date": "JDC123023"
          },
          {
            "id": 5,
            "trip_start": "3:08 AM",
            "duration": "Route 2",
            "date": "JDC123023"
          },
    ]
    const [userData, setUserData] = useState({
        labels: ChartData?.map((val) => val.time),
        datasets: [
          {
            label: "Average Travel Time",
            data: ChartData?.map((val) => val.number),
            backgroundColor: ["#030744"],
          },
        ],
      });

  return (
    <div>
        <Box sx={styles.fleetContent}>


            <Box sx={styles.fleetFilterCon}>
                <DateRangeUI/>
                <MultiSelectUI/>
            </Box>


            <Box sx={styles.twoColContent}>
                <Box sx={styles.mapContainer}>
                    <Box sx={styles.infoCardCon}>
                        <InfoCard label="Mobile App Usage" value="9 PUVs" />
                        <InfoCard label="PUVs Monitored (%)" value="90%" />
                        <InfoCard label="Average Occupancy" value="85.99%" />
                    </Box>
                    <h6  style={styles.compTitle}>City of Puerto Princesa PUV Routes</h6>
                    <TemporaryMap width='600' height='410'/>
                </Box>
                <Box sx={styles.chartContainer}>

                    <h6  style={styles.compTitle}>Time Start of PUV Units on Selected Routes</h6>
                    <DisplayTable rows={routesUnits} header={header2} lined />
                    <br/>
                    <h6  style={styles.compTitle}>Number of Trips Made During Selected Dates</h6>
                    <BarChart data={userData} options={{indexAxis:'y'}} />
                </Box>
            </Box>



        </Box>
    </div>
  )
}

export default FleetData

const styles = {
    fleetContent:{
        mt:4,
        mb:10
    },
    fleetFilterCon:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    twoColContent:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mt:5
    },
    mapContainer: {
        width:'60%',
        display:'flex',
        flexDirection:'column',

    },
    chartContainer:{
        width:'35%'
    },
    infoCardCon:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:4,
        marginBottom:4
    },
    compTitle:{
        marginBottom:'10px',
        fontWeight: 500,
        fontSize:'14px'
    }

}
