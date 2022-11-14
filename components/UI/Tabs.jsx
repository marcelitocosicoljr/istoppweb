import React,{useState} from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'

export const Tabs = () => {

    const [tab, setTab] = useState(1)

  return (
    <Box sx={styles.tabContainer}>
        <Box sx={styles.tabButtons}>
            <Button onClick={()=>setTab(1)} sx={[styles.tabBtn, tab ==1 ? styles.tabBtnActive : styles.tabBtnNormal]}>Report</Button>
            <Button onClick={()=>setTab(2)} sx={[styles.tabBtn, tab == 2 ?  styles.tabBtnActive : styles.tabBtnNormal]}>Route Plans</Button>
            <Button onClick={()=>setTab(3)} sx={[styles.tabBtn, tab == 3 ?  styles.tabBtnActive : styles.tabBtnNormal]}>Policies</Button>
            <Button onClick={()=>setTab(4)} sx={[styles.tabBtn, tab == 4 ?  styles.tabBtnActive : styles.tabBtnNormal]}>Studies</Button>
        </Box>
        <Box sx={styles.tabContent}>

        </Box>
    </Box>
  )
}


const styles = {
    tabContainer : {
        display:'block',
        maxWidth: '900px'
    },
    tabButtons:{
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        gap:4
    },
    tabBtn :{
        width: '320px',
        height:'60px',
        fontWeight: 600,
        textAlign:'center',
        fontSize: '20px',
        borderRadius : '25px 25px 0px 0px',
        textTransform: 'capitalize'
    },
    tabBtnNormal :{
        background: '#FBDC47',
        color:'#303030',
    },
    tabBtnActive :{
        background: '#030744',
        color:'#fff',
    },
    tabContent:{
        background:'#fff',
        maxWidth:'900px',
        width:'100%',
        minHeight:'450px',
        padding: '50px',
        boxShadow:4
    }

}