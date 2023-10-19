import React from 'react'
import MainPara from '../Components/MainPara'
import ButtonOne from '../Components/ButtonOne'
import ButtonTwo from '../Components/ButtonTwo'
import "../Utilities/Carrier.css";
import Footer from "../Layouts/Footer";
export default function Carrier() {
  return (
    <>
      {/* section carrier start here */}
      <section id="Carrier">
        <div className="container">
            <div className="row">
                <div className="col-md-6 first">
                <h1>Careers at <span>InnvoSol</span></h1>
                <MainPara mainpara="Take a chance on a great opportunity that can change your life! Join us and be part of our next success story!" />
                  <div className="buttons">
                    <ButtonOne btnOne="OPEN POSITIONS"/>
                    <ButtonTwo btnTwo="Fresh Graduate Hiring"/>
                  </div>
                </div>
                <div className="col-md-6">
                <img src={process.env.PUBLIC_URL+"./Carrier-img.svg"} alt="My-Pic" />
                </div>
            </div>
        </div>
      </section>
      <section id="fresh-hiring">
        <div className="container">
            <div className="row">
               <div className="col-lg-6">
                <img className='img'src={process.env.PUBLIC_URL+"./carriers-img.webp"} alt="My-Pic" />
                </div>
                <div className="col-lg-6 second">
                  <div className="logo">
                    <span>Innvosol</span>
                    <img  src={process.env.PUBLIC_URL+"./graduation-hat.png"} alt="My-Pic" />
                  </div>
                  <h2>Fresh Graduate</h2> 
                  <div className="para">Hiring 2023</div>
                <MainPara mainpara="Recently graduated? Kickstart your career with Arbisoft by registering to our Fresh Graduate Hiring Program 2023 before 3rd January 2023!" />
                  
                    <ButtonTwo btnTwo="Register Now"/>
                </div>
               
            </div>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </>
  )
}
