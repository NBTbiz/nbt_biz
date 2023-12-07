import React from 'react'
import Div from '../Div'
import './funfact.scss'

import SliderSample from '../ServiceList/slider'


export default function FunFact({variant, title, subtitle, data}) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'}>
      <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
     
        </Div>
      </Div>
      <Div className="cs-funfact_right">
      
        <SliderSample />
        
      </Div>
    </Div>
  )
}
