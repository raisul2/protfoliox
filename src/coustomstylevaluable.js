import {styled, ThemeProvider, experimental_sx as sx} from '@mui/system'

export const mainshadow16 =   '0px 6px 30px rgba(0, 0, 0, 0.12)'
export const mainshadow8 =   '0px 3px 14px rgba(0, 0, 0, 0.12)'
export const mainshadow4 =   '0px 4px 5px rgba(0, 0, 0, 0.12)'
export const mainshadow6 =   '0px 1px 18px rgba(0, 0, 0, 0.12)'
export const primarymain =  '#F50057'
export const primarydark =  '#000000'
export const secondarymain =  '#CFD8DC'
export const secondarydark =  '#464646'
export const secondarylight =  '#EEEEEE'



export  const MyMaincontainer =  styled('div')(
    
    sx({
    backgroundColor: primarymain,
    maxWidth: '90%',
    m: 'auto',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center'
    
    })


)
export  const MyMainFullcontainer =  styled('div')(
    sx({
    backgroundColor: primarymain,
    maxWidth: '100%',
    })


)

