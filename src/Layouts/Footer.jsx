import React from 'react'
import "../Utilities/Footer.css";
import {FaPhoneAlt  } from "react-icons/fa";
import {FaLocationDot  } from "react-icons/fa6";
import {TfiEmail  } from "react-icons/tfi";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
            <div className="row ">
                <div id='first' className="col-lg-4 col-md-6 ">
                    <img src={process.env.PUBLIC_URL+"./main-dp-dark-bg.svg"} alt="My-Pic" width="40%" />
                    <hr className='hr' />
                    <p>We are an experienced team equipped with the latest tools, delivering web, software, mobile apps, and digital solutions. </p>
                </div>
                <div className='offset-md-1 col-lg-3 col-md-5 mt-5'>
                    <h2>Explore</h2>
                    <ul className='navbar-nav mt-4'>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>About</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Services</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Portfolio</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Process</li>
                        <li className='nav-item'><i className='fa fa-chevron-right'></i>Join Us</li>
                    </ul>
                </div>
                <div id='findus' className="col-lg-4 col-md-6 mt-5">
                    <h2>Find us</h2>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><FaLocationDot className='logo'/>78 Bell St, London NW1 6SP, UK</li>
                        <li className='nav-item'><TfiEmail className='logo'/>info@innvosol.com</li>
                        <li className='nav-item'><FaPhoneAlt className='logo'/>+923094758783</li>
                    </ul>
                     
                     <form action="">
                        <div className="row mail">
                            <div className="col-10"><input type="email" placeholder='Your Email Address' className='form-control' /></div>
                            <div className="col-2"><button className='btn btn-primary' >Subscribe</button></div>
                            
                        </div>
                     </form>

                </div>

            </div>
        </div>
      </div>
      <div id='below'>
    <div className="container">
           <div className="row">
            <div className="col-sm-6 first">  <footer>Copyright © 2023 design. All rights reserved.</footer></div>
            <div className="col-sm-6 second">  Terms & Conditions | Privacy Policy

</div>
           </div>

    </div></div>

    </>
  )
}
