import React, { useState } from 'react';
import '../RealEstate.css';
import {Link} from "react-router-dom";
import CommonPage from '../CommonPage';
import PropertyNav from './PropertyNav';

export default function PropertyDetail({ nextStep, HandleFormData, prevStep, values }) {

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
            <label>Length</label>
            <input 
                type="text" 
                name="length" 
                placeholder='Example:10000'
                value={values.length || ""} 
                onChange={HandleFormData("length")}
            />
        </div>
        <div className='formInput'>
            <label>Breadth</label>
            <input 
                type="text" 
                name="breadth" 
                placeholder='Example:10000'
                value={values.breadth || ""} 
                onChange={HandleFormData("breadth")}
            />
        </div>
        <div className='formInput'>
            <label>Total Area</label>
            <input 
                type="text" 
                name="area" 
                placeholder='Example:10000'
                value={values.length * values.breadth || values.area || ""} 
                onChange={HandleFormData("area")}
            />
        </div>
        <div className='formInput'>
            <label>Area Unit</label>
            <input 
                type="text" 
                name="areaunit" 
                placeholder='Example:10000'
                // value={inputs.areaunit || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>No of BHK</label>
            <select name='bhk'>
                <option value="#">Select No of BHK</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of Floor</label>
            <select name='floor'>
                <option value="#">Select No of Floor</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Attached</label>
            <select name='attached'>
                <option value="#">Select Attached</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Western Toilet</label>
            <select name='westernToilet'>
                <option value="#">Select Western Toilet</option>
        </select>
        </div>
        <div className='formInput'>
            <label>Furnished</label>
            <select name='furnished'>
                <option value="#">Select Furnished</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Car Parking</label>
            <select name='carParking'>
                <option value="#">Select Car Parking</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Lift</label>
            <select name='lift'>
                <option value="#">Select Lift</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Electricity</label>
            <input 
                type="text" 
                name="electricity" 
                placeholder='Example:3 phase'
                // value={inputs.electricity || ""} 
                // onChange={handleChange}
            />
        </div>
        <div className='formInput'>
            <label>Facing</label>
            <select name='facing'>
                <option value="#">Select Facing</option>
            </select>
        </div>
        <br/>


        <div className='formInput'>
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
        </div>
        <div className='formInput'>
                <button className='saveBtn'>Save & Continue</button>
        </div>

        </section>
        
    </form>
    </div>
    </>
  )
}