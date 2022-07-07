import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MyClientbgblue, MyServiceCardwrap } from '../navba/navbastyle'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Client = () => {
    const color = [
        {
          name:'#FF9800',
          title:'satisfied clients',
          num:'18',
          icon:<EmojiEmotionsIcon fontSize='large'  color='secondary' />
        },
        {
          name:'#0FA958',
          title:'project completed',
          num:'30',
          icon:<FactCheckIcon fontSize='large' color='secondary'  />
        },
        {
          name:'#F50057',
          title:'project lunched',
          num:'21',
          icon:<AutoAwesomeIcon fontSize='large' color='secondary'  />
         
        },
        {
          name:'#6901BB',
          title:'years completed',
          num:'12',
          icon:<EmojiEmotionsIcon fontSize='large' color='secondary'  />
          
        },
      ]
  return (
   
       <Box py={10} sx={{zIndex:10}}   >
       <Grid container   justifyContent='space-between' >
       {
        color.map((item)=>(

            
            <Grid item alignItems='center' xs={6} 
          
            lg={3} >
            <MyServiceCardwrap>
           <Stack alignItems='center' justifyContent='center' borderRadius={100} width={{xs:50, sm:80}}
           height={{xs:50 ,sm:80}} bgcolor={item.name}
           ><span>{item.icon}</span></Stack> 
           
           <Typography variant="h3" textAlign='center' color="initial">{item.title}</Typography>
           
           <Typography variant="h1"  textAlign='center'  color="primary">{item.num}</Typography>
           
           </MyServiceCardwrap>
           
           </Grid>
           ))
        }
        </Grid>
        </Box>
   
  )
}

export default Client