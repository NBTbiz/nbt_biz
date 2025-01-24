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
      // thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_1.webp?updatedAt=1701767516295',
      title:'Develop Tailor Made Sales Funnel',
      subtitle:"Looking to boost your sales and maximize revenue? Our team at Cntrl M specializes in creating highly effective sales funnels tailored to your business. With attention-grabbing landing pages, persuasive lead magnets, and compelling calls-to-action, we guide potential customers through the buying process seamlessly. Through optimized email campaigns and follow-up sequences, we nurture leads and drive conversions. We continuously analyze the performance of your sales funnel, making data-driven adjustments to ensure maximum effectiveness. Don’t miss out on potential customers. Let us build a powerful sales funnel for your business. Contact Cntrl M today and start increasing your sales.",
    },
    {
      // thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_2.webp?updatedAt=1701767516401',
      title:'Optimised Content',
      subtitle:"At Cntrl M, we go beyond traditional digital marketing approaches. We specialize in creating highly targeted content tailored to each stage of the customer’s journey through your sales funnel. From awareness to consideration and decision-making, our strategic content engages prospects at every step, nurturing them toward conversion. Our team of experts crafts compelling blog posts, informative guides, and persuasive case studies that address customer pain points and showcase your solutions. By combining our SEO expertise with a deep understanding of your audience, we ensure that your content is visible, valuable, and drives results. Take your sales funnel to the next level with Cntrl M.",
    },
    {
      // thumb:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/digitalMarketing_3.webp?updatedAt=1701767516528',
      title:'Spend Less Reach More!',
      subtitle:'Our primary focus is to help businesses optimize their marketing efforts and achieve maximum impact while minimizing costs. With our strategic approach, we develop cost-effective campaigns that reach a broader audience. From targeted advertising to optimized content, we ensure your message resonates with your target market. By leveraging our SEO expertise, we drive organic traffic and improve your online visibility. Our team of experts knows how to maximize your marketing budget and deliver measurable results. Experience the power of cost-efficient marketing with Cntrl M.',
    }
  ]

  // ContentCreation  InfluencerMarketing SocialMediaMarketing DigitalMarketing ITSolutions

  const ContentCreation = [
    {
      question: 'What Do You Mean By Content Creation?',
      answer: "Content Creation Involves A Variety Of Tasks Such As Website Maintenance And Updates, Blogging, Article Writing, Photography, Videography, Online Commentary, Social Network Accounts, And Digital Media Editing And Promotion."
    },
    {
      question: 'What Is Content Creation In Social Media?',
      answer: 'A Social Media Content Creator Is Someone Who Generates And Shares Material On Social Media Platforms With The Goal Of Educating Or Entertaining Their Audience. The Internet Provides Various Options For Content Development. You Can Write Blogs, Distribute Newsletters, And Develop Online Copy—The List Is Endless.'
    },
    {
      question: 'Why Social Media Content Is Important For Business?',
      answer: "Social Media Can Help You Connect With Your Customers And See What Others Are Saying About Your Company. You Can Also Utilize Social Media For Marketing, Giveaways, And Mobile Applications. Social Networking May Help Your Business Acquire Clients, Get Feedback, And Establish Customer Loyalty."
    },
    {
      question: 'How Important Is Content In Business?',
      answer: "Content Remains Dominant In Terms Of Raising Awareness And Producing Quality Leads, Both Of Which Contribute To Healthy Sales Growth. Strategic And Well-Executed Content Has The Capacity To Draw Your Audience To Your Company'S Website, Where They Will Eventually Convert Into Leads And Finally Sales."
    },
    {
      question: 'Benefits Of Content Marketing',
      answer: `1 : Increases Conversions,
      2 : Strengthens Customer Relationships,
      3 : Grows Brand Awareness,
      4 : Connects with Ad-Wary Audiences,
      5 :  Builds Industry Authority,
      6 : Increases Website Traffic,
      7 : Teaches You About Your Audience,
      8: Eases Pressure on Customer Service Teams,
      `
    },
  ]

  const InfluencerMarketing = [
    {
      question: 'What Is Influencer Marketing?',
      answer: "Influencer Marketing Is A Collaborative Effort Between Popular Social Media Users And Brands To Promote Their Products Or Services. These Collaborations Have Been Taking Place Informally Since The Inception Of Social Media."
    },
    {
      question: 'Why Is Influencer Marketing Important?',
      answer: 'Influencers, With Their Huge Reach, Have The Ability To Raise Brand Exposure And Awareness. When An Influencer Promotes Or Advises Your Brand, Their Followers Are More Likely To Pay Attention. Furthermore, When Such Suggestions Come From A Trusted Influencer, They Are Frequently Regarded As Authentic.'
    },
    {
      question: 'What Is The Power Of Influencer Marketing?',
      answer: "The Value Of Influencer Marketing Resides In Its Ability To Connect With Individuals. People Trust Influencers, And When An Influencer Supports A Product Or Brand, It Lends Credibility And Authenticity."
    },
    {
      question: 'What Are The Benefits Of Influencer Marketing?',
      answer: "Influencer Marketing Allows Firms To Get Their Target Audience'S Attention. It Increases Social Proof And Boosts Purchases. When Your Audience Sees Your Products Being Shared By People They Know And Trust, They Are More Likely To Purchase."
    },
    {
      question: 'Why Is Influencer Marketing Important For Businesses?',
      answer: 'Influencer Marketing Boosts Brand Awareness, Resulting In Greater Traffic To Your Online Presence. Furthermore, Sharing Your Material Allows You To Get A Large Number Of High-Quality And Trustworthy Connections. Collaborating With Influencers Can Also Enhance The Quality Of Your Material.'
    },
  ]

  const SocialMediaMarketing = [
    {
      question: 'What is social media marketing?',
      answer: "Social media marketing is the process of developing content for social media platforms to promote your products and/or services, build a community with your target audience, and generate traffic to your website. Social media marketing is continually growing, with new features and platforms being introduced every day."
    },
    {
      question: 'What is best social media marketing Platforms?',
      answer: 'The top social media marketing platforms for businesses include Facebook, YouTube, Instagram, LinkedIn, Twitter, TikTok, and Snapchat'
    },
    {
      question: 'How social media impacts marketing?',
      answer: "Social media allows you to reach out to a larger audience. Almost 90% of marketers claim their social media activities have enhanced their business's exposure, and 75% say they have increased visitors."
    },
    {
      question: 'How social media marketing can help your business?',
      answer: 'Social media can help you connect with your customers and see what others are saying about your company. You can also utilize social media for marketing, giveaways, and mobile applications. Social networking may help your business acquire clients, get feedback, and establish customer loyalty.'
    },
    {
      question: 'Why social media marketing is important for your business?',
      answer: `1 : Brand awareness,
      2 : Engaging customers,
      3 : Build relationships,
      4 : Social media marketing,
      5 : Target audiences,
      6 : Use analytics,
      7 : Boost website traffic,
      8 : Brand loyalty,
      9 : Generate leads,`
    },
  ]
  
  const DigitalMarketing = [
    {
      question: 'What Is Digital Marketing?',
      answer: "Digital Marketing , Also Referred As Online Marketing, Is The Process Of Promoting Brands To Prospective Consumers Through The Internet And Other Digital Media. This Covers Text And Multimedia Messaging As Well As Social Media, Web-Based, Email, And Other Marketing Channels."
    },
    {
      question: 'What Are Digital Marketing Strategies?',
      answer: 'A Digital Marketing Strategy Is A Plan For Using Online Channels To Establish An Internet Presence And Achieve Specific Marketing Objectives. These Channels May Consist Of Your Website, Social Media, Paid Advertisements, Organic Search, And Other Web-Based PlatforMS.'
    },
    {
      question: 'What Are The Benefits Of Integrating A Digital Marketing Strategy Into A Business? ',
      answer: "It Helps You Comprehend Your Market Share More Clearly. You Run The Risk Of Underestimating The Demand For Your Digital Services If You Don'T Have A Defined Approach. Furthermore, It'S Possible That You Won'T Have A Thorough Understanding Of The Characteristics Of The Internet Market, Such As Rival Profiles, Customer Behavior, And Customer Profiles."
    },
    {
      question: 'What Does A Good Digital Marketing Strategy Help The Business To Get? ',
      answer: 'Overall, A Well-Designed Digital Marketing Strategy May Assist Businesses In Achieving Your Marketing Objectives, Increasing Visibility And Brand Awareness, Generating Leads And Sales, And Ultimately Growing Their Business.'
    },
    {
      question: 'What Are The Benefits Of Digital Marketing For Business? \n Benefits Of Digital Marketing Over Traditional Marketing ',
      answer: `1 : Better Brand Awareness,
      2 : Wide Customer Reach,
      3 : Increased Customer Engagement,
      4 : Real-Time Customer Feedback,
      5 : Data-Driven Decision-Making,
      6 : Greater Market Share,
      7 : Cost-Effectiveness,
      8 : High Return on Investment (ROI),
      `
    },
  ]

  const ITSolutions = [
    {
      question: 'What is an IT solution?',
      answer: "IT solutions, also known as IT business solutions, are a collection of software, apps, programs, and IT services that firms can use to assist certain business processes or address specific difficulties."
    },
    {
      question: 'What is the IT solution for business? ',
      answer: 'At their most fundamental, IT solutions assist businesses in making effective and efficient use of their data. This includes developing, managing, accessing, collecting, analyzing, optimizing, reporting, and presenting relevant data on customers, employees, services, and processes.'
    },
    {
      question: 'What is Web development ?',
      answer: "Web development is the process of creating a website for the Internet (World Wide Web) or a private network (intranet). Web development can include anything from a basic static page of plain text to complicated web apps, electronic companies, and social network services."
    },
    {
      question: 'How website development helps your business?',
      answer: "Web development is essential for distinguishing your company from competition since it allows you to stand out from the pack. If you have a website that is well-designed, easy to navigate, and visually appealing, you will attract more customers than similar firms that don't have these elements."
    },
    {
      question: 'How does having a website benefit a business?',
      answer: `Establishing trust, enhancing your brand, improving client interactions, and informing a larger audience about your company's capabilities are all significant benefits. Another typical problem is that you don't have enough content to offer for frequent updates, or you don't have time to blog.`
    },
  ]

  const scrollToInfluencerMarketing = () => {
    document.getElementById('influencer-marketing-section').scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToWebDevelopment = () => {
    document.getElementById('web-development-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContentCreation = () => {
    document.getElementById('content-creation-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDigitalMarketing = () => {
    document.getElementById('digital-marketing-section').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSocialMediaMarketing = () => {
    document.getElementById('social-media-section').scrollIntoView({ behavior: 'smooth' });
  };
  
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
                <Div onClick={scrollToInfluencerMarketing} className="scroll-link">
                  <Card
                    title='Influencer Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_2.webp?updatedAt=1705301481319"
                    alt='Service'
                  />
                 </Div>
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>

                <Div onClick={scrollToWebDevelopment} className="scroll-link">
                  <Card
                    title='Web Development'
                    src='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_5.webp?updatedAt=1705301481289'
                    alt='Service'
                  />
                  </Div>
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>

                <Div onClick={scrollToContentCreation} className="scroll-link">
                  <Card
                    title='Content Creation'
                    src='https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_1.webp?updatedAt=1705301481137'
                    alt='Service'
                  />
                  </Div>
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>

                <Div onClick={scrollToDigitalMarketing} className="scroll-link">
                  <Card
                    title='Digital Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_4.webp?updatedAt=1705301481259"
                    alt='Service'
                  />
                  </Div>
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>

                <Div onClick={scrollToSocialMediaMarketing} className="scroll-link">
                  <Card
                    title='Social Media Marketing'
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_3.webp?updatedAt=1705301481185"
                    alt='Service'
                  />
                  </Div>
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* content creation */} 
      <Spacing lg='150' md='80'/>
      <div id="content-creation-section"></div>
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
              <p>We at Cntrl M understand that compelling and engaging content is the backbone of any successful marketing campaign. Our team of creative professionals specializes in crafting content that resonates with your target audience, helping you effectively communicate your brand message and achieve your marketing goals.</p>
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
        <Accordion  accordionData={ContentCreation}/>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>

      {/*  */}
      
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
              In A World Where Attention Is A Scarce Resource, Influencer Marketing Has Emerged As A Game-Changer. At Cntrl M,
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
        <Accordion  accordionData={InfluencerMarketing}/>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>

      {/*  */}

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
        <Accordion  accordionData={SocialMediaMarketing}/>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>

      {/*  */}

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
        <Accordion  accordionData={DigitalMarketing}/>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>

      {/*  */}

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
              In the digital realm, your website is often the first interaction a potential customer has with your brand. At Cntrl M, we understand the importance of making that first impression count. Our web design service is dedicated to creating visually stunning, user-friendly websites that not only reflect your brand identity but also provide an exceptional user experience. Whether you need a new website or want to revamp your existing one, our expert designers are here to turn your vision into a captivating digital reality.
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
        <Accordion  accordionData={ITSolutions}/>
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
