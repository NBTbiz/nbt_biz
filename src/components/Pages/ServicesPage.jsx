import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'
import IconBox from '../IconBox'
import VideoModal from '../VideoModal'
import PostStyle2 from '../Post/PostStyle2.jsx'
import Whatsapp from '../Whatsapp/index.jsx'
import Accordion from '../Accordion/index.jsx'

export default function ServicesPage() {
  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    // instagram reels

    

    const optimised_UGC_Videos = `
  <iframe
    src="https://www.instagram.com/reel/CxrwrIpP1Wt/embed/"
    frameborder="0"
    allowfullscreen
    scrolling="no"
    width="50%"
    height="380"
  ></iframe>
`;

const high_Production = `
  <iframe
    src="https://www.instagram.com/reel/CzyUs63yq0H/embed/?autoplay=1"
    frameborder="0"
    allowfullscreen
    scrolling="no"
    width="50%"
    height="500"
  ></iframe>
`;

  const postData = [
    {
      thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_1.webp?updatedAt=1701767516295',
      title:'Develop Tailor Made Sales Funnel',
      subtitle:"Looking To Boost Your Sales And Maximise Revenue? Our Team At Nbt Biz Specialises In Creating Highly Effective Sales Funnels Tailored To   Your Business. With Attention-Grabbing Landing Pages, Persuasive Lead Magnets, And Compelling Calls-To-Action, We Guide Potential Customers Through The Buying Process Seamlessly. Through Optimised Email Campaigns And Follow-Up Sequences, We Nurture Leads And Drive Conversions. We Continuously Analyse The Performance Of Your Sales Funnel, Making Data-Driven Adjustments To Ensure Maximum Effectiveness. Don'T Miss Out On Potential Customers. Let Us Build A Powerful Sales Funnel For Your Business. Contact Nbt Biz Today And Start Increasing Your Sales..",
    },
    {
      thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_2.webp?updatedAt=1701767516401',
      title:'Optimised Content',
      subtitle:"At Nbt Biz, We Go Beyond Traditional Digital Marketing Approaches. We Specialize In Creating Highly Targeted Content Tailored To Each Stage Of The Customer'S Journey Through Your Sales Funnel. From Awareness To Consideration And Decision-Making, Our Strategic Content Engages Prospects At Every Step, Nurturing Them Towards Conversion. Our Team Of Experts Crafts Compelling Blog Posts, Informative Guides, And Persuasive Case Studies That Address Customer Pain Points And Showcase Your Solutions. By Combining Our Seo Expertise With A Deep Understanding Of Your Audience, We Ensure That Your Content Is Visible, Valuable, And Drives Results. Take Your Sales Funnel To The Next Level With Nbt Biz.",
    },
    {
      thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_3.webp?updatedAt=1701767516528',
      title:'Spend Less Reach More!',
      subtitle:'Our Primary Focus Is To Help Businesses Optimize Their Marketing Efforts And Achieve Maximum Impact While Minimizing Costs. With Our Strategic Approach, We Develop Cost-Effective Campaigns That Reach A Broader Audience. From Targeted Advertising To Optimized Content, We Ensure Your Message Resonates With Your Target Market. By Leveraging Our Seo Expertise, We Drive Organic Traffic And Improve Your Online Visibility. Our Team Of Experts Knows How To Maximize Your Marketing Budget And Deliver Measurable Results. Experience The Power Of Cost-Efficient Marketing With Nbt Biz.',
    }
  ]

  
  return (
    <>
      {/* Whatsapp Icon */}
      <Whatsapp/>
      {/* Whatsapp Icon end */}

      <PageHeading 
        title='Services'
        bgSrc='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/contact_hero_bg.jpeg?updatedAt=1701762546109'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Services We Can Help You With' 
                subtitle='What Can We Do'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 '>
                  <Card
                    title='Influencer Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_2.webp?updatedAt=1705301481319"
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Web Development'
                    src='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_5.webp?updatedAt=1705301481289'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Content Creation'
                    src='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_1.webp?updatedAt=1705301481137'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Digital Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_4.webp?updatedAt=1705301481259"
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Social Media Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_3.webp?updatedAt=1705301481185"
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* content creation */} 
      <div id="content-creation-section"></div>
      <Spacing lg='150' md='80'/>
      <Div className="container" >
          <VideoModal
          videoSrc="https://www.youtube.com/watch?v=05vNwDBkmMY"
        />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Crafting Your Story, Connecting Your Audience' 
              subtitle='Content Creation' 
            >
              <Spacing lg='40' md='20'/>
              <p>We At Nbt Biz, Understand That Compelling And Engaging Content Is The Backbone Of Any Successful Marketing Campaign. Our Team Of Creative Professionals Specialises In Crafting Content That Resonates With Your Target Audience, Helping You To Effectively Communicate Your Brand Message And Achieve Your Marketing Goals.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Expertise and Experience</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Collaborative Approach</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Quality and Attention to Detail</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Customized Solutions</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Timely Delivery</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

           {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Optimised UGC Videos:"
              subtitle="Visualize Impactful Brand Stories."
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Harness The Power Of User-Generated Content (Ugc) With Our Expertly Crafted Videos.
               Our Team Collaborates With You To Curate And Produce Ugc-Based Videos That Authentically Showcase Your Products Or Services.
                From Concept To Post-Production, We Ensure Your Ugc Videos Leave A Lasting Impression On Your Audience.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            {/* Instagram Reel */}
            <div className="w-90 cs-radius_15" dangerouslySetInnerHTML={{ __html: optimised_UGC_Videos }} />
            <Spacing lg="25" md="25" />
          </Div>
            <Div className="col-lg-5">
             <VideoModal 
             className="w-100 cs-radius_15"
              videoSrc="https://www.youtube.com/watch?v=05vNwDBkmMY"
              />
            <Spacing lg="25" md="25" />
          </Div>

          <Div className="col-lg-5 offset-xl-2">
            <SectionHeading
              title="High Production Ads:"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Make A Memorable Impact With Our High-Production Ads. Our Experienced Videographers, Directors,
               And Editors Create Visually Stunning Advertisements That Captivate Viewers. By Combining Innovative
                Storytelling Techniques And Cutting-Edge Technology, We Produce Ads That Drive Results Across Tv And Digital Platforms.
               </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>

          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Product Shoots:"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Showcase Your Products With Visually Striking Images That Leave A Lasting Impression.
               Our Talented Photographers And Stylists Specialise In Capturing The Unique Features And Benefits Of Your Offerings.
                Whether For E-Commerce Catalogues Or Print Materials, Our High-Quality Product Images Elevate Your Brand And Drive Conversions.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>

          <Div className="col-lg-5 offset-xl-2">
            <div className="w-90 cs-radius_15" dangerouslySetInnerHTML={{ __html: high_Production }} />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End  */}

      {/* Influencer Marketing */}
        <div id="influencer-marketing-section"></div>
       <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Unlocking The Power Of Influence' 
          subtitle='Influencer Marketing' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div  id="influencerMarketing"  className="row justify-content-center">
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='Identifying And Vetting Influencers Aligned With Your Brand Values'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_2.svg?updatedAt=1701856064955'
              title='Creating Impactful Influencer Marketing Strategies'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_3.svg?updatedAt=1701856065101'
              title='Negotiating And Managing Influencer Partnerships'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='Measuring And Optimizing Campaign Performance'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      {/*  */}

      <Spacing lg='150' md='80'/>
      <Div className="container">
          <VideoModal
          videoSrc="https://www.youtube.com/watch?v=OLFMgj4VC7g"
        />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Strategic Partnerships' 
              subtitle='' 
            >
              <Spacing lg='40' md='20'/>
              <p>
              In A World Where Attention Is A Scarce Resource, Influencer Marketing Has Emerged As A Game-Changer. At Nbt Biz,
                 We Specialize In Connecting Brands With Influencers Who Can Authentically Engage And Resonate With Your Target Audience.
                  Our Meticulous Approach Ensures That Every Collaboration Is Not Just A Transaction But A Strategic Partnership That Amplifies 
                  Your Brand Message. Let Us Help You Harness The Power Of Influence And Take Your Brand To New Heights.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Extensive Network Of Influencers Across Diverse Industries</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Data-Driven Strategies For Maximum Impact</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Proven Track Record Of Successful Influencer Collaborations</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

      {/* end  */}

      {/* social media marketing */}
      <div id="social-media-section"></div>
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Crafting Your Social Presence' 
          subtitle='Social Media Marketing' 
          variant='cs-style1 text-center'
        />
      </Div>

      <Spacing lg='150' md='80'/>
        <Div className="container">
          <VideoModal
          videoSrc="https://www.youtube.com/watch?v=05vNwDBkmMY"
        />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title="Empowering Your Brand's Social Success."
              subtitle='' 
            >
              <Spacing lg='40' md='20'/>
              <p>
              Our Experienced Team Takes Care Of All Aspects Of Managing Your Social Media Pages.
                 From Content Creation And Scheduling To Engaging With Your Audience And Monitoring Performance,
                  We Ensure Consistent Updates That Drive Organic Growth. Collaborating Closely With You,
                   We Develop A Customised Content Plan That Aligns With Your Brand Voice And Resonates With Your Target Audience.
                    Through In-Depth Research, We Identify Trending Topics And Engaging Formats, Creating Content That Boosts Engagement, Reach, And Leads.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Growth-Focused Approach:</h3>
                <p className='cs-m0'>Designed To Drive Tangible Growth For Your Business, Our Data-Driven Insights And Optimization Techniques,
                 Will Help You Achieve Measurable Results Such As Increased Followers, Website Traffic, And Conversions.</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Customised Solutions:</h3>
                <p className='cs-m0'>We Deliver Tailored Strategies Based On Your Specific Industry, Target Audience, And Goals, Maximizing The Effectiveness Of Your Social Media Presence.              </p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Creative And Engaging Content:</h3>
                <p className='cs-m0'>Our Skilled Team Crafts Visually Stunning And Compelling Content That Captivates Your Audience, Driving Higher Engagement And Social Sharing.</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Performance Monitoring And Analytics:</h3>
                <p className='cs-m0'>Maximize Roi With Data-Driven Insights From Continuous Monitoring Of Your Social Media Campaigns. Informed Adjustments And Optimizations Drive Results</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

      {/* end */}

      {/* Digital marketing */}
      <div  id="digital-marketing-section"></div>
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Revolutionizing Digital Marketing' 
          subtitle='Digital Marketing' 
          variant='cs-style1 text-center'
        />
      </Div>

      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
          </Div>
        </Div>
      </Div>
      {/* end */}

      {/* web development*/}
      <div id="web-development-section"></div>
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Captivating First Impressions' 
          subtitle='Web Design and IT Solutions' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row justify-content-center">
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='Custom Website Design And Development'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_2.svg?updatedAt=1701856064955'
              title='Responsive And Mobile-Friendly Designs'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_3.svg?updatedAt=1701856065101'
              title='User Experience (UX) And User Interface (UI) Optimization'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='E-Commerce Website Design'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
            </Div>
        </Div>
      </Div>
      {/*  */}

      <Spacing lg='150' md='80'/>
      <Div className="container">
       
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Empowering Your Business With Technology' 
              subtitle='' 
            >
              <Spacing lg='40' md='20'/>
              <p>
              In The Digital Realm, Your Website Is Often The First Interaction A Potential Customer Has With Your Brand.
                 At Nbt Biz, We Understand The Importance Of Making That First Impression Count. Our Web Design Service Is Dedicated To Creating Visually Stunning,
                  User-Friendly Websites That Not Only Reflect Your Brand Identity But Also Provide An Exceptional User Experience.
                   Whether You Need A New Website Or Want To Revamp Your Existing One, Our Expert Designers Are Here To Turn Your Vision Into A Captivating Digital Reality.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Creative Design Team With A Focus On Functionality</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Responsive Designs For Seamless User Experience Across Devices.</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Expertise In Crafting Websites For Various Industries</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

          {/* */}

        <Spacing lg='145' md='80'/>
        <Div className="container">
        <SectionHeading 
          title="FAQ's" 
          subtitle='Some awesome words from awesome people' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row justify-content-center">
        <Accordion />
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>

      {/*  */}

      {/* end */}
                

      {/* <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
                />
                <Spacing lg='90' md='45'/>
                </Div>
               <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/> */}
      
      {/*  */}

      
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
