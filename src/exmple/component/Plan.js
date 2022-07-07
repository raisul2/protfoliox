import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { Myiconbox, MyPlanbox } from '../navba/navbastyle'
import { MainTextTitle } from '../services/Service'
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import {Avatar, ListItemAvatar, ListItemText,ListItem, Grid} from '@mui/material';


const Plan = () => {
  return (
    <Box py={2} className="container-fluid" >
       <MainTextTitle
         title={'price'}
         subtitle={'choose plan'}
         align={'center'}
       />  
    <Grid container py={5}  gap={4} justifyContent={{sm:'center', md:'space-between'}} alignItems='center' >
      

   {
    [1,2,3].map((item)=>(
    <Grid item md={3.5} xs={12} sm={5.5}  >
 
        <MyPlanbox>
            <Typography fontWeight='bold' variant="body1" color="initial">
            basic plan
            </Typography>

          
           <Typography variant="h2" color="primary">
           $99/month
           </Typography>

           <Typography textAlign='center' variant="caption" color="initial">
           Lorem ipsum dolor sit amet consectetur adipisicing 
           Lorem ipsum dolor sit amet co
           </Typography>
        {
            [1,2,3,4,5,6].map((item)=>(

           <Stack>
             <Stack direction='row' gap >
               <CheckIcon/>
               <Typography fontWeight='bold' variant="subtitle2" color="initial">
                 web design/uxui
               </Typography>
             </Stack>
           </Stack>

           ))
        }
        
<Button my={4}  size='medium' variant="contained" color="primary">
start now
  
</Button>

         </MyPlanbox>
            
    </Grid>
    ))
} 

</Grid>
</Box>
  )
}

export default Plan