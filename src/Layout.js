import React from 'react'
import Footer from './exmple/component/Footer'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import {BrowserRouter as Router , Routes, Route, Outlet} from 'react-router-dom'
import Navba from './exmple/navba/Navba'
const Layout = () => {
  return (
    <div>

   <Navba/>
   
     <Outlet/>

    <Footer/>
    <Box bgcolor='darkblue'   width={1} >
        <Typography variant="h4" py={2} textAlign='center' color="white">
        @copyright rasiul hasan redoy
        </Typography>
    </Box>
    
    </div>
  )
}

export default Layout