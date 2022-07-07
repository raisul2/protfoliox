import {styled , experimental_sx as sx} from '@mui/system'
import { mainshadow8, secondarymain } from '../../coustomstylevaluable'
export  const Myservicestext =  styled('div')(
    
    sx({
    textAlign:'center',
    width:{xs:1, md:1/2},
    py: 5  
    
    })


)
export  const Myserviceboxstylewrap =  styled('div')(
    
    sx({
  
         minHeight:'30vh',
         borderRadius:2,
         boxShadow: mainshadow8,
         display:'flex',
          alignItems:'start',
          justifyContent:'center',
          gap:1,
          flexDirection:'column',
          p:5
             
    })


)
export  const Myboxflex =  styled('div')(
    
    sx({
  
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:2,
         
      


    })


)
export  const Mybox =  styled('div')(
    
    sx({
  
        display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'


    })


)
export  const Myworklist =  styled('div')(
    
    sx({
  
        display:'flex', justifyContent:'center', flexDirection:'row', alignItems:'center',
        gap:{xs:1, md:3},
        flexWrap:'wrap',
        pb:5


    })


)
export  const Myworimg =  styled('div')(
    
    sx({
  
   


    })


)