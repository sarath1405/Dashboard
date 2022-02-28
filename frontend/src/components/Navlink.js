import React from 'react'

const Navlink = ({text, icon, onclick}) => {
  return (
    <button className='link' onClick={onclick}>
      <span>{text}</span>
        <img className='logo' src={icon} alt="icon" />
        <h3>{text}</h3>
    </button>
  )
}

export default Navlink