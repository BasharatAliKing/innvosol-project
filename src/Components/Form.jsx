import React,{useState} from 'react';
import "../Utilities/Form.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export default function Form(props) {
  const [phone, setphone] = useState()
  return (
    <>

       <div id="Form-alone">
        <div className="container">
            <div className="row">
            <form className='shadow p-4 ' >
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
            <div className="row mt-3">
              <div className="col-md-6"><input type="text" className='form-control' placeholder='First Name' required/></div>
              <div className="col-md-6"><input type="text" className='form-control lname' placeholder='Last Name' required/></div>
            </div>
            <input type="email" placeholder='Email Address' className='form-control mt-4' required/>
            <PhoneInput  placeholder="Enter phone number" country={'us'} inputProps={{required:true}} required/>
            <textarea className='form-control mt-4' name="" id="" cols="20" placeholder='Tell us more about your projects?' rows="5"></textarea>
            <button className='btn form-control mt-4'>Submit Form</button>
          </form>
            </div>
        </div>
      </div>
    </>
  )
}
