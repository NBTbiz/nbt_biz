import React from 'react';
import Div from '../Div';
import './portfolio.scss';

export default function Portfolio({src, title, subtitle, variant }) {
  return (
  

    <Div className={`cs-portfolio cs-style1 ${variant} `} >
      <>
        <Div className="" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <Div className="cs-portfolio_info">
          <Div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <Div className="cs-portfolio_subtitle">{subtitle}</Div>
        </Div>
      </>
    </Div>
  );
}
  