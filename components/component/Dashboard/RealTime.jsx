import { Box } from '@mui/material'
import TemporaryMap from 'components/UI/TemporaryMap'
import React from 'react'

const RealTime = () => {
  return (
    <div>
        <Box sx={styles.realTimeContent}>
            <TemporaryMap width='100%' height='600'/>
        </Box>
    </div>
  )
}

export default RealTime

const styles = {
    realTimeContent:{
        mt:4,
        mb:10
    },
}