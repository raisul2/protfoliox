import React from 'react'
import {Grid,Stack, TextField, Button} from '@mui/material'
import { MainTextTitle } from '../services/Service'
const Contact = () => {
  return (
   
    <Stack py={5} alignItems='center' className='container-fluid'  >
       <MainTextTitle  subtitle={'contact us'} align={'center'} />
    <Grid py={3} width={{xs:1, md:1/2}}  gap={2} container justifyContent='start'  >
  
    <Grid  item xs={12} md={5}  >

    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      defaultValue="Your Name"
      variant="filled"
      size="small"
     fullWidth
    />
    </Grid>
   
    <Grid item xs={12} md={5}  >

    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      defaultValue="Your Email"
      variant="filled"
      size="small"
     fullWidth
    />
    </Grid>
    
    <Grid item xs={12} md={5}  >

    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      defaultValue="Your Number"
      variant="filled"
      size="small"
     fullWidth
    />
    </Grid>
    
    <Grid item xs={12} md={5}  >
    
    <TextField
    hiddenLabel
    id="filled-hidden-label-small"
    defaultValue="Project title"
      variant="filled"
      size="small"
     fullWidth
    />
    </Grid>
    
    <Grid item xs={12} md={12}  >
    
    <TextField 
    hiddenLabel
    id="filled-hidden-label-small"
    defaultValue="Message"
      variant="filled"
      size='medium'
     fullWidth
    />
    </Grid>
    
    
    <Grid item md={4}  >
    
      <Button size='small'  variant="contained" color="primary">
        send message
      </Button>

    </Grid>
    
    
    
        
 
    </Grid>
   
    </Stack>
  )
}

export default Contact