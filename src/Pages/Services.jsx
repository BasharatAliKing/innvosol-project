import React from 'react';
import ServiceCards from '../Components/ServiceCards';
import MainHeading from '../Components/MainHeading';
import MainPara from '../Components/MainPara';
import "../Utilities/Services.css";
import ButtonOne from '../Components/ButtonOne';
import Footer from '../Layouts/Footer';
export default function Services() {
  return (
    <>
      {/* Section services */}
      <section id="Services">
        <div className="container">
          <div className="row">
            <div className="col-12 main-services">
              <h1 className='below-heading'>Services</h1>
              <MainHeading mainheading="Our Services" />
              <MainPara mainpara="We are committed to our vision of providing high-level service and value to clients through enhanced services that include due diligence"/>
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./desktop.png"} title="Web Design & Development" para="We’ve reached significant milestones in providing the best web development services." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./smartphone.png"} title="Mobile App Development" para="Need a mobile app developed? We develop mobile apps for IOS and Android Operating System." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./giftbox.png"} title="E-Commerce" para="We are thought leaders in creating rewarding through responsive web design and emerging UX technologies." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./paint-brush.png"} title="Brand Strategy & UI/UX" para="We have skilled graphic designers who can portray and develop your ideas perfectly." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./man.png"} title="Staff Augmentation" para="Hiring a skilled developer at a reasonable price takes months, not weeks." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={process.env.PUBLIC_URL+"./cloud-computing.png"}title="Cloud Application Development" para="To build cloud apps, use affordable and popular cloud tools that offer flexibility, security, and reliability." />
              </div>
                    </div>
                      </div>
        </section>

        {/* Conversation section */}
        <section id="conversation">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <MainHeading mainheading="Let’s Start A Conversation."/>
                                <ButtonOne btnOne="Schedule a free Consultation" />
                    </div>
                </div>
            </div>
        </section>
        {/* services tech */}
        <section id="services-tech">
            <div className="container">
                <div className="row">
                    <MainHeading mainheading="Our Tech Stack for Software Solutions."/>
                    <MainPara mainpara="We are a skilled and experienced software development agency with extensive knowledge of the latest technologies, languages, and frameworks. Our expert developers can create innovative solutions for web, mobile, and desktop applications that exceed expectations and are fully customized to meet your business needs. Choose us for top-notch quality software and let us bring your vision to life with our expertise and experience."/>
                    <div className="slider">
          <div className="slide">
            <div className="item">PHP</div>
            <div className="item">Java</div>
            <div className="item">IOS</div>
            <div className="item">React Native</div>
            <div className="item">MEAN</div>
            <div className="item">Laravel</div>
            <div className="item">WordPress</div>
            <div className="item">Shopify</div>
            <div className="item">Vue.Js</div>
            <div className="item">WoCommerce</div>
            <div className="item">PHP</div>
            <div className="item">Java</div>
            <div className="item">IOS</div>
            <div className="item">React Native</div>
            <div className="item">MEAN</div>
            <div className="item">Laravel</div>
            <div className="item">WordPress</div>
            <div className="item">Shopify</div>
            <div className="item">Vue.Js</div>
            <div className="item">WoCommerce</div>
            <div className="item">PHP</div>
            <div className="item">Java</div>
            <div className="item">IOS</div>
            <div className="item">React Native</div>
            <div className="item">MEAN</div>
            <div className="item">Laravel</div>
            <div className="item">WordPress</div>
            <div className="item">Shopify</div>
            <div className="item">Vue.Js</div>
            <div className="item">WoCommerce</div>
          </div>
          </div>
                </div>
            </div>
        </section>
          {/* Footer section */}
          <Footer/>
    </>
  )
}
