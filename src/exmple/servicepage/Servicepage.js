import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import About from '../component/About'
import Client from '../component/Client'
import Contact from '../component/Contact'
import Newslatter from '../component/Newslatter'
import Plan from '../component/Plan'
import Tem from '../component/Tem'
import Testomonial from '../component/Testomonial'
import Workflow from '../component/Workflow'
import Service from '../services/Service'


const Servicepage = () => {

  const color = [
    {
      name:'#FF9800'
    },
    {
      name:'#0FA958'
    },
    {
      name:'#F50057'
    },
    {
      name:'#6901BB'
    },
  ]

 
  return (
    <Stack py={5}>
   <PageTitle title={`services page`}  />
    <Service
      arry={color}
    />
    <Client/>
    <Workflow/>
    <Newslatter/>
    <Tem/>
    <Plan/>
    <Testomonial/>
  
    <Contact/>
    
    
    </Stack>
  )
}

export default Servicepage



export function PageTitle ({title}) {
  return(
    <Stack  bgcolor='lightgray' >
    <Box className='container-fluid' py={4} >
    <Typography textAlign='start' variant="h1" color="initial">
    {title}
    </Typography>
    </Box>   
    </Stack>
  )
}