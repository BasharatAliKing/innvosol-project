import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "./Utilities/App.css";
import Navbar from './Layouts/Navbar';
import Home from './Pages/Home';
import Services from "./Pages/Services";
import Carrier from './Pages/Carrier';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Process from './Pages/Process';
import WebDevelopment from './Pages/WebDevelopment';
export default function App() {
  return (
    <>
     <Router>
     <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route> 
          <Route exact path='/Home' element={<Home/>} ></Route> 
          <Route exact path='/Services' element={<Services/>} ></Route> 
          <Route exact path='/Carrier' element={<Carrier/>} ></Route> 
          <Route exact path='/Contact-us' element={<Contact/>} ></Route> 
        </Routes>
     </Router>
    </>
  )
}
