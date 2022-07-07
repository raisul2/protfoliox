import React from 'react'
import { motion } from 'framer-motion'
const Circle1 = ({color}) => {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="65" cy="65" r="46" stroke={color} stroke-width="8"/>
    <motion.circle 
      initial={{opacity:0, r:'50'}}
      animate={{opacity:1, r:'64'}}
      transition={{ duration:1 , type:'spring',repeat:'Infinity',repeatType: "reverse" }}
    cx="65" cy="65" r="64" stroke-width='2'  stroke={color} />
    <path d="M63.3828 35V44.5212H66.6168V35H63.3825H63.3828ZM50.1773 37.8612L47.5277 39.7164L52.9879 47.5137L55.636 45.6585L50.1773 37.8612ZM79.8216 37.8612L74.3631 45.6586L77.0116 47.5138L82.4717 39.7164L79.8221 37.8612H79.8216ZM64.9991 47.1262C57.0878 47.1262 50.6745 51.9303 50.6745 57.8575L58.8131 82.5048H71.1866L79.3245 57.8575C79.3245 51.9305 72.9116 47.1262 64.9999 47.1262H64.9991ZM39.2729 49.9837L38.168 53.0244L47.1104 56.2801L48.2195 53.2408L39.2727 49.9837H39.2729ZM90.726 49.9837L81.7792 53.2411L82.8845 56.2807L91.8313 53.0244L90.726 49.9837ZM47.7875 63.8841L38.5925 66.3504L39.4268 69.4719L48.6218 67.0092L47.7876 63.8841H47.7875ZM82.2115 63.8841L81.3778 67.0091L90.5728 69.4715L91.4065 66.3499L82.2115 63.884V63.8841ZM58.6327 84.3016V88.5859H71.367V84.3022H58.6327L58.6327 84.3016ZM58.6327 90.7157V95H71.367V90.7164H58.6327L58.6327 90.7157Z" fill={color}/>
    </svg> 
    
  )
}

export default Circle1