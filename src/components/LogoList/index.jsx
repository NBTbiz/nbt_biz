import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos_1 = [
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_1.svg?updatedAt=1701759015338', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_2.svg?updatedAt=1701759015049', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_3.svg?updatedAt=1701862225563', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_4.svg?updatedAt=1701759015474', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_5.svg?updatedAt=1701759014447', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_6.svg?updatedAt=1701951864293', 
      alt:'client'
    },
  ]

    const partnerLogos_2 = [
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_7.svg?updatedAt=1701861972265', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_8.svg?updatedAt=1701759017891', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_9.svg?updatedAt=1701759017968', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_10.svg?updatedAt=1701759018089', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_11.svg?updatedAt=1701759017987', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_12.svg?updatedAt=1701759018094', 
      alt:'client'
    },
  ]

  const partnerLogos_3 = [
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_13.svg?updatedAt=1701948797640', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_14.svg?updatedAt=1701759019990', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_15.svg?updatedAt=1701759020740', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_16.svg?updatedAt=1701759021730', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_17.svg?updatedAt=1701759021542', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_18.svg?updatedAt=1701759022783', 
      alt:'client'
    },
  ]

  const partnerLogos_4 = [
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_19.svg?updatedAt=1701951864297', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_20.svg?updatedAt=1701759023431', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_21.svg?updatedAt=1701759023164', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_22.svg?updatedAt=1701951864414', 
      alt:'client'
    },
    {
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/client_23.svg?updatedAt=1701759023337', 
      alt:'client'
    },
  ]
  return (
    <>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos_1.map((partnerLogo, index)=>
         <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}    
    </Div>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos_2.map((partnerLogo, index)=>
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}
    </Div>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos_3.map((partnerLogo, index)=>
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}
    </Div>
    <Div className="cs-partner_logo_wrap">
      {partnerLogos_4.map((partnerLogo, index)=>
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} loading="lazy" />
        </div>)}
    </Div>
    </>
    
  )
}
