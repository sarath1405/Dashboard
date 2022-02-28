import React from 'react'
import '../css/space.css'
import { useState } from 'react'

const Box = ({title, matter, lang, link, github}) => {
  const [show, setShow] = useState(false)
  const change = (e) => {
    setShow(!show);
  }

  return (
    <div className="box">
      <div className="header">{title}</div>
      <div className="description">{matter}</div>
      <div className="footer">
        <span>{lang}</span>
        <div className="links">
          <span><button><a href={link} target="_blank" rel="noreferrer"><img src="/images/link.png" alt="" /></a></button></span>
          <span><button><a href={github} target="_blank" rel="noreferrer"><img src="/images/github.png" alt="" /></a></button></span>
          {show?<button onClick={change}><img src="/images/heart.png" alt="" /></button>:<button onClick={change}><img src="/images/heart-outline.png" alt=""/></button>}
        </div>
      </div>
    </div>
  )
}

export default Box