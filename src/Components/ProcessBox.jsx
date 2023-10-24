import React from 'react'
import "../Utilities/ProcessBox.css";
export default function ProcessBox(props) {
  return (
    <>
     <div id="process-box">
     <img src={props.img} alt="My-Pic"  />
      <h3>{props.title}</h3>
     </div>
    </>
  )
}
