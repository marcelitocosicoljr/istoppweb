import React from "react";
import InputField from "components/UI/InputField";
import { Box, Typography } from "@mui/material";
import RoundedSelect from "components/UI/RoundedSelect";
import Label from "components/UI/Label";
import BorderedTable from "components/UI/BorderedTable";
import TextArea from "components/UI/TextArea";
import DateRangeUI from "components/UI/DateRange";
import MultiSelect from "components/UI/MultiSelect";
import { Tabs } from "components/UI/Tabs";
import DateSelector from "components/UI/DateSelector";

const ComponentPage2 = () => {
  return (
    <main className="container">

        <Typography variant="h3">UI Components</Typography>


        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>Input Field</Typography>
          </span><br/><br/>

          <InputField label='Username' placeHolder='' type='rounded' /><br/>

          <InputField placeHolder='Enter password' type='rounded' color='transparent' /><br/>

          <InputField placeHolder='Enter username' type='rounded' /><br/>

          <InputField label='Username' placeHolder='' type='' color='transparent' /><br/>

          <InputField placeHolder='Password' type='' color='white' /><br/>

          <Box sx={{width:'230px'}}>
            <InputField placeHolder='Search Francise Number'  type='' />
          </Box><br/>

          <TextArea/>

          <span style={styles.propsNote}>
            <strong>PROPERTIES :</strong>  ( <strong> label</strong> ) ( <strong>placeHolder</strong> ) ( <strong>type : 'rounded', 'simple'</strong>) ( <strong>color : 'white', 'transparent'</strong>)
          </span>
        </Box>

        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>Select Field</Typography>
          </span><br/><br/>
          <RoundedSelect label='Username' placeHolder='' shadow='0' />
          <RoundedSelect label='Username' placeHolder='' shadow='1' />
          <RoundedSelect label='Username' placeHolder='' shadow='3' />
          <RoundedSelect label='Username' placeHolder='' shadow='6' /><br/>


          <DateRangeUI/><br/>
          <DateSelector/><br/>

          <MultiSelect/>


        </Box>

        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>Labels</Typography>
          </span><br/><br/>

          <Box sx={{width:'130px'}}>
            <Label text='Fetch' color='green'/>
          </Box><br/>

          <Box sx={{width:'220px'}}>
            <Label text='Month' subText=''/>
          </Box><br/>

          <Box sx={{width:'230px'}}>
            <Label text='Francise Number' color='blue'/>
          </Box><br/>

          <Box sx={{width:'220px'}}>
            <Label text='Minimum Hour' subText='24-hour Clock'/>
          </Box><br/>


          <Box sx={{width:'400px'}}>
            <Label text='Selected Node' subText=''/>
          </Box>

        </Box>

        <span style={styles.propsNote}>
            <strong>PROPERTIES :</strong>  ( <strong> text</strong> ) ( <strong>subText</strong> ) ( <strong>color : 'yellow', 'green', 'blue'</strong>)
        </span>

        <Box sx={styles.componentBox}>
            <span style={styles.compontentLabelBox}>
              <Typography variant="overline" sx={styles.compontentLabel}>Striped Table</Typography>
            </span><br/><br/>

            <BorderedTable/>
        </Box>

        <Box sx={styles.componentBox}>
            <span style={styles.compontentLabelBox}>
              <Typography variant="overline" sx={styles.compontentLabel}>Information Box</Typography>
            </span><br/><br/>

            <Box className="infoBox" sx={{border: '1px solid #8E8E8E', width:'300px', lineHeight:2}}>
                <p>
                  Number of driver : 14 <br/>
                  Number of dates coverd: 98 <br/>
                  Total Boarding: 6573 <br/>
                  Total Departure: 6533 <br/>
                  Hour Distribution: 00
                </p>
            </Box><br/><br/>

            <Box className="infoBox" sx={{border: '1px solid #8E8E8E'}}>
                <p>
                  Total Volume of stops (in filtered set) : None<br/><br/>
                  Note: For browser performance, the heatmap visual is generate with a maximum of 5000 points. <br/><br/>
                  Heatmap intensity is called appropriately.
                </p>
            </Box><br/><br/>

            <Box className="infoBox" sx={{border: '1px solid #8E8E8E'}}>
                <p>
                  Number of driver : 14 <br/><br/>
                  Number of dates coverd: 98 <br/><br/>
                  Total Boarding: 6573 <br/><br/>
                  Total Departure: 6533 <br/><br/>
                  Hour Distribution: <br/><br/><br/>
                </p>

                <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
                  <Typography sx={{minWidth:'120px'}}>Hour</Typography>
                  <Typography sx={{minWidth:'120px'}}>Boardings</Typography>
                  <Typography sx={{minWidth:'120px'}}>Departures</Typography>
                </Box>

                {
                  [...Array(5)].map((data, index)=>{
                    return <Box key={index} sx={{display:'flex', flexDirection:'row', gap:1, alignItems:'center'}}>
                    <p style={{minWidth:'120px',marginTop:'10px'}}>6</p>
                    <p style={{minWidth:'120px'}}>273.0</p>
                    <p style={{minWidth:'120px' }}>133.0</p>
                  </Box>
                  })
                }


            </Box><br/><br/>

            <Box sx={styles.componentBox}>
              <span style={styles.compontentLabelBox}>
                <Typography variant="overline" sx={styles.compontentLabel}>Navigation Menus</Typography>
              </span><br/><br/><br/>

              <Tabs/>
            </Box>


        </Box>

      <Box sx={{height:'20vh'}} />
    </main>
  );
};

export default ComponentPage2;

const styles = {
  componentBox:{
    mt:2,
    py:2,
  },
  compontentLabelBox:{
    background: '#FADB47',
    padding: '3px 30px 7px',
    marginBottom: '20px',
    borderRadius: '30px'
  },
  compontentLabel:{
    color: '#2F2F30',
  },
  propsNote: {
    marginTop: '20px',
    display: 'flex',
    maxWidth: '50%',
    color: '#2F2F30',
    fontSize: '12px',
    borderRadius: '20px',
    color:'grey'

  }
}

