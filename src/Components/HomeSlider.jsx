import React from 'react'
import {AiFillStar} from "react-icons/ai";
import "../Utilities/HomeSlider.css";
import MainPara from './MainPara';

export default function HomeSlider(props) {
  return (
    <>
     <section id='slider-below' className={props.cls}>
     <div className="stars">
      <AiFillStar color='#f0ad4e' />
      <AiFillStar color='#f0ad4e'/>
      <AiFillStar color='#f0ad4e'/>
      <AiFillStar color='#f0ad4e'/>
      <AiFillStar color='#f0ad4e'/>
      </div>
      <h2>{props.title}</h2>
      <span>{props.subtitle}</span>
      <MainPara mainpara={props.para} />
     </section>
    </>
  )
}
