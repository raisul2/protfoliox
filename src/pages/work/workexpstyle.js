import {styled , experimental_sx as sx} from '@mui/system'
import { mainshadow8, secondarymain } from '../../coustomstylevaluable'
export  const Myworkcomponentwrap =  styled('div')(
    
    sx({
       display:'flex',
       alignItems:'start',
       flexDirection:'column',
       justifyContent:'center',
       gap:1,
    
    })

)

export  const Myhappycomponentwrap =  styled('div')(
    
    sx({
       
         background:  secondarymain,
          minHeight:'40vh',
          borderRadius:2,
          boxShadow: mainshadow8,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexDirection:'column',
          p:5
    
    })


)

export  const Myproject =  styled('div')(
    
    sx({
       
         background:  secondarymain,
          minHeight:'40vh',
          borderRadius:2,
          boxShadow: mainshadow8,
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexDirection:'column',
          p:5,
          width:1,
          
    
    })


)

