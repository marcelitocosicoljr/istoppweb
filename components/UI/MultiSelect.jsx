import { Box } from "@mui/system";
import React, {useState} from "react"
// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MultiSelect } from "react-multi-select-component";


  export default function MultiSelectUI() {



    const options = [
      { label: "Route 1", value: "1" },
      { label: "Route 2", value: "2" },
      { label: "Route 1", value: "3", disabled: true },
    ];

    const [selected, setSelected] = useState([]);


    const [isActive, setIsActive] = useState(false)

    const HandleClick = () =>{
        isActive == true ? setIsActive(false) : setIsActive(true)
    }

    return(
        <Box sx={{display:'flex'}} >
          <MultiSelect
            labelledBy="Route..."
            options={options}
            value={selected}
            onChange={setSelected}
            label="route"
          />
            <ArrowDropDownIcon id='dropdown' sx={[styles.dropdownIcon, isActive == true ? styles.isActive : styles.isNotActive]} />
        </Box>

    );
}

const styles = {

  selectField:{
    display: 'block',
    marginBottom: 10,
    borderRadius: '30px',
  },

  isActive:{
    transform: 'rotate(180deg )',
  },
  isNotActive:{
    transform: 'rotate(0deg)',
  },
  dropdownIcon:{
    marginLeft:'-35px',
    mt:1.2,
    zIndex:9,
    pointerEvents:'none',
    cursor:'pointer'
  }


}
