import React from 'react'
import { Box, Grid, Stack, Typography, Button } from  '@mui/material'
import Container from '@mui/material/Container'
import LeftContaienr from './LeftContaienr'
import Rightcontaienr from './Rightcontaienr'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { PageTitle } from '../servicepage/Servicepage'
const Blogmain = () => {

 
    const [bloghide, setBloghide] = useState(false)

    const hidden = {
        transition: 'all 0.5s  ease-in-out',
        position:{xs:'fixed', sm:'static'},
        right:'0',
        top:'8.9%',
        width:  '50%', 
        display:{sm:'flex' , xs:`${bloghide ?  'flex' : 'none' }`},
        height:'100vh',
        boxShadow:{xs:2, sm:0},
        px:{xs:1,sm:0}
      
        

    }

    const iconhidden ={
        display:{xs:'flex', sm:'none'},
        position:'absolute',
        left:'-15%',
        bgcolor:'white',
        borderLeftRadius:5,
    }
    const iconhidden2 ={
        display:{xs:'flex', sm:'none'},
        position:'fixed',
        right:'0',
        top:'9%',
    }

  return (
    <Stack py={5}>
    
    <PageTitle title={'blog'} />

    <Box my={5} className='container-fluid' >
 
    <Grid gap={3}   justifyContent='space-between'   container >
   
    {/**left contaienr */}


    <Grid item xs={12} sm={8}  >
    <LeftContaienr/>
    </Grid>

    {/**right  contaienr */}

<Grid 
container  justifyContent={{sm:'end', xs:'start'}}

item xs={12} sm={3.5} bgcolor='white' >



<Rightcontaienr/>

    </Grid>
    </Grid>
   
    </Box>

     <Box py={6} bgcolor='lightgray' >
      <Stack   direction='row' justifyContent='space-between' className='container-fluid' >
           <Typography variant="h2" color='secoundary' >
             you want ro showcase your website
           </Typography>

           <Button size='large' variant="contained" color="primary" endIcon={<ArrowForwardIosIcon/>}>

               join now
           </Button>
      </Stack>


     </Box>

    </Stack>
    )
}

export default Blogmain