import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import TeamDetails from './TeamDetails';
import Whatsapp from '../Whatsapp';

export default function AboutPage() {
  pageTitle('About');

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Whatsapp Icon */}
      <Whatsapp/>
      {/* Whatsapp Icon end */}

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
              Our Approach To Business Is Rooted In The Idea Of Building Human Brands.
              As Consultants And Service Providers, We Focus On The 'Why' Behind A Brand'S Existence.
                We Help Brands Build Meaningful Consumer Relationships That Are Sustainable.
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
              The team at Cntrl M is formed by a curious bunch of minds that believe in co-creating solutions with clients. We are not looking to provide you with quick fixes but to equip your business with critical skills and knowledge that can facilitate your journey into a future-proof, growing brand. Our mission is to build long-term relationships with clients and partners while empowering them with our work.
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
              Our Human Proprietary Framework To Conducting Business Is At The Core Of How We Function And Aid People Towards Achieving Business Success.
               We Have An Unconventional Work Environment That Enables Us To Prioritize Client Satisfaction, Employee Happiness And Flawless Execution Of Work.
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
              title="Empowering Brands For Success"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              <h6>360 Degree Solutions:</h6>We Provide All Round Solutions For Brands Along Different Verticals.
               Tell Us Your Problem And We’Ll Find A Fix For It. 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Brand Cognizance:</h6> Before We Even Start Working, We Make Sure We Understand Your Brand Voice And Values.
                 So Every Step Taken Builds Your Brand.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Budget Friendly:</h6> We Know You Want To Keep A Lid On Costs.
                 Our Team Has Tailor-Made Solutions That Can Provide You With The Best Value For Your Money! 
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>We Know Digital</h6> Our Expertise In Digital Media, Seo And Social Media Enables Us To Take Your Message Wherever It Needs To Go!.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                <h6>Results First:</h6> Less Talk, More Show Is Our Motto. We Are Focused On Things That Add Value To You And Your Business.
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
      {/* <TeamDetails /> */}
      {/* End Team Section */}

      
    </>
  );
}
