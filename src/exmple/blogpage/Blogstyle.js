import {styled , experimental_sx as sx} from '@mui/system'
import { theme } from '../..'
import { mainshadow16, mainshadow4, mainshadow6, mainshadow8, secondarymain } from '../../coustomstylevaluable'
import {motion} from 'framer-motion'
export  const MyBlogSearchwrap =  styled('div')(
    
    sx({
       
     background:'white',
     boxShadow:2,
     borderRadius:1,
     display:'flex',
     alignItems:'center',
     justifyContent:'space-between',
    height:'auto',
    overflow:'hidden',
    width:1,
    pl:1
 

    
    })

)