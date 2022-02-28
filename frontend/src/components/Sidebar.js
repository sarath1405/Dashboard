import React from 'react'
import Navlink from "./Navlink";
import { Link } from 'react-router-dom';
import Box1 from './Box1'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="heading">
            <img src='/images/dashboard.png' alt="img" />
            <h2>Dashboard</h2>
        </div>
        <div className="wrap">
        <div className="navlink">
            <Link to="/home"><Navlink text='Home' icon='/images/home.png'/></Link>
            <Link to="/new"><Navlink text='New' icon='/images/new.png'/></Link>
            <Link to="/delete"><Navlink text='Delete' icon='/images/delete.png'/></Link>
            <Link to="/profile"><Navlink text='Profile' icon='/images/profile.png'/></Link>
            <span><Link to="/item"><Box1/></Link></span>
        </div>
        <div className="settings">
            <Link to="/settings"><Navlink text='Settings' icon='/images/settings.png'/></Link>
            <Link to="/support"><Navlink text='Support' icon='/images/support.png'/></Link>
            <Link to="/privacy"><Navlink text='Privacy' icon='/images/privacy.png'/></Link>
        </div>
        </div>
    </div>
  )
}

export default Sidebar