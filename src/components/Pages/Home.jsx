import React, { useEffect, lazy, useState } from 'react';
import { pageTitle } from '../../helper';

const Card = lazy(() => import('../Card'));
const FunFact = lazy(() => import('../FunFact'));
const Hero = lazy(() => import('../Hero'));
const Div = lazy(() => import('../Div'));
const SectionHeading = lazy(() => import('../SectionHeading'));
const Spacing = lazy(() => import('../Spacing'));
const Cta = lazy(() => import('../Cta'));
const LogoList = lazy(() => import('../LogoList'));
const MovingText = lazy(() => import('../MovingText'));
const PortfolioSlider2 = lazy(() => import('../Slider/PortfolioSlider'));
const PostSlider = lazy(() => import('../Slider/PostSlider'));
const TeamSlider = lazy(() => import('../Slider/TeamSlider'));
const VideoModal = lazy(() => import('../VideoModal'));

export default function Home() {
  pageTitle('Home');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'linkedin',
      links: 'https://www.linkedin.com/company/nbt-business-solutions2022/',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/nbtbiz/',
    },
  ];

  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const imgUrl = 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/hero_bg_5.webp?updatedAt=1701759134018';

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      setBgImageLoaded(true);
    };
  }, []);

  if (!bgImageLoaded) {
    return <div>Loading...</div>; // Show loading indicator while the image is loading
  }

  return (
    <>
      {/* Start Hero Section */}
     
      <Hero
        title="It's the growth fizz That does the bizz"
        subtitle="At NBT Business Solutions, we stand out as the premier digital marketing agency in Kerala, committed to being your strategic ally for success. More than just a digital marketing company, our team of marketers, creatives, researchers, and tech enthusiasts collaborates to tackle business challenges. 
        Our mission is simple: guide brands to uncover their purpose and establish a lasting path to success. Choose the best – choose NBT Business Solutions, your top-tier digital marketing agency in Kerala."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl={imgUrl}
        />

    {/* <Suspense fallback={<div></div>}> */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Why brands choose us:"
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Content Creation"
                    link="/service"
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_1.webp?updatedAt=1705301481137"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Influencer Marketing"
                    link="/service"
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_2.webp?updatedAt=1705301481319"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Social Media Marketing"
                    link="/service"
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_3.webp?updatedAt=1705301481185"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service"
                    src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/service_4.webp?updatedAt=1705301481259"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider2 />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=OLFMgj4VC7g"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
   
      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Social Media Management"
                subtitle="Influencer Amplification"
                btnText="Influencer Empowerment"
                // btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="CLIENTS WE WORKED WITH  " />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s discuss and make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/cta_bg.jpeg?updatedAt=1701762150722"
        />
      </Div>
      {/* End CTA Section */}
    {/* </Suspense> */}
    </>
  );
}
