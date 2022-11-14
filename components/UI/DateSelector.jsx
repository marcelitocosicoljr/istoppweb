import React ,{useState} from 'react';
import "rsuite/dist/rsuite.min.css";
import { DatePicker, Stack } from 'rsuite';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/system';

export default function DateSelector () {
  const [isActive, setIsActive] = useState(false)

  const HandleClick = () =>{
    isActive == true ? setIsActive(false) : setIsActive(true)
  }

  return (
    <Box sx={{display:'flex', width:'300px'}} onClick={()=>HandleClick()}>
        <DatePicker size="lg" placeholder="Select date" sx={styles.selectField} onClose={()=>setIsActive(false)}  />
      <ArrowDropDownIcon id='dropdown' sx={[ isActive == true ? styles.isActive : styles.isNotActive, styles.dropdownIcon]} />
    </Box>
  )
}



const styles = {

  selectField:{

    display: 'block',
    marginBottom: 10,
    borderRadius: '30px',
    width:'100%',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  },

  isActive:{
    transform: 'rotate(180deg )'
  },
  isNotActive:{
    transform: 'rotate(0deg)'
  },
  dropdownIcon:{
    marginLeft:'-35px',
    mt:1.2,
    zIndex:9,
    pointerEvents:'none',
    cursor:'pointer'
  }


}