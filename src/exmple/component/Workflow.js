import { Box } from '@mui/system'
import React from 'react'
import { MyWorkflowBox, MyWorkflowBoxtext } from '../navba/navbastyle'
import { MainTextTitle } from '../services/Service'
import Circle1 from '../svganimation/Circle1'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const Workflow = () => {
    const color = [
        {
          name:'#FF9800',
          title:'idea & snalysis gathering',
          icon:<ViewQuiltIcon fontSize='large' color='secondary' />
          
        },
        
        {
          name:'#F50057',
          title:'desiging & developing'
        },
        {
          name:'#6901BB',
          title:'testing & lunching'
        },
      ]
  return (
    <Box py={2} className='container-fluid'>
    
          <Grid container alignItems='end'  >
           <Grid  item xs={12} md={7}>
           <MainTextTitle title={'feature'}
           subtitle={'our work flow'}
           align={'start'}
           />
            {
                color.map((item)=>(
                    <Workflowbox icon={item.icon}  color={item.name} title={item.title} />
                ))
            }   
           </Grid>
           <Grid item xs={12} md={5}>
           <img src={  process.env.PUBLIC_URL  + "img/workflow.svg"} alt="" />
           </Grid>
          </Grid>

    </Box>
  )
}

export default Workflow




function Workflowbox({color,title,icon}) {
    
      return(
        <MyWorkflowBox >
           <Circle1 color={color} icon={icon} />
            <MyWorkflowBoxtext>
              <Typography 
              fontWeight='bold'
              variant="h3" color="initial">
              {title}
              </Typography>

              <Typography variant="h4" color="initial">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, totam officiis voluptatibus incidunt dignissimos aliquid deleniti. Quibusdam 
              </Typography>
            
            </MyWorkflowBoxtext>

        </MyWorkflowBox>
      )

}