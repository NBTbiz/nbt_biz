import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';
import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';
import './slider.scss';
import Div from '../Div';

SwiperCore.use([EffectCoverflow, Autoplay]);

export default function ServiceSlider() {
  const portfolioData = [
    {
      title: '360 Degree Solutions',
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/choosIcon_5.svg?updatedAt=1701759014211',
    },
    {
      title: 'Brand Cognizance',
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/choosIcon_1.svg?updatedAt=1701759014156',
    },
    {
      title: 'Budget friendly',
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/choosIcon_2.svg?updatedAt=1701759014141',
    },
    {
      title: 'We Know Digital',
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/choosIcon_4.svg?updatedAt=1701759014195',
    },
    {
      title: 'Results First',
      src: 'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/choosIcon_3.svg?updatedAt=1701759014201',
    },
    // Add other portfolio items here...
  ];

  const slides = portfolioData.map((item, index) => (
    <SwiperSlide key={index}  style={{ width: '150px'}}>
          <Div className="portfolio-card">
          <img className="portfolio-image" src={item.src} alt={item.title} />
          <h2 className="portfolio-title">{item.title}</h2>
          </Div>
    </SwiperSlide>
  ));

  const swiperSettings = {
    effect: 'coverflow',
    loop: true,
    autoplay: {
      delay: 1000,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
  };

  return (
    <Swiper {...swiperSettings} style={{width: '358px', height: '200px', }}>
      {slides}
    </Swiper>
  );
}
