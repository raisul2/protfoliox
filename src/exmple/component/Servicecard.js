import { Box, Typography ,Stack} from '@mui/material'
import React from 'react'
import { MyServiceCardwrap } from '../navba/navbastyle'

const Servicecard = ({bg,title,icon}) => {
  return (
    <MyServiceCardwrap>
       <Stack alignItems='center' justifyContent='center' borderRadius={100} width={{xs:50, sm:80}}
       height={{xs:50 ,sm:80}} bgcolor={bg}
       ><span>{icon}</span></Stack>
       <Typography textAlign='center' fontWeight={900}  variant="h3"  color="initial">{title}</Typography>
       <Typography variant="h6" textAlign='center' color="initial">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, in! Delectus cupiditate neque voluptate aut iste ex maxime, necessitatibus,?</Typography>

    </MyServiceCardwrap>
  )
}

export default Servicecard