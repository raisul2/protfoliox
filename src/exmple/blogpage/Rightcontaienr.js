import { Box, Stack, Button, getMenuUtilityClass, Typography } from '@mui/material'
import React from 'react'
import { MyBlogSearchwrap } from './Blogstyle'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Rightcontaienr = () => {
  return (
    <Stack gap={3} width={1} >
    
     <BlogSearch/>
      
     <Stack gap>
     <RIghtTitle title={'category'} />
       
     {
        ['audio','beauty','fashion','images','lifestyle'].map((item)=>(
            <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h6" color="initial">{item}</Typography>
            <Typography variant="h6" color="initial">(3)</Typography>
            </Stack>
        ))
     }
      
     </Stack>

     <Stack gap>
     <RIghtTitle title={'resent posts'} />
     {
        [1,2,3,4].map((item)=>(
            <BlogResentPost/>
        ))
       }
     </Stack>

     <Stack gap>
     <RIghtTitle title={'archives'} />
       
     {
        ['january','february','march','april','may', 'june','july'].map((item)=>(
            <Stack direction='row' justifyContent='space-between' >
            <Typography variant="h6" color="initial">{item}</Typography>
            <Typography variant="h6" color="initial">(3)</Typography>
            </Stack>
        ))
     }
      
     </Stack>

     <Stack gap flexWrap='wrap' direction='row' >
     <RIghtTitle title={'archives'} />
       
     {
        ['business','news','brand','website','internal', 'strategy'].map((item)=>(
            <div>
            <Button variant="outlined" >
            {item}
            </Button>
            </div> 
        ))
     }
      
     </Stack>

    </Stack>
  )
}

export default Rightcontaienr


function BlogSearch() {
    

    return(
<MyBlogSearchwrap>
<Stack direction='row'  alignItems='center' justifyContent='center'>
<SearchIcon  />
<input type="text" placeholder='Search' style={{ outline:'none', border:'none', height:'100%', width:'100%'}} />
</Stack>

<Button size='small' variant="contained" sx={{borderRadius:'0'}}  color="primary">
  
<ArrowForwardIcon color='secondary'   />
</Button>
 
</MyBlogSearchwrap>
    )

}


export function RIghtTitle({title}) {
    return(
        
        <Typography width={1} variant="h2" color="initial" borderLeft='3px solid blue' pl={1} 
        
        textTransform='uppercase'
        >

           {title}                  
        </Typography>
    )
}



function BlogResentPost() {
    
    return(
        <Stack direction='row' gap justifyContent='space-between' >
        <Box hright="30vh" width={1/2} >
        <img src="img/about.jpg" alt="" />
        </Box>
        <Stack>


             <Typography variant="h3" color="initial">
             fusce mollis felis quis tristique
             </Typography>
             <Typography variant="caption" color="primary">
             7march,2022
             </Typography>
           </Stack>

        </Stack>
    )

}
