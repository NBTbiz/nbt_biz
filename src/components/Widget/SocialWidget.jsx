import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='https://www.linkedin.com/company/nbt-business-solutions2022' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a href='https://www.youtube.com/@nbtbiz' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:youtube" />              
      </a>
      <a href='https://www.instagram.com/nbtbiz/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:instagram" />              
      </a>
    </Div>
  );
}