import React from 'react';
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <a href='' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:linkedin-in" />
      </a>
      <a href='' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:youtube" />              
      </a>
      <a href='' className="cs-center" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:instagram" />              
      </a>
    </Div>
  );
}