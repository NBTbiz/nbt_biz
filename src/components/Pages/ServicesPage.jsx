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
      subtitle:"Looking to boost your sales and maximise revenue? Our team at NBT Biz specialises in creating highly effective sales funnels tailored to   your business. With attention-grabbing landing pages, persuasive lead magnets, and compelling calls-to-action, we guide potential customers through the buying process seamlessly. Through optimised email campaigns and follow-up sequences, we nurture leads and drive conversions. We continuously analyse the performance of your sales funnel, making data-driven adjustments to ensure maximum effectiveness. Don't miss out on potential customers. Let us build a powerful sales funnel for your business. Contact NBT Biz today and start increasing your sales.",
    },
    {
      thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_2.webp?updatedAt=1701767516401',
      title:'Optimised Content',
      subtitle:"At NBT Biz, we go beyond traditional digital marketing approaches. We specialize in creating highly targeted content tailored to each stage of the customer's journey through your sales funnel. From awareness to consideration and decision-making, our strategic content engages prospects at every step, nurturing them towards conversion. Our team of experts crafts compelling blog posts, informative guides, and persuasive case studies that address customer pain points and showcase your solutions. By combining our SEO expertise with a deep understanding of your audience, we ensure that your content is visible, valuable, and drives results. Take your sales funnel to the next level with NBT Biz.",
    },
    {
      thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_3.webp?updatedAt=1701767516528',
      title:'Spend Less Reach More!',
      subtitle:'Our primary focus is to help businesses optimize their marketing efforts and achieve maximum impact while minimizing costs. With our strategic approach, we develop cost-effective campaigns that reach a broader audience. From targeted advertising to optimized content, we ensure your message resonates with your target market. By leveraging our SEO expertise, we drive organic traffic and improve your online visibility. Our team of experts knows how to maximize your marketing budget and deliver measurable results. Experience the power of cost-efficient marketing with NBT Biz.',
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
                title='Services we can help you with' 
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
      <Spacing lg='150' md='80'/>
      <Div className="container">
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
              <p>We at NBT Biz, understand that compelling and engaging content is the backbone of any successful marketing campaign. Our team of creative professionals specialises in crafting content that resonates with your target audience, helping you to effectively communicate your brand message and achieve your marketing goals.</p>
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
              Harness the power of user-generated content (UGC) with our expertly crafted videos.
               Our team collaborates with you to curate and produce UGC-based videos that authentically showcase your products or services.
                From concept to post-production, we ensure your UGC videos leave a lasting impression on your audience.
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
              Make a memorable impact with our high-production ads. Our experienced videographers, directors,
               and editors create visually stunning advertisements that captivate viewers. By combining innovative
                storytelling techniques and cutting-edge technology, we produce ads that drive results across TV and digital platforms.
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
              Showcase your products with visually striking images that leave a lasting impression.
               Our talented photographers and stylists specialise in capturing the unique features and benefits of your offerings.
                Whether for e-commerce catalogues or print materials, our high-quality product images elevate your brand and drive conversions.  
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

       <Spacing lg='145' md='80'/>
      <Div className="container ">
        <SectionHeading 
          title='Unlocking the Power of Influence' 
          subtitle='Influencer Marketing' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div  id="influencerMarketing"  className="row justify-content-center">
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='Identifying and vetting influencers aligned with your brand values'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_2.svg?updatedAt=1701856064955'
              title='Creating impactful influencer marketing strategies'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_3.svg?updatedAt=1701856065101'
              title='Negotiating and managing influencer partnerships'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='Measuring and optimizing campaign performance'
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
              <p>In a world where attention is a scarce resource, influencer marketing has emerged as a game-changer. At NBT Biz,
                 we specialize in connecting brands with influencers who can authentically engage and resonate with your target audience.
                  Our meticulous approach ensures that every collaboration is not just a transaction but a strategic partnership that amplifies 
                  your brand message. Let us help you harness the power of influence and take your brand to new heights.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Extensive network of influencers across diverse industries</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Data-driven strategies for maximum impact</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Proven track record of successful influencer collaborations</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

      {/* end  */}

      {/* social media marketing */}

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
              <p>Our experienced team takes care of all aspects of managing your social media pages.
                 From content creation and scheduling to engaging with your audience and monitoring performance,
                  we ensure consistent updates that drive organic growth. Collaborating closely with you,
                   we develop a customised content plan that aligns with your brand voice and resonates with your target audience.
                    Through in-depth research, we identify trending topics and engaging formats, creating content that boosts engagement, reach, and leads.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Growth-Focused Approach:</h3>
                <p className='cs-m0'>Designed to drive tangible growth for your business, our data-driven insights and optimization techniques,
                 will help you achieve measurable results such as increased followers, website traffic, and conversions.</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Customised Solutions:</h3>
                <p className='cs-m0'>We deliver tailored strategies based on your specific industry, target audience, and goals, maximizing the effectiveness of your social media presence.</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Creative and Engaging Content:</h3>
                <p className='cs-m0'>Our skilled team crafts visually stunning and compelling content that captivates your audience, driving higher engagement and social sharing.</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Performance Monitoring and Analytics:</h3>
                <p className='cs-m0'> Maximize ROI with data-driven insights from continuous monitoring of your social media campaigns. Informed adjustments and optimizations drive results.</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

      {/* end */}

      {/* Digital marketing */}
      
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Revolutionizing Digital Marketing' 
          subtitle='Digital marketing' 
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
              title='Custom website design and development'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_2.svg?updatedAt=1701856064955'
              title='Responsive and mobile-friendly designs'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_3.svg?updatedAt=1701856065101'
              title='User experience (UX) and user interface (UI) optimization'
              subtitle=''
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_icon_1.svg?updatedAt=1701856065291'
              title='E-commerce website design'
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
              title='Empowering Your Business with Technology' 
              subtitle='' 
            >
              <Spacing lg='40' md='20'/>
              <p>In the digital realm, your website is often the first interaction a potential customer has with your brand.
                 At NBT Biz, we understand the importance of making that first impression count. Our Web Design service is dedicated to creating visually stunning,
                  user-friendly websites that not only reflect your brand identity but also provide an exceptional user experience.
                   Whether you need a new website or want to revamp your existing one, our expert designers are here to turn your vision into a captivating digital reality.</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Why Choose Us ?</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Creative design team with a focus on functionality</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Responsive designs for seamless user experience across devices.</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Expertise in crafting websites for various industries</h3>
                <p className='cs-m0'>----------</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
          </Div>
          </Div>

      {/* end */}

      <Div className="container">
        <Cta 
         title="Let’s discuss and make <br />something <i>cool</i> together"
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/cta_bg.jpeg?updatedAt=1701762150722'
        />
      </Div>
    </>
  )
}
