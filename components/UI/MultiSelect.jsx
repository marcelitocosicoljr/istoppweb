import { Box } from "@mui/system";
import React, {useState} from "react"
// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MultiSelect } from "react-multi-select-component";


  export default function MultiSelectUI() {

    const [data, setData] =  useState([
      {
        "id": 1,
        "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
        "label": "Santa Lourdes - Rizal"
      }, {
        "id": 2,
        "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
        "label": "Santa Lourdes - Malvar"
      }, {
        "id": 3,
        "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
        "label": "Santa Monica - Rizal"
      }, {
        "id": 4,
        "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
        "label": "Santa Monica - Malvar"
      }, {
        "id": 5,
        "value": "0fceaec7-fb46-4aef-994b-863a97130168",
        "label": "Irawan - Rizal"
      }, {
        "id": 6,
        "value": "b68c6b76-bbe0-49a6-8a90-209b8d88d353",
        "label": "Irawan - Malvar"
      }, {
        "id": 7,
        "value": "e2829c11-0960-490c-b19b-5c5bb26a18ce",
        "label": "Tagburos - Rizal"
      },  {
        "id": 9,
        "value": "841e6f9f-1e19-4501-8b75-cd153282ed21",
        "label": "Tagburos -  Malvar"
      }, {
        "id": 10,
        "value": "9346ba4b-8b3e-4c06-b930-cb3d98c58890",
        "label": "Rizal - Santa Lourdes"
      }

    ])

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
        <Box sx={{display:'flex',}} >
          <MultiSelect
            labelledBy="Route..."
            options={options}
            value={selected}
            onChange={setSelected}
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
