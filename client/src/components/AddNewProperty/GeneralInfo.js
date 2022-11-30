import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';

export default function GeneralInfo({ nextStep, HandleFormData, prevStep, values }) {


const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
   
  };

  return (
  <>
    {/* <PropertyNav/> */}
    <div className='card'>
    <form method='POST' action='#'  onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Owner</label>
            <select name='owner'>
                <option value="#">Owner</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Mobile</label>
            <input 
                type="text" 
                name="mobile" 
                placeholder='Enter Mobile Number'
                value={values.mobile || ""} 
                onChange={HandleFormData("mobile")}
            />
        </div>
        <div className='formInput'>
            <label>Posted By</label>
            <select name='postedBy'>
                <option value="#">Posted By</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Sale Type</label>
            <select name='sale'>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Featured Package</label>
            <select name='featuredPackage'>
                <option value="#">Please Select</option>
            </select>
        </div>
        <div className='formInput'>
            <label>PPD Package</label>
            <select name='ppdPackage'>
                <option value="#">Please Select</option>
        </select>
        </div>
        <div className='formInput'>
            <span className='eclipseCamera'>
                {/* <img src={require("/images/eclipse.png")} alt="select folder"/> */}
                <img src='/images/camera.png' alt='camera' className='camera'/>
            </span>
            <span className='cameraText'>Add Photo</span>
        </div>
        <br/>


        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/property_detail"}> */}
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
                {/* </Link> */}
        </div>
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={"/location_info"}> */}
                <button className='saveBtn' type='submit'>Save & Continue</button>
                {/* </Link> */}
        </div>

        </section>
        
    </form>
    </div>
    </>
  )
}