import { Avatar, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material'
import { BlogHistory, Blogmainbox } from '../component/Blog'
import { RIghtTitle } from './Rightcontaienr'

const LeftContaienr = () => {

  const admin = [

    { img:'img/dami1.jpg',
      title:'Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis',
      text:'Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.',
      boxText:'Use this static Page to test the Theme’s handling of the Blog Posts Index page. If the site is set to display a static Page on the Front Page, and this Page is.',
      link:'wordpase'
    },
    { img:'img/dami1.jpg',
      title:'Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis',

      
      text:'Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.',
      boxText:'',
      link:''
    },

  ]


  return (
    <Stack gap={3} >
    
    <Stack gap={5} pb={5}  borderBottom="1px solid black" >
  

    {
      admin.map((item)=>(
    <Stack gap={2} >
      
    <Stack gap>
    {
      item.img === '' ? null :  
    
    <Stack borderRadius={2} minHeight='30vh' overflow='hidden'  boxShadow={2}  >
    <img src={item.img} alt="" />
       </Stack>
      }
       <Box width={{sm:1/3, xs:1}} >
       <BlogHistory/>
       </Box>
    </Stack>
        <Typography variant="h2" color="initial">
        
      {item.title}

        </Typography>

        <Typography  variant='h3' color='grey'>
       {item.text}
        </Typography>
{
  item.boxText === '' ? null :  <BlogDatabox item={item} /> 
}

<Stack direction='row' boxShadow={2} flexWrap='wrap' >

  <Stack width={1}    >
  <img src="img/dami1.jpg" alt="" />
  </Stack>

  <Typography p={5} variant="h6"  >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora, aut ecessitatibus sapiente neque pariatur eius iure odit repellat iste repudiandae.earum corporis adipisci blanditiis similique ratione, quae sunt 
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora, aut ecessitatibus sapiente neque pariatur eius iure odit repellat iste repudiandae.earum corporis adipisci blanditiis similique ratione, quae sunt hic n
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora, aut ecessitatibus sapiente neque pariatur eius iure odit repellat iste repudiandae.earum corporis adipisci blanditiis similique ratione, quae sunt 
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora, aut ecessitatibus sapiente neque pariatur eius iure odit repellat iste repudiandae.earum corporis adipisci blanditiis similique ratione, quae sunt hic n
  </Typography>
  </Stack>
  
 
    
</Stack>
))
} 
</Stack>

<RIghtTitle title={'related blogs'}  />

  <Grid gap={2} container  justifyContent='space-between'  >
  
  <Grid item xs={12} md={5.5} >
        <Blogmainbox/>
  </Grid>
  
  <Grid item xs={12} md={5.5} >
        <Blogmainbox/>
  </Grid>
  
  </Grid>

  <RIghtTitle title={'8 comments'}  />

  <Stack gap >
  {
   [1,2,3,4].map((item)=>(
     <Comentavater/>
   ))
  }
</Stack>


</Stack>

    )
}

export default LeftContaienr


function BlogDatabox({item}) {
  
  return(
    <Stack alignItems='start'    justifyContent='center' gap p={5}  boxShadow={2}  borderLeft='8px solid blue' >

   
   
      <Typography fontWeight={900} variant="h3" color="initial"> {item.boxText}  </Typography> 
    
   

     <Typography  variant="h6" color="primary">
      {item.link}
     </Typography>
     
  


    </Stack>
  )
}



function Comentavater() {
  
   return(
     <Stack gap direction='row' >
         <Avatar>
         <img src="img/profile2.png" alt="" />
         </Avatar>
      
         <Stack>
           <Typography sx={{fontWeight:'bold'}} variant="h3" color="initial">
           Celesto Anderson
           </Typography>
           <Typography variant="h6" color="initial">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut aliquid corrupti similique placeat voluptatum atque, eveniet laborum voluptate modi explicabo quasi ut architecto omnis ipsam fuga earum praesentium ratione?
           </Typography>
           <Typography textTransform='uppercase' variant="caption" color="primary">
           reply
           </Typography>
         </Stack>
     </Stack>
   )

}
