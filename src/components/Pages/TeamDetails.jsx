import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
// import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
import SocialWidget from '../Widget/SocialWidget'
import SectionHeading from '../SectionHeading'

export default function TeamDetails() {
  pageTitle('Team Member');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const teamData = [
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member3.webp?updatedAt=1701760654635',
      memberName: 'Kevin Alexander',
      memberDesignation: 'CEO',
      paragraph : 'Dynamic, thoughtful and slightly addicted to creating new business opportunities, Kevin is ever ready to roll up his sleeves and get to work. An established business owner, Kevin is NBT’s jack of all trades and master of everything.',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member2.webp?updatedAt=1701760654994',
      memberName: 'Ammu Nair',
      memberDesignation: 'CMO',
      paragraph : 'Model turned entrepreneur, Ammu’s vast experience in the creative industry shines in our marketing, events and creative content services. Always on the hunt for her next sunset spot, you’ll find her working on a new creative project or striking a pose!.',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member1.webp?updatedAt=1701760655542',
      memberName: 'Adwaith Manoj',
      memberDesignation: 'CONTENT DIRECTOR',
      paragraph : 'Our very own creative powerhouse, Adwaith adds a whimsical twist to his stories, content and projects. When he is not editing videos, he is watching more videos to edit.',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
  ];
  return (
    <>
      <Spacing lg='150' md='80'/>
      <Div className="container">
      <SectionHeading 
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <br /><br />
        </Div>
      {teamData.map((item, index) => (
      <Div key={index} className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src={item.memberImage} alt="Member" className="w-85" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45'/>
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">{item.memberName}</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">{item.memberDesignation}</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">{item.paragraph}</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget/>
            </Div>
          </Div>
        </Div>
          <br /><br /><br />
      </Div>
        ))}
      
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Let’s discuss and make <br />something <i>cool</i> together"
          btnText='Apply For Meeting' 
          btnLink='/nbt_biz/contact' 
          bgSrc='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/cta_bg.jpeg?updatedAt=1701762150722'
        />
      </Div>
    </>
  )
}
