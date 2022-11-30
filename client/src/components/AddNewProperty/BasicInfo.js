import React, { useState } from 'react';
import '../RealEstate.css'
import {Link} from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';
{/*********import view page  */}

export default function BasicInfo( {nextStep, HandleFormData, values }) {


const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
  };

  return (
    <>
    {/* <PropertyNav/> */}
    <div className='card'>
    <form method='POST' action='#' onSubmit={submitFormData}>
        <section className='formSection'>
        <div className='formInput'>
            <label>Property Type</label>
            <select name="property"
             value={values.property} 
            // value={}
             onChange={HandleFormData("property")}>
                <option>Select Property Type</option>
                <option value="Plot">Plot</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Negotable</label>
            <select name='negotable'>
                <option value="#">Select Negotable</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Price</label>
            <input 
                type="text" 
                name="price" 
                placeholder='Example:10000'
                // value={inputs.price} 
            />
        </div>
        <div className='formInput'>
            <label>Ownership</label>
            <select name='ownership'>
                <option value="#">Select Ownership</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Age</label>
            <select name='property_age'>
                <option value="#">Select Property Age</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Approved</label>
            <select name='approved'>
                <option value="#">Property Approved</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Property Description</label>
            <input 
            type="text" 
            name="description" 
            // value={inputs.description} 
            // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Bank Loan</label>
            <select name='bank loan'>
                <option value="#">Bank Loan</option>
        </select>
        </div>

{/* Vidhis code for linking */}
        <div className='formInput'>
        <Link to={"/propertyListingPage"}><button className='cancelBtn'>Cancel</button></Link>
        </div>
        
        <div className='formInput'>
            {/* <Link style={{textDecoration: 'none'}} to={{pathname:"/property_detail",
        data:inputs}}> */}
                <button type='submit' className='saveBtn'>Save & Continue</button>
            {/* </Link> */}
            </div>

            
        </section>
        
    </form>
    </div>
    </>
  )
}