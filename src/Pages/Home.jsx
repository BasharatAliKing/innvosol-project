import React from 'react';
import "../Utilities/Home.css";
import ButtonOne from '../Components/ButtonOne';
import ButtonTwo from "../Components/ButtonTwo";
import MainPara from '../Components/MainPara';
import MainHeading from '../Components/MainHeading';
import ServiceCards from '../Components/ServiceCards';
import { RiComputerLine } from "react-icons/ri";
import { MdPhoneAndroid } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import {FaPhoneAlt  } from "react-icons/fa";
import {FaLocationDot  } from "react-icons/fa6";
import {TfiEmail  } from "react-icons/tfi";
import DiscussCard from '../Components/DiscussCard';
import ImproveCard from '../Components/ImproveCard';
import HomeSlider from '../Components/HomeSlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ModalEngagement from '../Components/ModalEngagement';
import Form from '../Components/Form';
import Footer from '../Layouts/Footer';

export default function Home() {
    var settings = {
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                autoplay:true,
              slidesToShow: 2,
              slidesToScroll: 1,
              speed:500,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 592,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
       {/* Home Section Start Here */}
       <section id="Home">
        <div className="container">
            <div className="row">
            <div className="col-12 home-text"> 
             <h1><span>Digital Marketing</span> Agency that Delivers Success</h1>
          <MainPara mainpara="We are an experienced team equipped with the latest tools, delivering web, software, mobile apps, and digital solutions. We prioritize communication to ensure timely project completion and exceed expectations. Choose us as your partner for personalized service that will help your business grow." /> 
          <div className=" buttons">
           <ButtonOne btnOne="Get in touch"/>
          <ButtonTwo btnTwo="View our portfolio"/>
           </div>
           </div>
            </div>
        </div>
       </section>
       {/* services section start here */}
       <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-12 services-text">
                <MainHeading mainheading="Our Services"/>
               <MainPara mainpara="We are committed to our vision of providing high-level service and value to clients through enhanced services that include diligence."/>
                </div>
                <div className="col-lg-4 col-md-6">
                <ServiceCards img={<RiComputerLine size="30px"  />} title="Web Design & Development" para="We’ve reached significant milestones in providing the best web development services." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={<MdPhoneAndroid size="30px" />} title="Mobile App Development" para="Need a mobile app developed? We develop mobile apps for IOS and Android Operating System." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={<AiFillGift size="30px" />} title="E-Commerce" para="We are thought leaders in creating rewarding through responsive web design and emerging UX technologies." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={<FaPaintBrush size="30px" />} title="Brand Strategy & UI/UX" para="We have skilled graphic designers who can portray and develop your ideas perfectly." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={<HiUserGroup size="30px"  />} title="Staff Augmentation" para="Hiring a skilled developer at a reasonable price takes months, not weeks." />
              </div>
              <div className="col-lg-4 col-md-6">
                <ServiceCards img={<FaCloudDownloadAlt size="30px"  />}title="Cloud Application Development" para="To build cloud apps, use affordable and popular cloud tools that offer flexibility, security, and reliability." />
              </div>
            </div>
        </div>
       </section>
       {/* Discussed Card section */}
       <DiscussCard title="Discussing a Project?" para="We’re happy to help you. Send us a message for a free online meeting with the top software development company in the USA, and we’ll make a customized plan for your project." btn="Let's Talk" />
        {/* business-grow section */}
        <section id="business-grow">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 first">
                    <h1>We Can Help Different Types Of <span>Businesses Grow.</span></h1>
                    <MainPara mainpara="We create useful software for different businesses that can help them work better. Our software solutions are innovative and groundbreaking."/>
                     <div className="row">
                        <div className="col-md-6">
                             <ul className='navbar-nav'>
                     <li className='nav-item'><BiCheck className='icon'/>Custom Software Development </li>
                    <li className='nav-item'><BiCheck className='icon'/>E-commerce Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Oil & Gas Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Point of Sale Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Shipping & Logistics </li>
                    <li className='nav-item'><BiCheck className='icon'/>Enterprise Resource Planning </li>
                    <li className='nav-item'><BiCheck className='icon'/>Real Estate & Housing IT Solutions </li>
                     </ul>
                        </div>
                        <div className="col-md-6">
                             <ul className='navbar-nav'>
                    <li className='nav-item'><BiCheck className='icon'/>Custom Software Development </li>
                    <li className='nav-item'><BiCheck className='icon'/>E-commerce Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Oil & Gas Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Point of Sale Solutions </li>
                    <li className='nav-item'><BiCheck className='icon'/>Shipping & Logistics </li>
                    <li className='nav-item'><BiCheck className='icon'/>Enterprise Resource Planning </li>
                    <li className='nav-item'><BiCheck className='icon'/>Real Estate & Housing IT Solutions </li>
                  </ul>
                        </div>
                     </div>
                    
                    
                    </div>
                    <div id='pic' className="offset-lg-1 col-lg-6">
                    <img className='upper-one' src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic" width="22%" />
             <img className='main-img' src={process.env.PUBLIC_URL+"./Busines-Growth.webp"} alt="My-Pic" width="100%" />
            <img className='upper-two' src={process.env.PUBLIC_URL+"./wifi-signal.svg"} alt="my-pic" width="15%" />
                    </div>
                </div>
            </div>
        </section>
        {/* Improve section */}
        <section id="improve">
            <div className="container">
                <div className="row">
                    <div className="col-12"><MainHeading mainheading="We help you strengthen and improve your abilities." /></div>
                    <div className="col-12 mt-5">
            <div className="row">
              <div className="col-md-5" id='first'>
                <h3>Custom Software Development</h3>
                <p>We solve software problems by making customized solutions that work well and can be trusted. We also create new and different solutions.</p>
                <h3>Included with...</h3>
                <ul className='navbar-nav'>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Competitive Edge </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Customized Resolutions </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Timely Dispatch </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Improved Effectiveness </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Client Protection </li>
                  <li className='nav-item'> <i className='fa fa-check-square-o'></i>Sustainability and Confidentiality </li>
                </ul>
              </div>
              <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-6"> <ImproveCard title="CMS Development" para="We’ll make the customer experience better by using dependable business software." /></div>
                    <div className="col-md-6"> <ImproveCard title="Module Development" para="“Easy-to-use solutions that give better outcomes.”" /></div>
                    <div className="col-md-6 mt-4"> <ImproveCard title="API Integrations" para="Make tasks easier and improve how users interact with technology using automation." /></div>
                    <div className="col-md-6 mt-4"> <ImproveCard title="Support & Maintenence" para="We design software and offer maintenance services without any interruptions." /></div>
                  </div>
                  </div>
            </div>
          </div>
                </div>
            </div>
        </section>
        {/* core Section */}
        <section id="Core">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <MainHeading mainheading="Our Core Strengths"/>
                    <MainPara mainpara="We are a skilled and experienced software development agency with extensive knowledge of the latest technologies, languages, and frameworks. Our expert developers can create innovative solutions for web, mobile, and desktop applications that exceed expectations and are fully customized to meet your business needs. Choose us for top-notch quality software and let us bring your vision to life with our expertise and experience."/>
                    <div className="slider">
          <div className="slide">
            <div className="item">Website Development</div>
            <div className="item">Mobile App Development</div>
            <div className="item">Custom Software Development</div>
            <div className="item">BlockChain 3.0</div>
            <div className="item"> UI/UX Design</div>
            <div className="item"> DevOps</div>
            <div className="item"> Digital Marketing</div>
            <div className="item"> WordPress</div>
            <div className="item"> Shopify</div>
            <div className="item"> WoCommerce</div>
            <div className="item"> Vue.JS</div>
            <div className="item">Quality Assurance</div>
            <div className="item"> Business Development</div>
            <div className="item">Website Development</div>
            <div className="item">Mobile App Development</div>
            <div className="item">Custom Software Development</div>
            <div className="item">BlockChain 3.0</div>
            <div className="item"> UI/UX Design</div>
            <div className="item"> DevOps</div>
            <div className="item"> Digital Marketing</div>
            <div className="item"> WordPress</div>
            <div className="item"> Shopify</div>
            <div className="item"> WoCommerce</div>
            <div className="item"> Vue.JS</div>
            <div className="item">Quality Assurance</div>
            <div className="item"> Business Development</div>
            <div className="item">Website Development</div>
            <div className="item">Mobile App Development</div>
            <div className="item">Custom Software Development</div>
            <div className="item">BlockChain 3.0</div>
            <div className="item"> UI/UX Design</div>
            <div className="item"> DevOps</div>
            <div className="item"> Digital Marketing</div>
            <div className="item"> WordPress</div>
            <div className="item"> Shopify</div>
            <div className="item"> WoCommerce</div>
            <div className="item"> Vue.JS</div>
            <div className="item">Quality Assurance</div>
            <div className="item"> Business Development</div>
          </div>
          </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Hire section */}
        <section id="hire">
        <DiscussCard title="You can hire an InnovSol employee quickly." para="Get access to the best tech talent worldwide! Say goodbye to the tiresome hiring process and welcome expert developers, designers, and engineers to make your tech experience even better. Hire now to unlock the full potential of your projects." btn="Hire A Pro Innvosol" />  
        </section>
        {/* customer-says section */}
        <section id="customer-says">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <MainHeading mainheading="What our customer says about us"/>
          <MainPara mainpara="Testimonials from Satisfied Clients: Hear What They Have to Say About Our Services!"/>
          <Slider {...settings}>
            <div className="col-md-12 ">
              <HomeSlider cls="shadow a" title="Syed Husnain R" subtitle="United States(UK)" para=" The right resource is critical to success. Asad is fast, responsive, and his technical skills are on point. His overall professionalism is first class. Highly recommended." />
            </div>
            <div className="col-md-12">
              <HomeSlider cls="shadow b" title="Ahmed Z" subtitle="Germany" para="  Highly Recommended Freelancer! Thank you for your exceptional work on our WordPress website. Your efforts have not only met but exceeded our expectations, and I look forward to our continued collaboration." />
            </div>
            <div className="col-md-12">
              <HomeSlider cls="shadow c" title="Hatim Q" subtitle="United Kingdom(UK)" para="  Great job on the landing page, followed instructions accurately with great output." />
            </div>
            <div className="col-md-12 ">
              <HomeSlider cls="shadow a" title="Syed Husnain R" subtitle="United States(UK)" para=" The right resource is critical to success. Asad is fast, responsive, and his technical skills are on point. His overall professionalism is first class. Highly recommended." />
            </div>
            <div className="col-md-12">
              <HomeSlider cls="shadow b" title="Ahmed Z" subtitle="Germany" para="  Highly Recommended Freelancer! Thank you for your exceptional work on our WordPress website. Your efforts have not only met but exceeded our expectations, and I look forward to our continued collaboration." />
            </div>
            <div className="col-md-12">
              <HomeSlider cls="shadow c" title="Hatim Q" subtitle="United Kingdom(UK)" para="  Great job on the landing page, followed instructions accurately with great output." />
            </div>
        </Slider>
                    </div>
                </div>
            </div>
        </section>
        {/* Engagement section */}
        <section id="engagement">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
            <img className='upper-one' src={process.env.PUBLIC_URL+"./main-logo.svg"} alt="My-Pic" width="22%" />
            <img className='main' src={process.env.PUBLIC_URL+"./engagement.webp"} alt="My-Pic" width="100%" />
            <img className='upper-two' src={process.env.PUBLIC_URL+"./wifi-signal.svg"} alt="my-pic" width="15%" />
                    </div>
                    <div className="col-lg-6 second">
            <MainHeading mainheading="Engagement Models"/>
            <MainPara mainpara="We solve your biggest business pains and help you succeed.Here is how we can work together"/>
            <ModalEngagement clas="one"  icon={<HiUserGroup/>} title="Staff/Resource Augmentation" para="Our approach to staff augmentation aims to assist organizations in securing the necessary expertise for their projects." />
            <ModalEngagement clas="two"  icon={<FaProductHunt/>} title="Produce Development" para="Our project-based model ensures end-to-end product development, led by a team of expert software engineering consultants." />
            <ModalEngagement  clas="three" icon={<FaRegLightbulb/>} title="Dadicated Development Team" para="Highly skilled developers delivering top-notch development services with a focus on quality." />
          </div>
                </div>
            </div>
        </section>
        {/* Quick-support section */}
        <section id="quick-support">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
          <h3>Quick Support</h3>
          <MainHeading mainheading="Get in Touch Today!"/>
          <MainPara mainpara="We provide scalable services that prioritize transparency, honesty, and building trust with our clients. Our solutions empower you to make informed decisions and achieve your business goals."/>
          <ul className='navbar-nav'>
            <li className='nav-item'><FaPhoneAlt className='logo'/> +923094758983 </li>
            <li className='nav-item'><TfiEmail className='logo'/> Email Now! </li>
            <li className='nav-item'><FaLocationDot className='logo'/> Locations</li>
          </ul>
        </div>
        <div id='for' className="offset-lg-1 col-lg-5">
         <Form heading="Fill out the form and we'll be in touch ASAP." />
        </div>
                </div>
            </div>
        </section>
        {/* footer section */}
        <Footer/>
    </>
  )
}
