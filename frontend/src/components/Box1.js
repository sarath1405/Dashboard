import React from 'react'
import '../css/box1.css'
import { useState } from 'react'
import axios from 'axios'

const Box1 = ({title, matter, lang, link, github, id}) => {
  const [show, setShow] = useState(false)
  const change = (e) => {
    setShow(!show);
  }

  const del = () => {
    if(window.confirm(`"${title}" will be deleted ?`)) {
      const item1 = {id};
      axios.post('http://localhost:3001/item', item1);
    }
  }

  return (
    <div className='box1'>
        <div className="box">
        <div className="header">
            {title}
        </div>
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
        <button className='deletebtn' onClick={del}>Delete</button>
    </div>
  )
}

export default Box1