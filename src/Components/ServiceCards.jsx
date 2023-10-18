import React from 'react'
import "../Utilities/ServiceCards.css";
export default function ServiceCards(props) {
  return (
    <>
      <div className="media">
  <div className='main-img'><img src={props.img} alt="" /></div>
  <div className="media-body">
    <h5 className="mt-0">{props.title}</h5>
    <p>{props.para}</p>
  </div>
</div>
    </>
  )
}
