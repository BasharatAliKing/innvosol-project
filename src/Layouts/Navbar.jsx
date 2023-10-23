import React,{useState} from 'react'
import "../Utilities/Navbar.css";
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [navbar, setNavbar]=useState(false);
  // const [show, setshow]=useState(false);
 
  // const btnClick=()=>{
  //   console.log("menu btn clickedd...")
  //   if(show==true){
  //     setshow(false)
  //   }else{
  //  setshow(true);
  //   }
  // }
  const showButton=()=>{
    console.log("Scrolled...");
    if(window.scrollY>= 590){
      setNavbar(false)
    }
    else{
      setNavbar(true)
    }
  }
  window.addEventListener('scroll',showButton);
  return (
    <>
    <div id='header'className={navbar ? "active" :" navbars"} >
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
  <img class="navbar-brand" src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic"  />
  <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

       <ul class="navbar-nav ">
    <li class="nav-item dropdown">
      <a class="nav-link " to="#"  data-toggle="dropdown" aria-expanded="false">
      WHAT'S WE OFFER <i className='fa fa-plus'></i>
      </a>
      <div class="dropdown-menu">
        <Link class="dropdown-item" to="/Website-Development-services">Web Development</Link>
        <Link class="dropdown-item" to="#">E-Commerce Development</Link>
        <Link class="dropdown-item" to="#">Mobile App Development</Link>
        <Link class="dropdown-item" to="#">UI/UX Desgin</Link>
        <Link class="dropdown-item" to="#">Staff Augmenation</Link>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link " to="#"  data-toggle="dropdown" aria-expanded="false">
      COMPANY <i className='fa fa-plus'></i>
      </a>
      <div class="dropdown-menu">
        <Link class="dropdown-item" to="/About-Us">About Us</Link>
        <Link class="dropdown-item" to="/Process">Process</Link>
      </div>
    </li>
    <li class="nav-item ">
      <Link class="nav-link"  to="/Services">SERVICES </Link>
    </li>
    <li class="nav-item ">
      <Link class="nav-link"  to="/Carrier">CARRIER </Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link"  to="/Contact-Us">CONTACT US</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link btn"  to="/">Get In Touch</Link>
    </li>
  </ul>
  

  </div>
</nav>
</div>
      </div>
    </>
  )
}
