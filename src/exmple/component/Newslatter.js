import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MyNewslatterTextfild, MyNewslatterwrap } from '../navba/navbastyle'
import Stack from '@mui/material/Stack';

const Newslatter = () => {
  return (
    <MyNewslatterwrap>
    <Stack direction="column" className='container-fluid' spacing={2}>
  

    
        <Typography color='white'  variant="h3" >
        news latter
         </Typography>
         <Typography color='white'  variant="h1">
         subcribe to our new sletter
         </Typography>
<Typography variant="h4" color='white'  > 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusantium quasi dolor excepturi, hic enim dolores nemo? Perspiciatis sapiente culpa, necessitatibus blanditiis vero eos! Numquam libero dolor eaque corporis laborum?
</Typography>

<MyNewslatterTextfild>
  <input type="text" style={{border:'none', outline:'none', height:'100%', width:'50%', marginLeft:'10px'}}
  placeholder='Your Emanil'
  />
  <Button size='small'  variant="contained" color="primary">
    
     subcribe now
  </Button>
</MyNewslatterTextfild>

</Stack>
       
    </MyNewslatterwrap>
  )
}

export default Newslatter