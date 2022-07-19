import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1'
import About from './components/about'
import React, { useState } from 'react';
import Alert from './components/Alert';

let name="adnan";
const element = <a href="https://www.reactjs.org"> link </a>;
const cont=(<h1>what is happenning here </h1>)

function App() {
  return (  
    <>
    <div className="navbar">
      <ul>
      <li>Home </li>
      <li> about</li>
      <li>contact us</li>
      <li>services</li>
      </ul>
    </div>
    <div className='container'>
      <h2>hlo {name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam eius cupiditate labore quis laboriosam repudiandae porro laborum, doloremque quae exercitationem, quo hic.</p>
    </div>
 
    {element}
    {cont}
    </>
  );
}

function Texteditor()
{
  const [Screenmode, setMode]=useState('light')// tell about dark mode is enable or not
  const [alert,setalert]=useState(null)
  const [customColor, setCustomColor]=useState(null)


  const toggleMode=()=>{
    if(Screenmode==='light')
    {
      setMode('dark')
      document.title='TextUtils- Dark mode'
      showAlert('dark mode enable ','success')
      document.body.style.backgroundColor='#212529'
      document.body.style.color='white'
    }
    else{
      setMode('light')
      document.title='TextUtils- Light mode'
      showAlert('light mode enabled','success')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }

  function toggleModeCustom(color)
  {
  
    document.body.style.backgroundColor=color
    document.body.style.color=color
  }
  

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

   const showCustomColor=(hexvalue)=>
   {
   setCustomColor(hexvalue)
    
   }
  
  return(

    <div className='main' style={{
      backgroundColor:customColor
    }} >

    <Navbar  title="adnan sadiq" about="about Text" mode={Screenmode} toggleMode={toggleMode} toggleModeCustom={toggleModeCustom} customColor={showCustomColor} />
    <Alert alert={alert}/>

    <TextForm1 message="Enter Text To Analyze" mode ={Screenmode} showAlert={showAlert} customColor={customColor}/*  customColor={showCustomColor}*/  />
    <About/>
    </div>
  )
}

export default Texteditor;
