import React from "react";
import InputField from "components/UI/InputField";
import { Box, Typography } from "@mui/material";
import RoundedSelect from "components/UI/RoundedSelect";
import Label from "components/UI/Label";
import BorderedTable from "components/UI/BorderedTable";
import TextArea from "components/UI/TextArea";

const ComponentPage2 = () => {
  return (
    <main className="container">

        <Typography variant="h3">UI Components</Typography>

        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>Input Field</Typography>
          </span><br/><br/>

          <InputField label='Username' placeHolder='' type='rounded' /><br/>

          <InputField placeHolder='Enter username' type='rounded' /><br/>

          <InputField label='Username' placeHolder='' type='' /><br/>

          <InputField placeHolder='Enter username'  type='' /><br/>

          <TextArea/>

          <span style={styles.propsNote}>
            <strong>PROPERTIES :</strong>  ( <strong> label</strong> ) ( <strong>placeHolder</strong> ) ( <strong>type : 'rounded', 'simple'</strong>)
          </span>
        </Box>

        <Box sx={styles.componentBox}>
          <span style={styles.compontentLabelBox}>
            <Typography variant="overline" sx={styles.compontentLabel}>Select Field</Typography>
          </span><br/><br/>

          <RoundedSelect label='Username' placeHolder='' />
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

        <Box sx={styles.componentBox}>
            <span style={styles.compontentLabelBox}>
              <Typography variant="overline" sx={styles.compontentLabel}>Bordered Table</Typography>
            </span><br/><br/>

            <BorderedTable/>
        </Box>

        <Box sx={styles.componentBox}>
            <span style={styles.compontentLabelBox}>
              <Typography variant="overline" sx={styles.compontentLabel}>Information Box</Typography>
            </span><br/><br/>

            <Box className="infoBox" sx={{border:'1px solid #8E8E8E'}}>
                <p>
                  Total Volume of stops (in filtered set) : None<br/><br/>
                  Note: For browser performance, the heatmap visual is generate with a maximum of 5000 points. <br/><br/>
                  Heatmap intensity is called appropriately.
                </p>
            </Box><br/><br/>

            <Box className="infoBox" sx={{border:'1px solid #8E8E8E'}}>
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
                  [...Array(5)].map(data=>{
                    return <Box  sx={{display:'flex', flexDirection:'row', gap:1}}>
                    <p style={{minWidth:'120px', lineHeight:.1}}>6</p>
                    <p style={{minWidth:'120px', lineHeight:.1}}>273.0</p>
                    <p style={{minWidth:'120px', lineHeight:.1}}>133.0</p>
                  </Box>
                  })
                }


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

