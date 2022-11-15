import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import DateRangeUI from 'components/UI/DateRange'
import MultiSelectUI from 'components/UI/MultiSelect'
import TemporaryMap from 'components/UI/TemporaryMap'
import BarChart from 'components/Plugins/ChartJS/BarChart'
import ChartData from "data/ChartData.json";
import RoundedSelect from 'components/UI/RoundedSelect'
import PieChart from 'components/Plugins/ChartJS/PieChart'


const CommutersData = () => {

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
    <div>
        <Box sx={styles.fleetContent}>


            <Box sx={styles.fleetFilterCon}>
                <DateRangeUI/>
                <RoundedSelect placeHolder='PUV Type' shadow='' />
                <MultiSelectUI/>
            </Box>


            <Box sx={styles.twoColContent}>
                <Box sx={styles.mapContainer}>
                    <h6  style={styles.compTitle}>Commuter Origins</h6>
                    <TemporaryMap width='500' height='575'/>
                </Box>
                <Box sx={styles.chartContainer}>
                    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                        <Box >
                            <h6  style={styles.compTitle}>Percentage Distribution of Trip Purposes</h6>
                            <PieChart data={pieData} />
                        </Box>
                        <br/>
                        <Box sx={{maxWidth:'100%', overflow:'hidden'}}>
                            <h6  style={styles.compTitle}>Alerts Received Per PUV</h6>
                            <BarChart data={userData} />
                        </Box>

                    </Box>

                    <Box sx={{width:'100%'}}>
                        <br/><br/>
                        <h6  style={styles.compTitle}>Alerts Quality of Services Ratings</h6>
                        <BarChart data={userData} />
                    </Box>

                </Box>
            </Box>



        </Box>
    </div>
  )
}

export default CommutersData

const styles = {
    fleetContent:{
        mt:4,
        mb:10
    },
    fleetFilterCon:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:2
    },
    twoColContent:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mt:5,
    },
    mapContainer: {
        width:'40%',
        display:'flex',
        flexDirection:'column',

    },
    chartContainer:{
        width:'50%'
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
        fontSize:'14px',
        textAlign:'center',
        color:'#000'
    }

}
