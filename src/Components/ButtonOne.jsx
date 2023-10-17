import React from 'react'
import "../Utilities/buttons/ButtonOne.css";
export default function ButtonOne(props) {
  return (
    <>
        <button className='btnone'>{props.btnOne}</button>
    </>
  )
}
