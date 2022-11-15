import { Box } from '@mui/material'
import FleetData from 'components/component/Dashboard/FleetData'
import Button from 'components/UI/Button'
import React from 'react'

const dashboard = () => {
  return (
    <div>
        <Box sx={styles.pageContent}>

            <Box sx={styles.dashboardNavCon}>
                <Button>Fleet Data</Button>
                <Button color="white">Real Time Location</Button>
                <Button color="white">Inventory</Button>
                <Button color="white">Commuters Data</Button>
            </Box>

            <FleetData/>



        </Box>
    </div>
  )
}

export default dashboard

const styles = {
    pageContent:{
        mt:15,
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:'70%'
    },
    dashboardNavCon:{
        display: 'flex',
        flexDirection: 'row',
        gap:4,
        alignItems: 'center',
    }
}
