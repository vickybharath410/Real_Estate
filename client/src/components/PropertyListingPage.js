import React from 'react';
import { useState,useEffect } from 'react';
import { TbEdit,TbEye } from "react-icons/tb";
import { Link } from 'react-router-dom';
import CommonPage from './CommonPage';
import './RealEstate.css';

function PropertyListingPage() {
    //to search PPDID
    const [PPDID, setPPDID] = useState("");
    // const [status, setStatus] = useState("Unsold");
    //fetch data
    const [propertyList,setPropertyList] = useState({
        property:[]
    });
    const [showProperty, setShowProperty] = useState(true)

    const changeStatus = (e) => {
        // console.log(e)
        if(e.target.innerHTML = "Unsold"){
            e.target.innerHTML = "Sold"
        }else{
            e.target.innerHTML = "Unsold"   
        }
       
        // console.log(e)
        
    }

    const getPropertyDetails = (e) => {
        e.preventDefault();
        console.log(PPDID)
        propertyList.property.map((data, index) => {
            if (data.ppdId === PPDID) {
                setShowProperty(false)
            }
        })
       
    }


    const getAllListedPropeties = async()=>{
    
        await fetch("http://localhost:8000/api/users/property",{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then(result=>setPropertyList(result));
    };


    useEffect(()=>{
        getAllListedPropeties()
    },[]);

    return (
        <CommonPage>
                <div className='operations'>
                    <div id="PPDID">
                        <form action="" method='GET' onSubmit={getPropertyDetails}>
                            <input className='searchinput' type="text" value={PPDID} name="searchPPD" placeholder='Search PPD ID' onChange={(e) => setPPDID(e.target.value)} />
                            <button className='searchbtn'>Search</button>
                        </form>
                    </div>
                    <button className='addPropertybtn'>
                     <Link to={"/form"}>+ Add Property</Link> 
                    </button>
                </div>

                <table className='property-table'>
                    <thead>
                    <tr className='tableHeader'>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th onClick={()=>setShowProperty(true)}>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days Left</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    
                    {showProperty ? 
                    propertyList.property.map((data,index)=>{
                        return <tbody key={index}>
                        <tr className='tableData'>
                            <td>{data.ppdId}</td>
                            <td>
                                <img src='/images/imagetag.png' alt='imagetag' className='imagetag'/>
                                </td>
                            <td>{data.property}</td>
                            <td>{data.contact}</td>
                            <td>{data.area}</td>
                            <td>{data.views}</td>
                            <td><button onClick={(e)=>changeStatus(e)} className='unSoldbtn'>Unsold</button></td>
                            <td>{data.daysLeft}</td>
                                <td className='edit'>
                                    {/* <img src='/images/eye.png' alt='eye' className='editImage' /> */}
                                    {/* <img src='/images/edit.png' alt='edit' className='editImage' /> */}
                                    <TbEye className="iconsEdit" />
                                    <TbEdit className="iconsEdit" />
                                </td>
                        </tr>
                    </tbody>
                    })
                    : 
                    propertyList.property.map((data, index) => {
                        if (data.ppdId === PPDID) {
                            // setShowProperty(false)
                            console.log(data.ppdId)
                            return <tbody key={index}>
                                <tr className='tableData'>
                                    <td>{data.ppdId}</td>
                                    <td>
                                        <img src='/images/imagetag.png' alt='imagetag' className='imagetag'/>
                                        </td>
                                    <td>{data.property}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.area}</td>
                                    <td>{data.views}</td>
                                    <td><button onClick={(e)=>changeStatus(e)} className='unSoldbtn'>Unsold</button></td>
                                    <td>{data.daysLeft}</td>
                                    <td className='edit'>
                                        {/* <img src='/images/eye.png' alt='eye' className='editImage' /> */}
                                        {/* <img src='/images/edit.png' alt='edit' className='editImage' /> */}
                                        <TbEye className="iconsEdit" />
                                        <TbEdit className="iconsEdit" />
                                    </td>
                                </tr>
                            </tbody>
                        }
                    })
                    }
                    
                </table>
        </CommonPage>
    )
}

export default PropertyListingPage