import React, { useEffect, useState } from 'react'
import Item from './Item'

const Space = ({searchData}) => {
  const [items, setItems] = useState([
  ]);

  useEffect(() => {
    fetch("https://dashboard07.herokuapp.com/home").then(res => {
      if(res.ok) {
        return res.json();
      }
    }).then(jsonRes => {
      setItems(jsonRes)
    });
  })

  const filterItem = items.filter(item => (
      item.title.toLowerCase().includes(searchData.toLowerCase())
  ))

  return (
    <Item item1={filterItem}/>
  )
}

export default Space