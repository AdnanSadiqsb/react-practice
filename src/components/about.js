import React,{useState} from 'react'
import '../style/style1.css'
export default function About() {

    const [mystyle, setMystyle]=useState({color:'black',backgroundColor:'white'})
    function enableDarkMode()
    {
            if(mystyle.color=='black')
            {
                setMystyle({color:'white',backgroundColor:'black'})
                setbtntext("disable dark mode")
            }
            else
            {
                setMystyle({color:'black',backgroundColor:'white'})
                setbtntext("enable dark mode")
            }
         
    }
    const [btntext, setbtntext]=useState("enable dark mode");

  return (
    <div className='cont' >
      <div className="about-cont" style={mystyle}>
        <h1>about us</h1>
        <h5 className='title'>our strategy</h5>
        <div className="about">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id harum quis odio quibusdam nihil pariatur quod libero iure sequi cum sunt nulla architecto corrupti mollitia quidem corporis dolore, culpa eligendi tenetur vel.</p>
        </div>
      </div>
      <button className='btn btn-dark' style={mystyle} onClick={enableDarkMode}>{btntext}</button>
    </div>
  )
}
