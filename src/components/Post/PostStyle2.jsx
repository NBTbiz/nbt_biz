import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../Div'
import './post.scss'

export default function PostStyle2({thumb, title, subtitle}) {
  return (
    <Div className="cs-post cs-style2">
      <Link  className="cs-post_thumb cs-radius_15">
        <img src={thumb} alt="Post" className="w-100 cs-radius_15" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
        </Div>
        <h2 className="cs-post_title"><Link>{title}</Link></h2>
        <Div className="cs-post_sub_title">{subtitle}</Div>
      </Div>
    </Div>
  )
}
