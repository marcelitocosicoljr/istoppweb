import { TextareaAutosize, TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import React from 'react'

const TextArea = ({label, placeHolder, type}) => {



  return (
    <div>
        <Box sx={styles.component}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={7}
            placeholder=""
            style={styles.textArea}
          />
        </Box>
    </div>
  )



}

export default TextArea


const styles = {
  component:{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',

  },
  textArea:{
    border: '1px solid #8E8E8E',
    padding: '10px 15px',
    outline: 'none',
    maxWidth: '500px',
    fontSize: '14px',
    borderRadius: '20px',
    fontFamily:'sans-serif'
  },
}