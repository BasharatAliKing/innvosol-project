import React from 'react'
import "../Utilities/Process.css";
import ButtonOne from "../Components/ButtonOne";
import MainHeading from "../Components/MainHeading";
import MainPara from "../Components/MainPara";
import ProcessBox from '../Components/ProcessBox';
import Footer from "../Layouts/Footer"
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
       {/* First Process idea */}
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
      {/* Second Process idea */}
      <section id="process-idea">
        <div className="container">
          <div className="row">
             <div className="col-md-6">
              <img src={process.env.PUBLIC_URL+"./anaylise-img.webp"} alt="My-Pic" width="100%"  />
               </div>
            <div className="col-md-6  text">
              <div className='idea-below'>02</div>
              <img src={process.env.PUBLIC_URL+"./process-icon.webp"} alt="My-Pic" />
              <h2>Analysis and Planning</h2>
               <MainPara mainpara="Once the idea has been nurtured, The Business Analysts & Product Managers collaboratively analyze the idea based on the market trends and look for the best solutions against each requirement"/>
               </div>
           
          </div>
        </div>
      </section>
      {/* Third Process idea */}
      <section id="process-idea">
        <div className="container">
          <div className="row">
             <div className="col-md-6  text">
              <div className='idea-below'>03</div>
              <img src={process.env.PUBLIC_URL+"./process-icon.webp"} alt="My-Pic" />
              <h2>UI/UX Designs</h2>
               <MainPara mainpara="After the analysis of the idea, the flow of the project is finalized. The design team will create mockup screens using the latest tools, based on the provided requirements. The mockup screens are then shown to the client for approval"/>
               </div>
               <div className="col-md-6">
              <img src={process.env.PUBLIC_URL+"./UI-Ux-design-img.webp"} alt="My-Pic" width="100%"  />
               </div>
           
           
          </div>
        </div>
      </section>
      {/* Fourth Process idea */}
      <section id="process-idea">
        <div className="container">
          <div className="row">
          <div className="col-md-6">
              <img src={process.env.PUBLIC_URL+"./Development-img.webp"} alt="My-Pic" width="100%"  />
               </div>
             <div className="col-md-6 fourth  text">
              <div className='idea-below'>04</div>
              <img src={process.env.PUBLIC_URL+"./process-icon.webp"} alt="My-Pic" />
              <h2>Development</h2>
               <MainPara mainpara="Following the approval of the wireframes, the development team will start working on the frontend and backend of the application. At InnvoSol, proper agile methodologies are followed to ensure best results."/>
               </div>     
          </div>
        </div>
      </section>
      {/* Fifth Process idea */}
      <section id="process-idea">
        <div className="container">
          <div className="row">
             <div className="col-md-6  text">
              <div className='idea-below'>05</div>
              <img src={process.env.PUBLIC_URL+"./process-icon.webp"} alt="My-Pic" />
              <h2>QA and Testing</h2>
               <MainPara mainpara="Quality is king at our place. We ensure that the customer gets what they want by using up to date testing methodologies and tools. This is to make sure that the project is working the way you intended it to."/>
               </div>   
               <div className="col-md-6">
              <img src={process.env.PUBLIC_URL+"./QAtesting-img.webp"} alt="My-Pic" width="100%" />
               </div>
          </div> 
        </div>
      </section>

      {/* Footer section here */}
      <Footer/>
    </>
  )
}
