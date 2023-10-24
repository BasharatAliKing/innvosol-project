import React from 'react'
import "../Utilities/ModalEngagement.css";
export default function ModalEngagement(props) {
  return (
    <> 
        <div id={props.clas} class="media  ">
       <div className='counts'>{props.count}</div>
          <img className='arrow' src={process.env.PUBLIC_URL+"./arrow.png"} alt="My-Pic" />
   <div className="media-body">
   <div className='icon-modal'>{props.icon}</div>
  <div class="media-body">
    <h5 class="mt-0">{props.title}</h5>
    <p>{props.para}</p>
   </div>
  </div>
</div>
    </>
  )
}
