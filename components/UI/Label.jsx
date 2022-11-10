import { Box, Typography } from '@mui/material'
import React from 'react'

const Label = ({text, subText, color}) => {

    const styles = {
        labelBox:{
          background: `${color == 'green' ? '#07343A' : color == 'blue' ? '#030744' : '#FADB47'  }`,
          padding: `${subText ? '3px 0px' :'11px 0px'  }`,
          borderRadius: '30px',
          maxWidth:'420px',
          textAlign:'center'
        },
        labelText:{
          color: `${color == 'green' ? '#fff' : color == 'blue' ? '#fff' : '#2F2F30'   }`,
          letterSpacing:'.5px'
        },
        labelSubText:{
            color: '#2F2F30',
            fontWeight: 400,
            fontSize:'14px',
            marginTop:'-5px',
            display:'block',

        },
      }

    return (
        <div>
        <Box sx={styles.labelBox}>
                <Typography variant="body2" sx={styles.labelText}>{text}</Typography>
                {
                    subText &&
                    <label variant="caption" style={styles.labelSubText}>{subText}</label>
                }

        </Box>
        </div>
    )
}

export default Label


