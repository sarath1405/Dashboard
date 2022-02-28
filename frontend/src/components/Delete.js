import React, { useEffect, useState } from 'react'
import Itemdelete from './Itemdelete'
import Loader from './Loader'

const Space = ({searchData}) => {
  const [items, setItems] = useState([
  ]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://dashboard07.herokuapp.com/delete").then(res => {
      if(res.ok) {
        return res.json();
      }
    }).then(jsonRes => {
      setItems(jsonRes)
      setShow(true);
    });
  })

  const filterItem = items.filter(item => (
      (item.title.toLowerCase(), item.lang.toLowerCase()).includes(searchData.toLowerCase())
  ))

  return (
    <>
    {show ? <Itemdelete item1={filterItem}/> : <Loader/>}
    </>
  )
}

export default Space