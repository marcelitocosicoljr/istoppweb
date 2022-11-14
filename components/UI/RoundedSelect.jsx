import React,{useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function RoundedSelect({shadow}) {

  const dates = ['January', 'February', 'March', 'April']
  const [dateRange, setDateRange] = useState('')


  return (
    <div>
      <FormControl sx={{ my: 1, minWidth: 120 }}>
        <Select
          value={dateRange}
          onChange={(e)=>setDateRange(e.target.value)}
          displayEmpty
          size='small'
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{width:{md:'100%',lg:'300px' }, background:'#fff', borderRadius:'30px',boxShadow:shadow ? shadow : 'none'}}

        >
          <MenuItem value="">
            <Typography variant='caption' sx={{color:'#8E8E8E',}}>
                Select Month
            </Typography>
          </MenuItem>
          {
            dates &&
            dates.map(date=>{
                return <MenuItem key={date} value={date} >
                    <Typography variant='body2' > {date} </Typography>
                </MenuItem>
            })
          }

        </Select>
      </FormControl>
    </div>
  );
}