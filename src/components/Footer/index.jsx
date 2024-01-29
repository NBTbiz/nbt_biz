import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
// import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/'
    },
    {
      title: 'Privacy Policy',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Content Creation',
      href: '/service'
    },
    {
      title: 'Social Media Marketing',
      href: '/service'
    },
    {
      title: 'Digital Marketing',
      href: '/service'
    },
    {
      title: 'Influencer Marketing',
      href: '/service'
    },
    {
      title: 'Web Development',
      href: '/service'
    },

  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/NBT_logo.svg?updatedAt=1702460128837'
                  logoAlt='Logo'
                  text ='Welcome To Nbt Business Solutions, Where Innovation Meets Expertise. We Specialize In Delivering Comprehensive Solutions Tailored To Your Needs, Ensuring Seamless Experiences And Sustainable Success. Explore With Us As We Redefine Possibilities.'
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu}   menuHeading='Services'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='Subscribe' 
                  subtitle="Unlock VIP tech insights! Subscribe for exclusive access to cutting-edge trends, insider tips, and special offers. Stay ahead – join us now!"
                  placeholder='example@gmail.com'
                />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2022 NBT.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
