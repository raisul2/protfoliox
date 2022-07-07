import { Box } from '@mui/system'
import React from 'react'
import { MainTextTitle } from '../services/Service'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { Myblogicon , Myblogbox} from '../navba/navbastyle'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <Box  py={4} className='container-fluid' >
         
     <MainTextTitle title={'blog'}  subtitle={'latest blog and news'}
     align={'center'}
     />

      <Grid py={2} container gap spacing={0} justifyContent={{md:'space-between', xs:'center'}}   >
      {
        [1,2,3].map((item)=>(

            <Grid item sx={12} sm={5} md={3.8}>
            
   <Blogmainbox/>
            </Grid>
        ))
    }  
      </Grid>
     
    </Box>
  )
}

export default Blog


 
export function Blogmainbox() {
  
  return(
    <Link to='blog' >

    <Myblogbox>
    
    <Box>
    <img src="img/about.jpg" alt="" />
    </Box>

    <Stack gap >
       <Typography variant="h3" color="initial">
        scelerisque vehicula sit amet porttitor magna
       </Typography>
       <Typography variant="h4" color="initial">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nostrum aliquid i
       </Typography>

       <BlogHistory/>
       
       </Stack>
       
       </Myblogbox>
       </Link>
  )
}


export function BlogHistory(params) {
  return(
   
    <Stack gap direction='row' justifyContent='space-between'  >
    <Myblogicon>
    <AccessTimeIcon color='primary' fontSize='small' />
    <Typography variant="h6" color="initial">
     7march,2022
    </Typography>
    </Myblogicon> 
    <Myblogicon>
      <ForumIcon color='primary' fontSize='small' />
     <Typography variant="h6" color="initial">
     15
     </Typography>
    </Myblogicon>
  
  </Stack>
  )
}
