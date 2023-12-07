import React from 'react';
import { useState } from 'react';
import Div from '../Div';

export default function VideoModal({ videoSrc, variant }) {
  const videoId = videoSrc.split('?v=')[1].trim();
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  return (
    <>
      {!toggle ? (
        <Div
          className={`cs-video_block ${
            variant ? variant : 'cs-style1'
          } cs-video_open cs-bg`}
          style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/0.jpg)` }}
          onClick={handleClick}
        >
          <span className="cs-player_btn cs-accent_color">
            <span />
          </span>
        </Div>
      ) : (
        <Div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: '10px' }}>
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title="video modal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Div>
      )}
    </>
  );
}
