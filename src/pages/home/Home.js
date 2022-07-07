import React from 'react'
import './home.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Home = () => {
  return (
    <div className='container main-home '>
    <HomeImg/>
    <HomeImg2/>
    <HomeImg3/>
           <div className="container-fluid home-wrap">
                 <HomeText/>
               
           </div>
    </div>
  )
}

export default Home





function HomeText() {
    
    return(
        <div className="home-text">
             <h1>i am provide <br />
             design solution
             </h1>
           
        <HomeIcon/>
        </div>
    )
}

function HomeImg() {
    
    return(
        
        <svg id='homeimg' width="684" height="800" viewBox="0 0 684 800" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="284" cy="400" r="400" fill="black" fill-opacity="0.3"/>

</svg>
      
    )

}
function HomeImg2() {
    
    return(
        
        <svg id='homeimg2' width="306" height="269" viewBox="0 0 306 269" fill="none" xmlns="http://www.w3.org/2000/svg">
   
        <ellipse cx="212.5" cy="79" rx="212.5" ry="190" fill="black" fill-opacity="0.3"/>

        </svg>
        
      
    )

}



function HomeIcon() {
    

    const icon = [
        {
            name:<FacebookIcon/>
        },
        {
            name:<InstagramIcon/>
        },
        {
            name:<LinkedInIcon/>
        },
        {
            name:<GitHubIcon/>
        },
    ]

    return(
        <div className="home-icon">
        {
            icon.map((item, index)=>(
                <span key={index}>{item.name}</span>
            ))
        }
        
        </div>
    )
}

function HomeImg3(params) {
    
    return(
         <div className="homeimg3">
           <img src="img/profile1.png" alt="" />
        
        </div>
    )
}