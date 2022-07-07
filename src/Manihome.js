import React from 'react'
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

 
const Manihome = () => {
  return (
    <div>
    
    <Home/>
    <Service/>
    <About/>
    <Client/>
    <Workflow/>
    <Protfolio/>
    <Newslatter/>
    <Tem/>
    <Plan/>
    <Testomonial/>
    <Blog/>
    <Contact/>

    </div>
  )
}

export default Manihome