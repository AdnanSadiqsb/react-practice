import React,{useState} from 'react'

import '../style/style1.css'
export default function TextForm(props) {
  const upperClick=()=>{
    console.log("uppercase was clicked")
    setText(text.toUpperCase())
    props.showAlert('converted to uppercase','success')

  }
  const handleonchange=(event)=>{
    setText(event.target.value)

  }

  
  function cleartext()
  {
    setText("");
    console.log(props)
    props.showAlert('Textarea cleared','success')
  }

  const lowerclick=()=>{
    setText(text.toLowerCase())
    props.showAlert('converted to lower case','success')

  }
  function copyToClip(){
    navigator.clipboard.writeText(text);
    props.showAlert('copied to clipboard','success')
  }
  const removespaces=()=>
  {

    setText(text.replace(/\s{2,}/g, ' ').trim()  )
    props.showAlert("Extra spaces removed",'success')
  }
  const [text,setText]=useState("");

   return (
    <>
    
    <div className='message-container' style={
        {backgroundColor: props.mode==='light'? 'white':'#212519' , color: props.mode==='light'? 'black':'white' }
        &&
        {backgroundColor: props.customColor}

      }>
      <label htmlFor="message">
      <h1>{props.message}</h1>

      </label>
      
      <br />
      <textarea name="message" id="message" cols="30" value={text} rows="10" onChange={handleonchange} placeholder='type here' style={{backgroundColor: props.mode==='light'? 'white':'#212519', color: props.mode==='light'? 'black':'white'}}></textarea>

      <div className="btn-cont">
        <button onClick={upperClick} className='btn1' id='upper'>convert to upper case</button>
        <button className='btn1' onClick={lowerclick}>convert to lower</button>
        <button className='btn1' onClick={() => cleartext("hello")}>clear text</button>
        <button className='btn1' onClick={copyToClip}>copy to clipbord</button>
        <button className='btn1' onClick={removespaces}>Remove extra spaces</button>

      </div>
    </div>
    <div className="summary-cont">
      <h1>Text Summary</h1>
      <p>words: {text.split(" ").length-1}, charcters: {text.length}, sentences: {text.split(".").length-1} </p>
      <p>Estimate mintues to read: {(0.008* text.split(" ").length).toFixed(3)}</p>
      <h2>preview</h2>
      <div className='preview-text'>
       <h5> {text.length===0?'writ above to preview' : text}</h5>
      </div>
    </div>
    </>
  )
}



