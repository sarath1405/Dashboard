import React from 'react'
import '../css/header.css'

const Header = (props) => {
  return (
    <div>
        <div className='container1'>
            <div className="header1">
                <h2 className="head">Dashboard</h2>
                <div className="searchbar">
                    <input type="search" placeholder='search project' onChange={(e) => props.search(e.target.value)}/>
                    <img src="/images/search.png" alt="search"/>
                </div>
            </div>
            <div className="navbar">
                <div className="profile">
                    <img src="/images/account.png" alt="" />
                    <p><small>Hi there,</small> <br /> @ Sarath Chandra</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header