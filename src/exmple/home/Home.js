import { Box } from '@mui/system'
import React from 'react'
import Navba from '../navba/Navba'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { MyMainTextTitle } from '../navba/navbastyle'
import {motion} from 'framer-motion'
import { homeanimattion, homeanimattionleft } from './homestyle'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <Box   py={2} className='container-fluid'>
        <Grid   
        container justifyContent='space-between' gap={5} alignItems='center' minHeight='80vh' >
            <Grid
            component={motion.div} 
            variants={homeanimattion}
            initial="hidden"
             animate="animate"
             transition="transition"

            item container gap={2}  xs={12} md={6}>
              <Typography variant="h2" color="initial">
              we create ides
              </Typography>
              <Typography variant="h1" color="initial">
              HOW WE CAN HELP YOUR  
    <Typography variant="h1" color='primary' > BUSINESS </Typography>
              </Typography>
              <Typography variant="h3" color="initial">
              I’m ux/ui designer and webdeveloper  Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Aliquam, In! Delectus Cupiditate Neque Voluptate
              </Typography>
            <Link to='services'   >
            
            <Button variant="contained"
            
            color="primary">
            lern more
            </Button>
            </Link>
            </Grid>
            <Grid
            component={motion.div} 
            variants={homeanimattionleft}
            initial="hidden"
             animate="animate"
             transition="transition"
             
            item container justifyContent='end' xs={12} md={5}>
            <img src="img/home.svg" alt="" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Home
