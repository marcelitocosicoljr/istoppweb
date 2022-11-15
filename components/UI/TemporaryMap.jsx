import { Box } from '@mui/material'
import React from 'react'

const TemporaryMap = ({width, height}) => {
  return (
    <Box sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.988548990149!2d118.7460360147923!3d9.767035693011133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b56375d3e1fb21%3A0xfd47556795c9ecb2!2sRobinsons%20Palawan!5e0!3m2!1sen!2sph!4v1668533043073!5m2!1sen!2sph" width={width} height={height} style={{border:0}}  allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

export default TemporaryMap
