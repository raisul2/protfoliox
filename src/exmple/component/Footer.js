import { Box } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { Myiconbox } from '../navba/navbastyle'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <Box bgcolor='blue'  >
     <Grid container gap={4} py={5} minHeight='40vh' alignItems='start' className='container-fluid'>
       <Grid container gap item sx={12} sm={2.5} > 
          <Typography variant="h2" color="white">
           about us
          </Typography>

          <Typography variant="h4" color="white">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione expedita dolore quos vel. Tempore placeat, eveniet recusandae itaque ipsum, saepe nulla, magni non vel in quis! Sunt, est modi!
          </Typography>
         <Stack gap direction='row' >
          <Myiconbox>
          <a href="https://www.facebook.com/mdrisulhasan.hridoy.3">
          <FacebookIcon fontSize='small' color='#ffff' />
          </a> 
          </Myiconbox>
          <Myiconbox>
          <a href="https://www.facebook.com/mdrisulhasan.hridoy.3">
          <TwitterIcon fontSize='small' color='#ffff' />
          </a>
          </Myiconbox>
          <Myiconbox>
          <a href="https://www.linkedin.com/in/raisul-hasan-214b77240/">
          <LinkedInIcon fontSize='small' color='#ffff' />
          </a>
          </Myiconbox>
         </Stack>
       </Grid>

       <Grid container gap item sx={12} sm={2.8}
       direction='column'
       >
       <Typography variant="h2" color="white">
       about us
      </Typography>
         {
            ['home','about','services','blog','my story','contact us'].map((item)=>(
                <Typography variant="h4" color="white">
               {item}
               </Typography>
            ))
         }
       </Grid>
       <Grid container gap item sx={12}  sm={2.8}
       direction='column'
       >
       <Typography variant="h2" color="white">
       our services
      </Typography>
         {
            ['app development','web development','ux/ui design','branding','product design'].map((item)=>(
                <Typography variant="h4" color="white">
               {item}
               </Typography>
            ))
         }
       </Grid>
       <Grid container gap item sx={12}  sm={2.8}
       direction='column'
       >
       <Typography variant="h2" color="white">
       other links
      </Typography>
         {
            ['FAQ','protfolio','privacy policy','tem','saport'].map((item)=>(
                <Typography  variant="h4" color="white">
               {item}
               </Typography>
            ))
         }
       </Grid>
   
     </Grid>
    </Box>
  )
}

export default Footer