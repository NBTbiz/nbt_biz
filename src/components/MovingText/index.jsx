// import React from 'react'
// import Div from '../Div'
// import './movingtext.scss'

// export default function MovingText({text}) {
//   return (
//     <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
//       <Div className="cs-moving_text_in">
//         <Div className="cs-moving_text">{text}</Div>
//         <Div className="cs-moving_text">{text}</Div>
//       </Div>
//     </Div>
//   )
// }


import React from 'react'
import Div from '../Div'
import './movingtext.scss'

export default function MovingText() {
  const partnerLogos_1 = [

    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_24.svg?updatedAt=1705927709729', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_7.svg?updatedAt=1706004516718', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_3.svg?updatedAt=1706004880404', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_9.svg?updatedAt=1705926612641', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_16.svg?updatedAt=1705996052708', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_20.svg?updatedAt=1705995710099', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_14.svg?updatedAt=1705996275632', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_15.svg?updatedAt=1705995359014', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_17.svg?updatedAt=1706004731653  ', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_18.svg?updatedAt=1705994289076', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_11.svg?updatedAt=1705994774963', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_12.svg?updatedAt=1706001700364', 
      alt:'client'
    },
    
  ]
  
  const partnerLogos_2 = [
    
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_13.svg?updatedAt=1705928478111', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_1.svg?updatedAt=1705927955131', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_2.svg?updatedAt=1706003378411', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_4.svg?updatedAt=1706003820901', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_5.svg?updatedAt=1706003565627', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_6.svg?updatedAt=1701951864293', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_19.svg?updatedAt=1701951864297', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_21.svg?updatedAt=1706002493972', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_22.svg?updatedAt=1701951864414', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_23.svg?updatedAt=1706002666580', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_8.svg?updatedAt=1705995076234', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_10.svg?updatedAt=1706002319883', 
      alt:'client'
    },
  ]

  return (
    <Div className="div_box">
    <Div className="cs-moving_text_wrap cs-bold cs-primary_font">
      <Div className="cs-moving_text_in">

      <Div className="cs-moving_text">
        {partnerLogos_1.map((partnerLogo, index)=>
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}
      </Div>  

      <Div className="cs-moving_text">
        {partnerLogos_2.map((partnerLogo, index)=>
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}
      </Div>

      </Div>
    </Div>

   
  </Div>

  )
}
