
export const homeanimattion = {
   hidden:{
     
    x:-200,
    opacity:0
     
    },

    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            type:'spring',
            stiffness: 100 ,
            min: 0,
            max: 100,
            bounceDamping: 10
        }
         
    },

  
}
export const homeanimattionleft = {
   hidden:{
     
    x:200,
    opacity:0
     
    },

    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            type:'spring',
            stiffness: 100 ,
            min: 0,
            max: 100,
            bounceDamping: 10
        }
         
    },

  
}