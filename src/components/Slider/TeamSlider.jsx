import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member3.webp?updatedAt=1701760654635',
      memberName: 'Kevin Alexander',
      memberDesignation: 'CEO',
      memberSocial: {
        Instagram: 'https://www.instagram.com/kevin0o7/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: '/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member2.webp?updatedAt=1701760654994',
      memberName: 'Ammu Nair',
      memberDesignation: 'CMO',
      memberSocial: {
        Instagram: 'https://www.instagram.com/ammunair_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/ammu-nair-244734191/',
        // youtube: '/',
        // facebook: '/',
      },
    },
    {
      memberImage: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/member1.webp?updatedAt=1701760655542',
      memberName: 'Adwaith Manoj',
      memberDesignation: 'CONTENT DIRECTOR',
      memberSocial: {
        Instagram: 'https://www.instagram.com/ad.muni/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/adwaith-manoj-4a85b4204/',
        // youtube: '/',
        // facebook: '/',
      },
    },
   
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
