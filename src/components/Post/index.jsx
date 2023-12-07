import React from 'react'
import Div from '../Div'
import './post.scss'

export default function Post({url, src, alt, name, title}) {
  return (
    <Div className="cs-post cs-style1">
        <img src={src} alt={alt} />
        <Div className="cs-post_overlay" />

      <Div className="cs-post_info">
        <Div className="cs-posted_by">{name}</Div>
        <h2 className="cs-post_title">{title}</h2>

      </Div>
    </Div>
  )
}
