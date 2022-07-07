import React from 'react'
import { Box, Grid, Paper, Typography} from '@mui/material'
import styled from '@emotion/styled';
import { primarys, seceends } from '../..';


function valuetext(value) {
    return `${value}°C`;
  }

  const Sliders = styled(Paper)(({theme})=>({

    height:'7px',
   width:'100%',
   borderRadius:10,
   background: seceends,
   position:'relative',
   
   
}));

const Slidersvalue = styled(Paper)(({theme})=>({
    
    height:'10px',
    borderRadius:10,
   width:'50%',
   background: primarys,
   position:'absolute',
   left:'0',
   
   
           
  }));
const Sliderspoint = styled(Paper)(({theme})=>({
    
    display:'flex',
    justifyContent:'space-between'

   
           
  }));

const Skill = () => {
    
  return (
    <div className='container-fluid' style={{minHeight:'100vh'}} >
  <Typography variant="h2" color="initial">
  Specialized Area
  </Typography>
    <Grid container    alignItems='center' justifyContent='start'   spacing={5}  >
    <Grid item xs={12} md={6} >
    
  <Mainslider/>
  <Mainslider/>
  <Mainslider/>
  
  </Grid>
  <Grid  item xs={12} md={6} >
  
   <Mainslider/>
   <Mainslider/>
   <Mainslider/>
 
    
    
    </Grid>
    </Grid>
   </div>

  )
}

export default Skill



function Mainslider() {
    
    return(
        <Box py='1rem' >
        <Sliderspoint elevation={0} >
         <Typography variant="subtitle1" color="initial">50%</Typography>
         <Typography variant="subtitle1" color="initial">html/css</Typography>
        </Sliderspoint>
        <Sliders>
        <Slidersvalue></Slidersvalue>
        </Sliders>
        </Box>

    )

}