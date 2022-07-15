import React,{useState} from 'react'

import '../style/style1.css'
export default function TextForm(props) {
  const upperClick=()=>{
    console.log("uppercase was clicked")
    setText(text.toUpperCase())
  }
  const handleonchange=(event)=>{
    setText(event.target.value)

  }

  const lowerclick=()=>{
    setText(text.toLowerCase())
  }
  const [text,setText]=useState("");
   return (
    <div className='message-container'>
    
      <label htmlFor="message">
      <h1>{props.message}</h1>

      </label>
      
      <br />
      <textarea name="message" id="message" cols="30" value={text} rows="10" onChange={handleonchange} placeholder='type here'></textarea>

      <div className="btn-cont">
        <button onClick={upperClick} className='btn' id='upper'>convert to upper case</button>
        <button className='btn' onClick={lowerclick}>convert to lower</button>
      </div>
    </div>
  )
}



