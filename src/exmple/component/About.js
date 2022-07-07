import { Box } from '@mui/system'
import React from 'react'
import { MainTextTitle } from '../services/Service'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Box py={2} className='container-fluid' >
    
    <Grid container gap={2} justifyContent='space-between' >
    
    <Grid item xs={12}  md={6.5} minHeight='50vh' >
     <img src="img/about.jpg" style={{width:'100%', height:'100%', objectFit:'cover'}}  alt="" />
    </Grid>
    <Grid item container gap={4} justifyContent='start' alignItems='start'  xs={12} md={5}>
    <div>
    <MainTextTitle title={'about us'} 
    subtitle={'how we van help your business goal'}
    align={'start'}
    />
    <Typography variant="h6"  color="initial">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non necessitatibus unde voluptatem, quam reprehenderit dignissimos explicabo magni vel porro adipisci consequuntur ipsam dicta minus voluptatum iste beatae laboriosam dolorum velit.
    </Typography>
    </div>
    <Link to='about' >
    <Button variant="contained" color="primary">
    lern more
    </Button>
    </Link>
   

    </Grid>

    </Grid>

    
    
    </Box>
  ) 
}

export default About
