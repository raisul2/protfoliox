import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Home from './exmple/home/Home'
import About from './exmple/component/About'
import Skill from './pages/skill/Skill'
import Services from './pages/services/Services'
import Workexp from './pages/work/Workexp'
import Service from './exmple/services/Service'
import Client from './exmple/component/Client'
import Workflow from './exmple/component/Workflow'
import Protfolio from './exmple/component/Protfolio'
import Newslatter from './exmple/component/Newslatter'
import Tem from './exmple/component/Tem'
import "swiper/css/bundle";
import Plan from './exmple/component/Plan'
import Testomonial from './exmple/component/Testomonial'
import Blog from './exmple/component/Blog'
import Contact from './exmple/component/Contact'
import Footer from './exmple/component/Footer'
import { Box, Stack } from '@mui/material'
import Manihome from './Manihome'
import Layout from './Layout'
import {HashRouter as Router , Routes, Route} from 'react-router-dom'
import Servicepage from './exmple/servicepage/Servicepage'
import Blogmain from './exmple/blogpage/Blogmain'
import Aboutmain from './exmple/aboutpage/Aboutmain'
import Contactmain from './exmple/Contact/Contactmain'
import { useState } from 'react'
import GridLoader from 'react-spinners/GridLoader'
import Mystory from './exmple/mystoty/Mystory'
const App = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  setTimeout(()=>(
  setLoading(false)
  ),4000)
  }, [])
  

  return (
  <Box>
  {
     loading ? (
      <Stack height='100vh' alignItems='center' justifyContent='center' >
      <GridLoader color='blue' loading={loading} size={20} />
      </Stack>
      
      )

    :
  (<Router>
  <Routes>
 
    
    <Route path='/' element={   <Layout/> } > 
    
         <Route index element={<Manihome/>} />
         <Route path='blog' element={<Blogmain/>} />
         <Route path='services' element={<Servicepage/>} />
         <Route path='about' element={<Aboutmain/>} />
         <Route path='contact' element={<Contactmain/>} />
         <Route path='story' element={<Mystory/>} />
         </Route>
         </Routes>
         </Router>)
  }
         </Box>



  )
}

export default App
