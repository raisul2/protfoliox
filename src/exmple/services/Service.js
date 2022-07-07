import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import Servicecard from '../component/Servicecard'
import { MyMainTextTitle } from '../navba/navbastyle'

import WebhookIcon from '@mui/icons-material/Webhook';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import AnimationIcon from '@mui/icons-material/Animation';
import TextRotationDownIcon from '@mui/icons-material/TextRotationDown';
const Service = () => {

  const arry = [

    {
      name:'#FF9800',
      title:'web development',
      icon:<WebhookIcon fontSize='large' color='secondary' />
    },
    {
      name:'#0FA958',
      title:'ux/ui designer',
      icon:<ViewQuiltIcon fontSize='large' color='secondary' />

    },
    {
      name:'#F50057',
      title:'animation cteate',
      icon:<AnimationIcon fontSize='large' color='secondary' />

    },
    {
      name:'#6901BB',
      title:'content design',
      icon:<TextRotationDownIcon fontSize='large' color='secondary' />

    },
  
  ]
  
    
  return (
    <Box py={3} className='container-fluid'>
      <MainTextTitle title={'services'} subtitle={'provide awesome services'} align={'center'}  />

      <Grid container minHeight='60vh' gap  py={2} justifyContent='space-between' alignItems='center' >
      {
          arry.map((item)=>(
                <Grid item xs={12} sm={5.9} lg={2.9}>
                <Servicecard bg={item.name} title={item.title} icon={item.icon} />
                </Grid>
                ))
            } 
      </Grid>

    </Box>
  )
}

export default Service


 
export function MainTextTitle({title, subtitle, align}) {
    
     return(
        <MyMainTextTitle>
        <Typography variant="h3" textAlign={align}  color="initial">{title}</Typography>
        <Typography variant="h2" textAlign={align}  color="initial">{subtitle}</Typography>
        </MyMainTextTitle>
     )
}