
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddCardIcon from '@mui/icons-material/AddCard';
import { Mybox, Myboxflex, Myserviceboxstylewrap, Myservicestext, Myservicestexth4, Myworimg, Myworklist } from './servestyle'
import { primarymain } from '../../coustomstylevaluable';

const Services = () => {
  return (
    <div style={{minHeight:'100vh'}} >
    <Mybox className='container-fluid'>
    <Textheading
    title={'my services'}
    p={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est animi praesentium vel ' }
       
     />
     <Grid container gap={5} justifyContent='center' alignItems='center'  >     
        {
            [1,2,3,4,5,6,7,8].map((item)=>(
                
                <Grid item  xs={12} md={4} sm={5} lg={3}>
                <Servicebox/>
                </Grid>
                ))
            }
        
            </Grid>  
            </Mybox>
        
            <Mybox  className='container-fluid'>
            <Textheading
            title={'work protfolio'}
            p={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est animi praesentium veladipisicing elit. Enim est animi praesentium vel ' }/>
          <WorkList/>
          <Grid container gap={5} justifyContent='center' alignItems='center'  >     
          {
              [1,2,3,4,5,6,7,8].map((item)=>(
                  
                  <Grid item  xs={12} md={4} sm={5} lg={3}>
                     <Myworimg>
                      <img src="img/bg1.jpg" alt="" />
                     </Myworimg>
                  </Grid>
                
                  ))
              }
          
              </Grid>  
            </Mybox>

            </div>
            )
        }
        
export default Services





function Servicebox() {
    return(
        
        <Myserviceboxstylewrap>
        <Myboxflex>
          <AddCardIcon color='primary' fontSize='large' />
         
          <Typography variant='h5' color="primary.dark">web design</Typography>

         </Myboxflex>
       
         <Typography variant="body2" color="secondary.dark">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est animi praesentium vel 
         </Typography>
          
          <Typography variant="overline" color="primary">read more</Typography>


          </Myserviceboxstylewrap>
         
    
      
        

          )
}



function WorkList() {
    
    const data = [
        {
            name:"all"
        },
        {
            name:"web design"
        },
        {
            name:"app develop"
        },
        {
            name:"marketing"
        },
        {
            name:"branding"
        },
    ]

    return(

         <Myworklist>
                {
                    data.map((item, index)=>(
                        
                    <Typography  fontWeight='bolder' variant='body1' color="primary.dark">{item.name}</Typography>



                    ))
                }

         </Myworklist>

    )
}



function Textheading({title, p}) {
    return(
        <Myservicestext>
        <h1>{title}</h1>
        <Typography variant="caption" color="secoundry.dark">
        {p}
        </Typography>
       


      </Myservicestext>
    )
}