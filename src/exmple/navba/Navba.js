import { Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close';
import { theme } from '../..'
import MenuIcon from '@mui/icons-material/Menu';
import { MyNavbarLinkDesktop, MyNavbarLinkMobile, MyNavbarLinkMobilewrap, MyNavbarwrap } from './navbastyle'
import { Box } from '@mui/system';
import { mainshadow8 } from '../../coustomstylevaluable';
import {motion} from 'framer-motion'
import { NavLink ,Link} from 'react-router-dom';
const Navba = () => {

 const [Navbardeop, setNavbardeop] = useState(false)
 const [Navbarfixed, setNavbarfixed] = useState(false)

 let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    if(scrollPos <= 5){
        setNavbarfixed(true)
    }
    else if(scrollPos >= 15){
        setNavbarfixed(false)
    }

}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

  return (

    <MyNavbarwrap className='container-fluid' >

     <Grid container  style={{position: Navbarfixed ? 'static' : 'fixed', left:'0', top:'0', padding:Navbarfixed ? '0' : '8px' , zIndex:'100', boxShadow: Navbarfixed ? 'none' : mainshadow8 , background:'white'  }}   alignItems='center'  justifyContent='space-between' >
        <Grid item xs={6} md={1.5}>
        
        <Box sx={{display:{xs:'none', md:'flex'} }} >
        <img src="img/logo.svg"  alt="" />
        </Box> 
        <Box sx={{display:{xs:'flex', md:'none'} }} >
        <span onClick={()=>setNavbardeop(true)} ><MenuIcon fontSize='large' /></span>
        </Box> 
        </Grid>
        <Grid item xs={0} md={6}>
            <MyNavbarLinkDesktop>
              <NavLinksItem/>

            </MyNavbarLinkDesktop>
     {
        Navbardeop &&    <MyNavbarLinkMobilewrap
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,type:'spring'}}
        >
        <Box  onClick={()=>setNavbardeop(false)} sx={{ position:'absolute', right:10, top:10 }} ><CloseIcon fontSize='large'/></Box>
       <MyNavbarLinkMobile>
       <NavLinksItem setNavbardeop={setNavbardeop} />
       </MyNavbarLinkMobile>
       </MyNavbarLinkMobilewrap>
     }
         
        </Grid>
        <Grid item container xs={6} justifyContent='end' md={2}>
        <Link to='contact' >
        <Button variant="contained"
        
        color="primary">
        geta quate
        </Button>
        </Link>

        </Grid>
     </Grid>
           
       
    
    </MyNavbarwrap>
  )
}

export default Navba


function NavLinksItem({setNavbardeop}) {
    

    const hoverobj = {

        cursor:'pointer',
        transition:'all 0.2s linear',
    }

    const navlinkdata = [
        {
            name:'home',
            link:'/'
        },
        {
            name:'about',
            link:"about"
        },
        {
            name:'services',
            link:'services'
        },
        {
            name:'blog',
            link:"blog"
        },
        {
            name:'my story',
            link:"story"
        },
        {
            name:'contact us',
            link:"contact"
        },
    ]
    let activeStyle = {
        borderBottom: '3px solid blue',
      
    }
    
    

    return(
        <>
 {
     navlinkdata.map((item, index)=>(
        <Typography fontWeight={900}  key={index}  onClick={()=>setNavbardeop(false)}   
        variant="subtitle1" color="initial"
        
     
        >
        <NavLink 
    
        
        to={item.link}
        className='atag'
      
       style={ ({ isActive }) =>
       isActive ? activeStyle : undefined
               }
      
      >
    

        {item.name}
     
      
      
      
    </NavLink>
    </Typography>
     ))
 }
        </>
    )

}