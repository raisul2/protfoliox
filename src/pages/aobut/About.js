import React from 'react'
import './about.scss'
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

import {Paper, Button, Grid, Typography, Checkbox} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'70vh',
  }));
const Item2 = styled(Paper)(({ theme }) => ({
  
    padding: theme.spacing(1),
    textAlign: 'start',
     
    height:'70vh',
    display:'flex',
    alignItems:'start',
    justifyContent:'space-between',
    flexDirection:'column',
    
    
   
 
    
    
  }));

const Checkboxswrap = styled(Paper)(({ theme }) => ({
  
  
    textAlign: 'start',
    display:'flex',
    gap:10,
    flexDirection:'column'

  }));
const Checkboxs = styled('div')(({ theme }) => ({
  
    
    textAlign: 'start',
    display:'flex',
    gap:10

  }));


const About = () => {
  return (
    <div className='container-fluid main-about'>
    <Grid container  spacing='3rem' alignItems='center' minHeight='100vh' 
    
    >
    <Grid item xs={12}  sm={6} >
      <Item>
      <img className='img-x' src="img/profile2.png" alt="" />
      </Item>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Item2 elevation={0} >

      <Typography variant="h2" color="initial">Consectetur Adipisicing Elit. Quo Natus Maxime Modi Aliquid Neque Nostrum, Voluptatum Perspiciatis</Typography>
        
  <Typography variant="subtitle1" color="initial">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci iusto ab ea, doloribus officiis id dolorum ratione ex, dolore molestias optio nam beatae nisi officia eum consequuntur voluptatum nobis. Rem.
  </Typography>
<Checkboxswrap elevation={0}>
<Checkboxs> <CheckIcon/> <Typography variant='h3' color="initial">Doloribus Officiis Id Dolorum Ratione Ex, Dolore Molestias</Typography>
</Checkboxs>


</Checkboxswrap>

 <Button variant="contained" sx={{ borderRadius:10, background:'primary.main' }} >Contained</Button>
       
      </Item2>
    </Grid>
  
  </Grid>
    
    </div>
  )
}

export default About