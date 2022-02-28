import React from 'react'
import Box from './Box'
import '../css/space.css'

const Item = ({item1}) => {
  return (
    <div className="space">
        {item1.map((item, index) => {
            return <Box key={index} title={item.title} matter={item.matter} lang={item.lang} link={item.link} github={item.github}/>
        })}
    </div>
  )
}

export default Item