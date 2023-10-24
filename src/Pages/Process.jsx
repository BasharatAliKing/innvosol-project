import React from 'react'
import "../Utilities/Process.css";
import ButtonOne from "../Components/ButtonOne";
import MainHeading from "../Components/MainHeading";
import MainPara from "../Components/MainPara";
import ProcessBox from '../Components/ProcessBox';
export default function Process() {
  return (
    <>
     {/* process main section */}
       <section id="Process">
        <div className="container">
            <div className="row">
                <div className="col-md-6 one ">
                    <MainHeading mainheading="Our Approach"/>
                    <MainPara mainpara="Innovsol creates dynamic and engaging online experiences through meticulous planning, innovative solutions, and continuous client communication. Our team of highly skilled developers stay on top of the latest technology trends to capture the essence of each business into a unique online presence."/>
                    <ButtonOne btnOne="GET IN TOUCH"/>
                </div>
                <div className="col-md-6"> <img src={process.env.PUBLIC_URL+"./waterfall.webp"} alt="My-Pic" width="100%" /> </div>
            </div>
        </div>
      </section>
      <section id="process-idea">
        <div className="container">
          <div className="row">
            <div className="col-md-6  text">
              <div className='idea-below'>01</div>
              <img src={process.env.PUBLIC_URL+"./process-icon.webp"} alt="My-Pic" />
              <h2>Idea</h2>
              <p>Bring your ideas to life by highly skilled professionals. InnvoSol ensures that every idea brought to the company is nurtured using the most feasible and efficient approach.</p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-empathize.svg"} title="Empathize" />
                </div>
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-define.svg"} title="Define" />
                </div>
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-idea.svg"} title="Ideate" />
                </div>
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-prototype.svg"} title="Prototype" />
                </div>
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-test.svg"} title="Test" />
                </div>
                <div className="col-lg-4 col-6">
                  <ProcessBox img={process.env.PUBLIC_URL+"./process-icon-maintain.svg"} title="Maintain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
