import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const InputField = (label) => {
  return (
    <div>
        <Box >
        <Typography variant='body2' className='compontent_label'>SELECT FIELD</Typography>
          <input className='rounded_text_field' />
        </Box>
    </div>
  )
}

export default InputField
