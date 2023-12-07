import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import TeamDetails from './TeamDetails';

export default function AboutPage() {
  pageTitle('About');

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/contact_hero_bg.jpeg?updatedAt=1701762546109"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="One Company, Many Solutions"
              subtitle="About Our Agency"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our approach to business is rooted in the idea of building human brands.
               As consultants and service providers, we are focused on the why of a brand’s existence.
                We help brands build meaningful consumer relationships that are sustainable. 
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/about_1.webp?updatedAt=1701762963101"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
            <Div className="col-lg-5">
            <img
              src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/about_3.webp?updatedAt=1701762963097"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>

          <Div className="col-lg-5 offset-xl-2">
            <SectionHeading
              title="Collaborative Brand Empowerment"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              The team at NBT is formed by a curious bunch of minds that believe in co-creating solutions with clients.
               We are not looking to provide you with quick fixes, but equip your business with critical skills and knowledge
                that can facilitate your journey into a future proof, growing brand. Our mission is to build long-term relationships
                 with clients and partners while empowering them with our work.  
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>

          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Human-Centric Business Success"
              subtitle=""
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              Our human proprietary framework to conducting business is at the core of how we function and aid people towards achieving business success.
               We have an unconventional work environment that enables us to prioritize client satisfaction, employee happiness and flawless execution of work. 
               </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>

          <Div className="col-lg-5 offset-xl-2">
            <img
              src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/about_2.webp?updatedAt=1701762963112"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/about_4.jpg?updatedAt=1701762990404"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Empowering Brands for Success"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              <h6>360 Degree Solutions:</h6> We provide all round solutions for brands along different verticals.
               Tell us your problem and we’ll find a fix for it.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Brand Cognizance:</h6> Before we even start working, we make sure we understand your brand voice and values.
                 So every step taken builds your brand. 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Budget friendly:</h6> We know you want to keep a lid on costs.
                 Our team has tailor-made solutions that can provide you with the best value for your money! 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>We Know Digital</h6> Our expertise in digital media, SEO and social media enables us to take your message wherever it needs to go!.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Results First:</h6> Less talk, more show is our motto. We are focused on things that add value to you and your business. 
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <TeamDetails />
      {/* End Team Section */}

      
    </>
  );
}
