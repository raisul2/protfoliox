import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Contact from '../component/Contact';
import { PageTitle } from '../servicepage/Servicepage';
const Contactmain = () => {
  
    const sty = {
        position:'absolute', top:'-35%', left:'5%',right:'95%', bgcolor:'blue', width:'70px', height:'70px', p:2, borderRadius:100, color:'white'
    }

    const data = [
        {    
            icon:<LocalPhoneIcon   fontSize='large' sx={sty} />,
            name:'call now',
             title:"+0170309473"
        },
        {
            icon:<LocationOnIcon  fontSize='large' sx={sty} />,
            name:'location',
             title:"bangladesh,rajshahi,bogra,thinmathrelget"
        },
        {
            icon:<EmailIcon  fontSize='large' sx={sty} /> ,
            name:'email now',
             title:"raisul58208@gmail.com"
        },
    ]
  
    return (
    <Stack gap={4} py={5}  >
    
     <PageTitle title={'contact us'} />

    <Grid container gap={2} className='container-fluid'   justifyContent='space-between' >
    {
       data.map((item)=>(
           <Grid item sx={12} md={3.5}>
            <ContactBox name={item.name} title={item.title} icon={item.icon} />
           </Grid>

       ))
    }
    </Grid>

    <Contact/>

    </Stack>
  )
}

export default Contactmain



function ContactBox({name,title,icon}) {
    


    return(
        <Stack mt={10} position='relative' p={4} boxShadow={2} >
          
        {icon}
           <Typography variant="h2" color="initial">
           {name}
           </Typography>
           
           <Typography variant="h6" color="initial">
            {title}
           </Typography>

        </Stack>
    )
}