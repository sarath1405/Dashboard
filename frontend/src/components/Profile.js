import React from 'react'
import '../css/profile.css'
import { useEffect, useState } from 'react';

const Profile = () => {
  const [Item, setItem] = useState([
  ]);

  useEffect(() => {
    fetch("/profile").then(res => {
      if(res.ok) {
        return res.json();
      }
    }).then(jsonRes => {
      setItem(jsonRes)
    });
  })

  return (
    <div id='form'>
        <div className="profile">
            <label htmlFor="name">Name : </label>
            <h3>K Sarath Chandra</h3>
            <label htmlFor="projects">Projects : </label>
            <h3>{Item.length}</h3>
            <label htmlFor="city">City : </label>
            <h3>Visakhapatnam</h3>
            <label htmlFor="">Institution : </label>
            <h3>Vignan's Institute of Information Technology</h3>
            <div className="links">
                <a href="https://GitHub.com/sarath1405"><img src="/images/github-white.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/sarath-chandra-k/"><img src="/images/linkedin.png" alt="" /></a>
                <a href="https://www.instagram.com/sarath_145/"><img src="/images/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Profile