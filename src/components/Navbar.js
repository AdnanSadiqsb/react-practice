import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav class="navbar-dark navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{props.about}</a>
          </li>

     
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

// defining the prop types 
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
// if we not pass value from app.ja then this will appear
Navbar.defaultProps={

    title:"plese enter title here"
}