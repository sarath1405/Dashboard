import React, {useState} from 'react'
import '../css/form.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const New = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    title:'',
    matter:'',
    lang:'',
    link:'',
    github:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]:value
      }
    })
  }

  const handleClick = (e) => {
    e.preventDefault();

    const newItem = {
      title : input.title,
      matter : input.matter,
      lang : input.lang,
      link : input.link,
      github : input.github
    }

    axios.post('http://localhost:3001/new', newItem);
    navigate('/home');
  }
  
  return (
    <div id="form">
        <form onSubmit={handleClick}>
          <h2>New Project</h2>
          <input value={input.title} type="text" name='title' id="title" placeholder='title..' required autoComplete='off' onChange={handleChange}/><br/>
          <textarea onChange={handleChange} value={input.matter} name="matter" id="description" cols="30" rows="5" placeholder='description..'></textarea><br />
          <input onChange={handleChange} value={input.lang} type="text" name='lang' placeholder='Framework used..' required autoComplete='off'/> <br />
          <input onChange={handleChange} value={input.link} type="url" name='link' placeholder='website link..' required autoComplete='off'/><br />
          <input onChange={handleChange} value={input.github} type="url" name='github' placeholder='Github repository link..' autoComplete='off' required/><br />
          <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default New