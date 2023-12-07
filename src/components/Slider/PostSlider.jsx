import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/influencer_1.webp?updatedAt=1701761196557',  
      alt:'Post', 
      name:'Riyas Salim', 
      title:'Riyas Salim is a Bigg Boss Malayalam season 4 contestant and social media influencer.'
    },
    {
      url:'/blog/blog-details', 
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/influencer_3.webp?updatedAt=1701761196358',  
      alt:'Post', 
      name:'Ammu Nair',
      title:'Model - Entrepreneur - Artist.'
    },
    {
      url:'/blog/blog-details', 
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/influencer_4.webp?updatedAt=1701761196630',  
      alt:'Post', 
      name:'Aparna Mulberry',
      title:'Aparna Mulberry is a residential project developed by Aparna Constructions, offering homes with amenities.'
    },
    {
      url:'/blog/blog-details', 
      src:'https://ik.imagekit.io/t4n9k9uxl/NBT%20Website/influencer_2.webp?updatedAt=1701761196389',  
      alt:'Post', 
      name:'Sree Lakshmi', 
      title:'How to keep fear from ruining your art business with confident'
    },
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              name={item.name}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
