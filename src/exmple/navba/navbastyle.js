import {styled , experimental_sx as sx} from '@mui/system'
import { theme } from '../..'
import { mainshadow16, mainshadow4, mainshadow6, mainshadow8, secondarymain } from '../../coustomstylevaluable'
import {motion} from 'framer-motion'
export  const MyNavbarwrap =  styled('div')(
    
    sx({
       
         
    
    })

)
export  const MyNavbarLinkDesktop =  styled('div')(
    
    sx({
       
         display:{md:'flex', xs:'none'},
         alignItems:'center',
         justifyContent:'space-between'
         
    })

)
export  const MyNavbarLinkMobilewrap =  styled(motion.div)(
    
    sx({
       
         
        display:{md:'none', xs:'flex'},
         alignItems:'center',
         justifyContent:'center',
        
         position:'absolute',
         zIndex:'1',
         background:'white',
         width:1,
         left:'0',
         top:'0',
         height:'100vh',
      
       
         
    })

)

export  const MyNavbarLinkMobile =  styled('div')(
    
    sx({
       
         display:{md:'none', xs:'flex'},
         alignItems:'center',
         justifyContent:'center',
         gap:3,
         flexDirection:'column',
       
        
       
       
         
    })

)
export  const MyMainTextTitle =  styled('div')(
    
    sx({
       
        
    })

)

export  const MyServiceCardwrap =  styled('div')(
    
    sx({
       
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'column',
         boxShadow: mainshadow6,
         
         p:3,
         gap:1,
         '&:hover':{
             boxShadow: mainshadow16,

         }
    })

)


export  const MyServicecardroundsafe =  styled('div')(
    
    sx({
       
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'column',
    })

)
export  const MyClientbgblue =  styled('div')(
    
    sx({
       background:'blue',
       height:'30vh',
       
       width:1,
       zIndex:0,
       top:100,
       position:'absolute'
        
    })

)


export  const MyWorkflowBox =  styled('div')(
    
    sx({
        
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:2
        
    })

)
export  const MyWorkflowBoxtext =  styled('div')(
    
    sx({
       
        display:'flex',
        alignItems:'start',
        justifyContent:'center',
        flexDirection:'column'
    })

)



export  const MyProtfolioLink =  styled('div')(
    
    sx({

        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        gap:1,
        py:5
        
    })

)
export  const MyNewslatterwrap =  styled('div')(
    
    sx({

      minHeight:'30vh',
      background:'blue',
      py:2
    
       
     
    })

)
export  const MyNewslatterTextfild =  styled('div')(
    
    sx({

    
      background:'white',
      width:{md:1/2, xs:1},
      p:.5,
      borderRadius:1,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between'

      
       
     
    })

)

export  const MyTemcard =  styled('div')(
    
    sx({

    
height:'50vh',
minWidth:'95%',
       p:2 ,
       boxShadow:5,
       borderRadius:2,
       my:5,
       mx:1,
       position:'relative'
       
      
       
     
    })

)
export  const MyTemcardtow =  styled('div')(
    
    sx({

    
       height:'10vh',
       p:1 ,
       boxShadow:5,
       borderRadius:2,
      position:'absolute',
      bottom:'-10%',
      minWidth:'90%',
      left:'2%',
      right:'2%',
      
      background:'white',
      display:'flex',
     alignItems:'center',
     justifyContent:'space-between'
       
      
       
     
    })

)
export  const Myiconbox =  styled('div')(
    
    sx({

     p:.6,
     borderRadius:100,
     boxShadow:2,
     background:'lightblue',
     display:'flex',
     alignItems:'center',
     justifyContent:'center'
      
       
     
    })

)

export  const MyPlanbox =  styled('div')(
    
    sx({
    p:3,
     minHeight:'70vh',
     boxShadow:3,
     borderRadius:1,
      display:'flex',
      alignItems:'center',
       justifyContent:'space-between',
       gap:1,
       flexDirection:'column'
       
     
    })

)

export  const MyTestomonialbox =  styled('div')(
    
    sx({
    p:3,
     height:'40vh',
     boxShadow:3,

     borderRadius:1,
    
       mx:{xs:1.5, md:'10%'},
       my:3,
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-between',
       
       
       
     
    })

)

export  const Myblogbox =  styled('div')(
    
    sx({
    p:3,
     minHeight:'40vh',
     boxShadow:3,
     gap:1,
     borderRadius:1,
    
       display:'flex',
       flexDirection:'column',
       justifyContent:'space-between',
       
       
       
     
    })

)


export const Myblogicon = styled('div')(
    sx({
        display:'flex',
        alignItems:'center',
        gap:1,
        justifyContent:'center'
    })
)
export const MyProtfolioHover = styled(motion.div)(
    sx({
       
        position:'absolute',
        width:1,
        height:1,
        left:'0',
        bottom:'0',
        background:"rgba(52, 38, 248, 0.65)",
      p:6,
    
      
    })
)

export const MyProtfolioHoverwrap = styled(motion.div)(
    sx({
       
    
    width:'100px',
    height:'100px',
    background:'red'  
    })
)

