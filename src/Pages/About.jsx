import React from 'react';
import "../Utilities/About.css";
import ContactCards from '../Components/ContactCards';
import Footer from '../Layouts/Footer';
export default function About() {
  return (
    <>
      <section id="About">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-1.webp"}alt="First slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-2.webp"}alt="Second slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-1.webp"}alt="third slide" width="100%"/>
    </div>
    <div class="carousel-item">
    <img class="d-block  w-100" src={process.env.PUBLIC_URL+"./About-2.webp"}alt="Fourth slide" width="100%"/>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}
