import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/contact_hero_bg.jpeg?updatedAt=1701762546109"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind?"
              subtitle="Getting Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name :</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email :</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type :</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile :</label>
                <input type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Feedback :</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
