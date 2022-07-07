import React from 'react'
import {Box, Grid, Typography}  from '@mui/material'
import { Myhappycomponentwrap, Myproject, Myworkcomponentwrap } from './workexpstyle'
import { secondarymain } from '../../coustomstylevaluable'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Workexp = () => {
  return (
    <div>
    <Box className='container' bgcolor='secoundry.main' >
    <Box className='container-fluid'>
       <Typography variant="h1" py={10} color="initial">work expreience</Typography>
       
       <Grid  container justifyContent='space-between' rowSpacing={8} >
      
      {
        [1,2,3,4,5,6,7,8].map((item)=>(
            <Grid item  md={5.5}  >
            <Workconponent/>
            </Grid>

            ))
        }
        </Grid>
        
        </Box>
        </Box>

        <Box className='container' mt={10} > 
        <Box className='container-fluid' >

        <Grid container  gap={4} minHeight='50vh' justifyContent='space-between' alignItems='center' >
         {
            [1,2,3,4].map((item)=>(
                <Grid item  xs={12} md={2.7}  >
                   <Happycomponent/>
                </Grid>
            ))
         }
         
        
          </Grid>
        
        </Box>
        </Box>

        <Box className='container' mt={10} > 
        <Box className='container-fluid' >
        
        <Myproject>
             <Typography variant="caption" color="initial">all in one solution</Typography>
        </Myproject>
        </Box>
        </Box>

        </div>
        )
    }

export default Workexp


function Workconponent() {
    
    return(
        <Myworkcomponentwrap>
         <Typography variant="h5" fontWeight='bold' color="initial">ux/uidesigner</Typography>
         <Typography variant="subtitle2"  
         color='primary.main'
         >google in[200-2004]</Typography>
         <Typography variant="body1" color="initial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti saepe hic fuga provident ad quam deserunt optio quaerat, sequi doloremque. Cumque consectetur excepturi expedita eius quos minima fuga porro autem.</Typography>
        
        </Myworkcomponentwrap>
    )

}


function Happycomponent() {
    
    return(
        <Myhappycomponentwrap>
           <AcUnitIcon fontSize='large' color='primary' />
            <Typography variant="h5" fontSize={60} fontWeight={600}  color="initial">672</Typography>
            <Typography variant='subtitle1' color="initial">happy clients</Typography>
        </Myhappycomponentwrap>
    )


}