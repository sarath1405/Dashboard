import React from 'react'
import Box1 from './Box1'
import '../css/space.css'

const Itemdelete = ({item1}) => {
  return (
    <div className="space">
        {item1.map((item, index) => {
            return <Box1 key={index} title={item.title} matter={item.matter} lang={item.lang} link={item.link} github={item.github}/>
        })}
    </div>
  )
}

export default Itemdelete