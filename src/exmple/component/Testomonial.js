import { Box } from '@mui/system'
import React from 'react'
import {Grid, Avatar, ListItemAvatar} from '@mui/material'
import Typography from '@mui/material/Typography'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { MyTestomonialbox } from '../navba/navbastyle';
import { Stack } from '@mui/material';



const Testomonial = () => {
  return (
    <Box bgcolor='#D9D9D9' >
  
      <Grid  className='container-fluid' container spacing={0}>
         <Grid  container   alignItems="center"  py={10}  item xs={12} md={5}>
            <Typography variant="h3" color="initial">
            testmonial
            </Typography>
            <Typography variant="h1" color="initial">
             what our <span style={{color:'blue'}} > clients</span>say's
            </Typography>
            <Typography variant="h4" color="initial">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod obcaecati reprehenderit, suscipit repudiandae accusamus fugit ducimus ipsam ea temporibus ab aliquid? Sunt dolorem nesciunt debitis sit iste facere voluptates earum?
            </Typography>
         </Grid>
         <Grid bgcolor='#ffff' container
         alignItems='center'  justifyContent='center'
         height='60vh' item xs={12} md={7}>
           
    <Swiper
    breakpoints={{
        576: {
            width: 576,
            slidesPerView: 1,
          },
  
          768: {
            width: 600,
            slidesPerView: 1.5,
        },
          1024: {
            width: 500,
            slidesPerView: 1,
        },
    }}
        
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
       
        modules={[Pagination]}
        className="mySwiper"
        >
      

        {
            [1,2,3,4].map((item)=>(
                <SwiperSlide>
                   <MyTestomonialbox>
                    <Typography variant="h4" color="initial">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quis labore quos? At maxime maiores non vero ipsa facilis ipsum. Libero molestias minus perspiciatis. Ex dolorem facilis assumenda ipsam totam?
                    </Typography>
                     <Stack  direction='row' 
                     alignItems='center'
                     justifyContent='space-between' >
                     <img src="img/testo.svg" 
                     style={{width:'70px'}}
                   alt="" />
                     <Stack  direction='row'   justifyContent='center'
                     gap
                     >

                    
                     <div>
                      <Typography fontWeight='bold' variant="body2" color="initial">
                       yogona
                      </Typography>
                      <Typography variant="caption" color="initial">
                      founderceo
                      </Typography>
                       
                     </div>
                      
                     <ListItemAvatar>
                     <Avatar>
                        <img src={  process.env.PUBLIC_URL + "img/profile2.png"} alt="" />
                     </Avatar>
                   </ListItemAvatar>
                       
                        
                     </Stack>
                        
                    </Stack>
                   </MyTestomonialbox>
                </SwiperSlide>
            ))
        }
             
      
        </Swiper>

         </Grid>
      </Grid>
    
    </Box>
  )
}

export default Testomonial