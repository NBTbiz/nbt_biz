import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'Bloom in Green',
      // subtitle:'See Details',
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/portfolio2.jpeg?updatedAt=1701759890162'
    },
    {
      title:'Sree Hair & Makeup',
      // subtitle:'See Details',
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/portfolio3.jpeg?updatedAt=1701759890208'
    },
    {
      title:'YESTE',
      // subtitle:'See Details',
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/portfolio1.jpeg?updatedAt=1701759890158'
    },
    {
      title:"Cafe Since'97",
      // subtitle:'See Details',
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/portfolio4.jpeg?updatedAt=1701759890215'
    },
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            // href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
