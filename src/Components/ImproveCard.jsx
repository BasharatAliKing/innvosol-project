import React from 'react'
import "../Utilities/ImproveCard.css";
export default function ImproveCard(props) {
  return (
    <>
       <div id='box' className="container">
        <h4>{props.title}</h4>
        <p>{props.para}</p>
      </div>
    </>
  )
}
