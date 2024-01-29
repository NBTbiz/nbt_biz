import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
// import PageHeading from '../PageHeading'
import Div from '../Div'
import Spacing from '../Spacing'
// import SocialWidget from '../Widget/SocialWidget'
import SectionHeading from '../SectionHeading'
import { Icon } from '@iconify/react'

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
      paragraph : 'Dynamic, Thoughtful And Slightly Addicted To Creating New Business Opportunities, Kevin Is Ever Ready To Roll Up His Sleeves And Get To Work. An Established Business Owner, Kevin Is Nbt’S Jack Of All Trades And Master Of Everything.  ',
      memberSocial: {
        Instagram: 'https://www.instagram.com/kevin0o7/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/kevin-alexander-7370b1250/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member2.webp?updatedAt=1701760654994',
      memberName: 'Ammu Nair',
      memberDesignation: 'CMO',
      paragraph : 'Model Turned Entrepreneur, Ammu’S Vast Experience In The Creative Industry Shines In Our Marketing, Events And Creative Content Services. Always On The Hunt For Her Next Sunset Spot, You’Ll Find Her Working On A New Creative Project Or Striking A Pose!.',
      memberSocial: {
        Instagram: 'https://www.instagram.com/ammunair_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/ammu-nair-244734191/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member1.webp?updatedAt=1701760655542',
      memberName: 'Adwaith Manoj',
      memberDesignation: 'CONTENT DIRECTOR',
      paragraph : 'Our Very Own Creative Powerhouse, Adwaith Adds A Whimsical Twist To His Stories, Content And Projects. When He Is Not Editing Videos, He Is Watching More Videos To Edit.',
      memberSocial: {
        Instagram: 'https://www.instagram.com/ad.muni/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/adwaith-manoj-4a85b4204/',
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
          title="Awesome Team <br/>Members"
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
              {/* <SocialWidget/> */}
              <Div className="cs-social_btns cs-style1">
              <a href={item.memberSocial.linkedin} className="cs-center" target="_blank" rel="noopener noreferrer">
                <Icon icon="fa6-brands:linkedin-in" />
              </a>
              <a href={item.memberSocial.Instagram} className="cs-center" target="_blank" rel="noopener noreferrer">
                <Icon icon="fa6-brands:instagram" />              
              </a>
            </Div>
            </Div>
          </Div>
        </Div>
          <br /><br /><br />
      </Div>
        ))}
      
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title="Let’s Discuss And Make <br />Something <i>Cool</i> Together"
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/cta_bg.jpeg?updatedAt=1701762150722'
        />
      </Div>
    </>
  )
}
