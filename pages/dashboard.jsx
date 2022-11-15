import { Box } from '@mui/material'
import CommutersData from 'components/component/Dashboard/CommutersData'
import FleetData from 'components/component/Dashboard/FleetData'
import RealTime from 'components/component/Dashboard/RealTime'
import Navbar from 'components/layout/Navbar/Navbar'
import BorderedTable from 'components/UI/BorderedTable'
import Button from 'components/UI/Button'
import RoundedSelect from 'components/UI/RoundedSelect'
import React,{useState} from 'react'

const dashboard = () => {

    const [tab , setTab] = useState(1)


  return (
    <div>
        <Navbar/>
        <Box sx={styles.pageContent}>

            <Box sx={styles.dashboardNavCon}>
                <Button color={tab == 1 ? 'primary' : 'white'} onClick={()=>setTab(1)}>Fleet Data</Button>
                <Button color={tab == 2 ? 'primary' : 'white'} onClick={()=>setTab(2)} >Real Time Location</Button>
                <Button color={tab == 3 ? 'primary' : 'white'} onClick={()=>setTab(3)} >Inventory</Button>
                <Button color={tab == 4 ? 'primary' : 'white'} onClick={()=>setTab(4)} >Commuters Data</Button>
            </Box>
            {
                tab == 1 && <FleetData/>
            }
            {
                tab == 2 && <RealTime/>
            }
            {
                tab == 3 &&
                <Box sx={{mt:4}}>
                    <RoundedSelect placeHolder='Sort by:' shadow='1' /> <br/>
                    <BorderedTable/>
                </Box>
            }
            {
                tab == 4 && <CommutersData/>
            }




        </Box>
    </div>
  )
}

export default dashboard

const styles = {
    pageContent:{
        mt:5,
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:'75%'
    },
    dashboardNavCon:{
        display: 'flex',
        flexDirection: 'row',
        gap:4,
        alignItems: 'center',
    }
}
