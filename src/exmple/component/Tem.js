import React, { useRef , useState} from 'react'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Myiconbox, MyTemcard, MyTemcardtow } from '../navba/navbastyle'
import { MainTextTitle } from '../services/Service'
import { Swiper, SwiperSlide } from "swiper/react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


const Tem = () => {
  return (
    <Box py={2} className='container-fluid' >
        
    <MainTextTitle
      title={'team'} subtitle={'our bests expertise'}
      align={'center'}
    />

    <Swiper
    breakpoints={{
        576: {
            width: 576,
            slidesPerView: 1,
           
          },
  
          768: {
            width: 768,
            slidesPerView: 2.5,
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
            <MyTemcard>
            <img src="img/profile2.png"
          
          style={{  width:'100%', 
          height:'100%', objectFit:'contain' }}
            alt="" />
              <MyTemcardtow>
              <Stack >
                <Typography fontWeight='bold' variant="body2" color="initial">
                ms.nokati mowi
                </Typography>
                <Typography variant="caption" color="initial">
                sinior developer
                </Typography>
              </Stack>
              <Stack direction='row' gap >
                <Myiconbox>
                 <FacebookIcon  fontSize='small' />
                </Myiconbox>
                <Myiconbox>
                 <TwitterIcon  fontSize='small' />
                </Myiconbox>
                <Myiconbox>
                 <LinkedInIcon  fontSize='small' />
                </Myiconbox>
              </Stack>
              </MyTemcardtow>
              
            </MyTemcard>
            </SwiperSlide>
        ))
      }
      
      
      </Swiper>
      </Box>
  )
}

export default Tem
