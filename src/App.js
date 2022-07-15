import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm1 from './components/TextForm1'
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
    
    <Navbar title="adnan sadiq" about="about Text"/>

    <TextForm1 message="TextArea"/>
    
    </>
  )
}

export default texteditor;
