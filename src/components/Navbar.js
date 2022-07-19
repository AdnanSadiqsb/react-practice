import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={ `navbar-${props.mode} navbar navbar-expand-lg bg-${props.mode}` }>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
          </li>

     
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
     
      <div className="form-check form-switch" >
      <input className="form-check-input" onChange={() => props.toggleMode()} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode </label>
    </div>
    <input type="color" name="colorpicker" onChange={()=>{
      props.customColor(document.getElementById('color-picker').value)
      props.toggleModeCustom(document.getElementById('color-picker').value)}} id="color-picker" /> 

    </div>
   
  </nav>
  )
}
// function getHexValue()
// {
//   const ElcolorPicker=
//   props.toggleModeCustom(ElcolorPicker.value);
//   return ElcolorPicker.value;
// }
// defining the prop types 
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
    mode : PropTypes.string
}
// if we not pass value from app.ja then this will appear
Navbar.defaultProps={
    
    title:"plese enter title here"
}
