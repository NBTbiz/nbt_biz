import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import { Link as ScrollLink } from 'react-scroll';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/NBT_logo.svg?updatedAt=1702460128837" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }} >
                      
                    <li className="menu-item-has-children">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                     
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="service" onClick={() => setMobileToggle(false)} >
                        Services
                      </NavLink>
                      {/* <ul>
                        <li>
                          <ScrollLink
                            to="content-creation-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            onClick={() => setMobileToggle(false)}
                          >
                            Content Creation
                          </ScrollLink>
                        </li>
                        <li>
                          <ScrollLink
                            to="influencer-marketing-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            onClick={() => setMobileToggle(false)}
                          >
                            Influencer Marketing
                          </ScrollLink>
                        </li>
                        <li>
                          <ScrollLink
                            to="social-media-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            onClick={() => setMobileToggle(false)}
                          >
                            Social Media Marketing
                          </ScrollLink>
                        </li>
                        <li>
                          <ScrollLink
                            to="digital-marketing-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            onClick={() => setMobileToggle(false)}
                          >
                            Digital Marketing
                          </ScrollLink>
                        </li>
                        <li>
                          <ScrollLink
                            to="web-development-section"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            onClick={() => setMobileToggle(false)}
                          >
                            Web Development
                          </ScrollLink>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <NavLink to="about" onClick={() => setMobileToggle(false)} >
                        About
                      </NavLink>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <NavLink to="blogPage" onClick={() => setMobileToggle(false)} >
                        Blogs
                      </NavLink>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <NavLink to="serviceDetails" onClick={() => setMobileToggle(false)} >
                        Service Details
                      </NavLink>
                    </li> */}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/NBT_logo.svg?updatedAt=1702460128837" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
            CHAT WITH US OVER A COFFEE, <br /> OR MAYBE A DRINK. <br /> We swear the first meeting will be on us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">  
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}

