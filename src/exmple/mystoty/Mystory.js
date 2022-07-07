import React from 'react'
import {Stack, Grid,  Typography, Button} from '@mui/material'
const Mystory = () => {
  return (
    <Stack py={5} gap={8} className='container-fluid' >
        <Grid container gap={2} justifyContent='space-between'  alignItems='start' >
            <Grid item xs={12} boxShadow={2} md={5.5}   >
            <Stack>
            <img src='img/profile3.png' alt="" />
            </Stack>
            </Grid>
            <Grid item xs={12} md={5.5} container gap={3} >
             <Typography variant="h2" color="initial">
               designer form a filmmmaking and engineering background-
             </Typography>
               <Stack p={4} boxShadow={2}  >
                    <Typography variant="h6" color="initial">
                    hi,i'm raisul hasan

                    i'm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi pariatur cum voluptatum nesciunt ullam. Commodi, reprehenderit nisi, obcaecati voluptatibus enim perferendis suscipit nihil neque aliquam aperiam perspiciatis, natus totam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sequi veniam dolorum eaque qui amet voluptatum optio? Quidem soluta, ipsa fugiat animi veritatis praesentium minus, omnis illo, velit repudiandae ea.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam placeat cum consequatur provident laudantium ducimus aperiam ex adipisci eius doloribus vel beatae velit libero iusto delectus at obcaecati, nulla ad!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore magnam eveniet delectus, atque autem fuga esse molestiae repudiandae sequi, optio, ab commodi voluptatum iure nemo et aut consequatur debitis.
                    </Typography>
               </Stack>
            </Grid>
        </Grid>
    
        <Grid container gap={2} justifyContent='space-between'  alignItems='start' >
        <Grid item xs={12} md={5.5} container gap={3} >
        <Typography variant="h1" color="primary">
          my goals & ambition
        </Typography>
        <Typography variant="h3" color="initial">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus molestiae assumenda quod fugit? Obcaecati eveniet nisi, dolores reprehenderit libero totam. Harum, assumenda! Nesciunt praesentium aliquid est accusantium excepturi laudantium?
        </Typography>
       </Grid>    
        <Grid item xs={12} boxShadow={2} md={5.5}   >
            <Stack>
            <img src='img/gol1.jpg' alt="" />
            </Stack>
            </Grid>
           
        </Grid>

        <Grid container gap={2} justifyContent='space-between'  alignItems='start' >
        <Grid item xs={12} boxShadow={2} md={5.5}   >
        <Stack>
        <img src='img/design1.jpg' alt="" />
        </Stack>
        </Grid>
        <Grid item xs={12} md={5.5} container gap={3} >
        <Typography variant="h2" color='initial'>
          help buisness with design and coding solutions wich can make difference create the most fexble , innovative & elegant design kits
        </Typography>
        <Typography variant="h6" color="initial">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore natus molestiae assumenda quod fugit? Obcaecati eveniet nisi, dolores reprehenderit libero totam. Harum, assumenda! Nesciunt praesentium aliquid est accusantium excepturi laudantium?
        </Typography>

        <Button variant="contained" color="primary">

         contact us 
          
        </Button>
       </Grid>    
 
           
        </Grid>

         <Stack py={5}   >
         
           <Typography variant="h1" textAlign='center'  color='initial' >
             how i started into design and programing 
           </Typography>

           <Typography variant="h3" textAlign='center'  color='CaptionText'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi placeat adipisci ipsa accusamus facere temporibus vero dicta dignissimos veritatis laboriosam incidunt, corrupti quo sequi deserunt? Ullam exercitationem nisi cum?
           </Typography>
         
         </Stack>

    
    </Stack>
  )
}

export default Mystory
