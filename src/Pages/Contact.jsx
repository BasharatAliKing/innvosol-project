import React from 'react';
import MainHeading from "../Components/MainHeading";
import MainPara from "../Components/MainPara";
import "../Utilities/Contact.css";
import ContactCards from '../Components/ContactCards';
import { HiOutlineMail } from "react-icons/hi";
import { AiFillWechat } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import DiscussCard from "../Components/DiscussCard";
import Form from "../Components/Form";
import ButtonOne from '../Components/ButtonOne';
import Footer from "../Layouts/Footer";
export default function Contact() {
  return (
    <>
      {/* section Contact-us start here */}
      <section id="Contact">
        <div className="container">
            <div className="row">
                <div className="col-12 text-contact">
                    <MainHeading mainheading="Contact Us For Quality Business Support."/>
                    <MainPara mainpara="Do you want to talk about your project with us? We have flexible and skilled team members who can work on your projects and are always available to assist you."/>
                </div>
                <div className="row">
              <div className="col-lg-4 col-md-6">
                <ContactCards icon={<AiFillWechat/>} title="Chat With Us" para="We have Social Experts available to help you from Monday to Friday in real-time." btn="Chat With Us" />
              </div>
              <div className="col-lg-4 col-md-6">
                <ContactCards icon={<HiOutlineMail/>} title="Email Us" para="Just send us an email at info@innvosol.com and we'll get back to you in less than a day." btn="Email Us" />
              </div>
              <div className="col-lg-4 col-md-6">
                <ContactCards icon={<IoCallSharp/>} title="Give us a Call" para="Call us. Our knowledgeable staff is available Monday through Friday." btn="+923094758783" />
              </div>
            </div>
        </div>
        </div>
      </section>
      {/* Contact-hire section */}
      <section id="contact-hire">
      <DiscussCard title="You can hire an InnovSol employee quickly." para="Get access to the best tech talent worldwide! Say goodbye to the tiresome hiring process and welcome expert developers, designers, and engineers to make your tech experience even better. Hire now to unlock the full potential of your projects." btn="Hire A Pro Innvosol" />  
      </section>
      {/* contact-form section */}
      <section id="contact-form">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mt-3">
                <img className='img' src={process.env.PUBLIC_URL+"./contact-us.webp"} alt="My-Pic" />
                </div>
                <div className="col-lg-6">
                    <Form heading="Let's talk about your project and make your ideas come true!" para="Fill out the info below and we’ll contact you to talk about your project needs."/>
                </div>

            </div>
        </div>
      </section>
      {/* contact looking for job section */}
      <section id="contact-job">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <MainHeading mainheading="Looking for Job"/>
                   <a href="/Carrier"> <ButtonOne btnOne="Apply Now"/></a>
                </div>
            </div>
        </div>
      </section>
      {/* Contact map section */}
      <section id="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675032335!2d-0.12209412427053895!3d51.503189711011956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1696865893216!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      {/* contact footer section */}
      <Footer/>

    </>
  )
}
