import React, { useEffect, useState } from 'react'
import Box1 from './Box1'

const Delete = () => {

  const [Item, setItem] = useState([
  ]);

  useEffect(() => {
    fetch("https://dashboard07.herokuapp.com/delete").then(res => {
      if(res.ok) {
        return res.json();
      }
    }).then(jsonRes => {
      setItem(jsonRes)
    });
  })

  return (
    <div className='space'>
        {
          Item.map((item, index) => {
            return <Box1 key={index} title={item.title} matter={item.matter} lang={item.lang} link={item.link} github={item.github} id={item._id}/>
        })}
    </div>
  )
}

export default Delete