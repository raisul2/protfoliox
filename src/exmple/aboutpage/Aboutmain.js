import { Stack, Grid, Typography } from '@mui/material'
import React from 'react'
import { PageTitle } from '../servicepage/Servicepage'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { MainTextTitle } from '../services/Service';
import Client from '../component/Client';
import Workflow from '../component/Workflow';
import Protfolio from '../component/Protfolio';
import Newslatter from '../component/Newslatter';
import Tem from '../component/Tem';
import Blog from '../component/Blog';
import Contact from '../component/Contact';
import Testomonial from '../component/Testomonial';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StorefrontIcon from '@mui/icons-material/Storefront';
const Aboutmain = () => {
  return (
    <Stack gap={5} py={5} >
         <PageTitle title={'about page'} />

           <Grid container py={2} className='container-fluid' justifyContent='space-between' gap={2} >
              <Grid item xs={12} md={5.5} >
              <img src={ process.env.PUBLIC_URL + "img/about.jpg"} alt="" />
              </Grid>
              <Grid item xs={12} md={5.5} container gap >
              <MainTextTitle title={'about us'} 
              subtitle={'how we van help your business goal'}
              align={'start'}
              />
              <Typography variant="h6"  color="initial">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non necessitatibus unde voluptatem, quam reprehenderit dignissimos explicabo magni vel porro adipisci consequuntur ipsam dicta minus voluptatum iste beatae laboriosam dolorum velit.
              </Typography>
   
              <Stack direction='row' flexWrap='wrap' gap >
              
              {
                  [1,2,3,4,5,6,7,8].map((item)=>(
                    <Stack direction='row' alignItems='center' gap >
                    <DoubleArrowIcon fontSize='small' color='primary' />
                    <Typography variant="h6" sx={{fontWeight:'bold'}} color="initial">
                    Nulla dict posuere veliitae.
                    </Typography>
                    </Stack>
                  ))      
            }
            </Stack>

              

               </Grid>
           </Grid>

           <Grid container py={2} className='container-fluid' justifyContent='space-between' gap={2} >
            
              <Grid item xs={12} md={5.5} container gap >
              <MainTextTitle title={'watch us'} 
              subtitle={'watch now our team help'}
              align={'start'}
              />
              <Typography variant="h6"  color="initial">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non necessitatibus unde voluptatem, quam reprehenderit dignissimos explicabo magni vel porro adipisci consequuntur ipsam dicta minus voluptatum iste beatae laboriosam dolorum velit.
              </Typography>
              
              <Stack gap={2} >
              
              <Stack direction='row'  gap >
                
                  <StorefrontIcon fontSize='large' color='primary' />
             
                 <Stack>
                  <Typography variant="h3" color="initial">
                  online support
                  </Typography>
                  <Typography variant="h4" color="initial">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit sint eos molestias consequatur ad ducimus minus
                  </Typography>
                 </Stack>
              </Stack>
              <Stack direction='row'  gap >
                
                  <SupportAgentIcon fontSize='large' color='primary' />
             
                 <Stack>
                  <Typography variant="h3"  color="initial">
                  Worldwide Marketing
                  </Typography>
                  <Typography variant="h4" color="initial">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odit sint eos molestias consequatur ad ducimus minus
                  </Typography>
                 </Stack>
              </Stack>
           

              </Stack>
                

               </Grid>
               <Grid item xs={12} md={5.5} >
               <img src={ process.env.PUBLIC_URL + "img/about.jpg"} alt="" />
               </Grid>
           </Grid>

           <Client/>

        
           <Tem/>
           <Testomonial/>
           <Blog/>
           <Contact/>
         
            
    </Stack>
  )
}

export default Aboutmain