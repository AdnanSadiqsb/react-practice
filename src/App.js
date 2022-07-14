import logo from './logo.svg';
import './App.css';

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

function texteditor()
{
  return(

    <>
    
    <nav class="navbar-dark navbar navbar-expand-lg bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Text Tutals</a>
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
              <a class="nav-link" href="/">About</a>
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
      <h1>hlo word</h1>
    </>
  )
}

export default texteditor;
