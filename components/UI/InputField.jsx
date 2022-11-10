import { TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import React from 'react'

const InputField = ({label, placeHolder, type}) => {

  const styles = {
    component:{
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',

    },
    textLabel:{
      marginBottom: '8px',
      fontSize:'14px',
      fontWeight: 500,
      marginTop: '5px',
    },
    textField:{
      border: '1px solid #8E8E8E',
      padding: '12px 15px',
      outline: 'none',
      maxWidth: '400px',
      fontSize: '14px',
      letterSpacing: '1px',
      background:  `${type == 'rounded' ? '#fff' : 'transparent'}`,
      borderRadius: `${type == 'rounded' ? '30px' : '3px'}`,
    },
  }

  return (
    <div>
        <Box sx={styles.component}>
          {
            label && <span style={styles.textLabel} >{label}</span>
          }
          <input placeholder={placeHolder} style={styles.textField} />
        </Box>
    </div>
  )



}

export default InputField


