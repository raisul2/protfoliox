import { Box } from '@mui/system'
import React, { useState } from 'react'
import { MainTextTitle } from '../services/Service'
import Typography from '@mui/material/Typography'
import { Myiconbox, MyProrfoliobox, MyProtfolioHover, MyProtfolioHoverwrap, MyProtfolioLink } from '../navba/navbastyle'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { mainshadow16, mainshadow8 } from '../../coustomstylevaluable'

import ArrowLeft from '@mui/icons-material/ArrowLeft'
import {motion} from 'framer-motion'
import { Stack } from '@mui/material'
const Protfolio = () => {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
          title: 'Bed',
        },
        {
          img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
          title: 'Kitchen',
        },
        {
          img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
          title: 'Sink',
        },
        {
          img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
          title: 'Books',
        },
        {
          img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
          title: 'Chairs',
        },
        {
          img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
          title: 'Candle',
        },
        {
          img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
          title: 'Laptop',
        },
        {
          img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          title: 'Doors',
        },
        {
          img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
          title: 'Storage',
        },
        {
          img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
          title: 'Coffee table',
        },
        {
          img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
          title: 'Blinds',
        },
      ];
      const dat ={
        borderRadius:2,

        boxShadow:mainshadow8 ,
            minHeight:'30vh',
         '&:hover':{
            boxShadow:mainshadow16,
          
          }
             
        
      }


       const [hovers, setHovers] = useState(-1) 

  return (
    <Box py={2} className='container-fluid' >
    <MainTextTitle title={'projects'}
    subtitle={'our portfolio'}
    align={'center'}
     
      
    />

<MyProtfolioLink>
<ProjectName/>
</MyProtfolioLink>
   

<Grid py={2} gap={3} container  alignItems='center' 
  justifyContent='space-between'
 >

{
    itemData.map((item, index)=>(
         <Grid key={index} overflow='hidden'    onMouseEnter={()=>setHovers(index)}
       
         onMouseLeave={()=>setHovers(-1)}
          item xs={12} position='relative' sm={5} md={3.5}
         
         sx={dat}  >
         <Stack>
         <img src={item.img} alt="" />
         </Stack>
      {
         hovers === index ? 
        <MyProtfolioHover
         initial={{y:500}}
         animate={{y:0}}
         transition={{duration:.8, type:'spring'}}
        >
        <Typography variant="h2" color="initial">
      {item.title}
      </Typography>
      <Typography variant="h3" color="initial">
      brand.websight
      </Typography>
      </MyProtfolioHover> : ""
      
    }
    
 


        </Grid>
    ))
}



</Grid>

<div  >
</div>

   
</Box>

  )
}

export default Protfolio



function ProjectName() {
    
    const data = [
        {
            name:'all'
        },
        {
            name:'ux/ui design'
        },
        
        {
            name:'development'
        },
        {
            name:'content design'
        },
        {
            name:'SEO'
        },
        

    ]

    return(
        <>
         {
            data.map((item)=>(
                <Typography
                 sx={{ '&:hover':{
                      background:'blue',
                      borderRadius:10,
                      boxShadow:3,
                      color:'white'
                 }, cursor:'pointer',   py:.5,
                 px:2, fontWeight:'bold'}}
                
                variant="h6" color="initial">
                  {item.name}
                </Typography>
            ))
         }
        </>
    )
}