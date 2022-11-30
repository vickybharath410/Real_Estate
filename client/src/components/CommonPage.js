import React from 'react';
import './RealEstate.css';
import { TbEye,TbBell, TbArrowBarUp, TbArrowBarToDown,TbTag,TbUser } from "react-icons/tb";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from 'react';
import Logout from './Logout';

function CommonPage({children}) {
    
const [showpages, setShowPages] = useState(false)
    const navigate = useNavigate();
  const [user,setUser] = useState({
    name:localStorage.getItem("name"),
    userid:localStorage.getItem("userid")
  })
  
  

  const handleLogout = () => {
        axios
      .get("http://localhost:8000/api/users/logout")
      .then((res) => {
        console.log(localStorage.getItem("token"));
        localStorage.clear();
        navigate("/");
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
      });
  
  };
  

    return (
        <section className='property'>
            <aside className='asideLeft'>
                <div><img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/88975523945059.5632b7d5654ae.png' alt='Logo' /></div>
                <tbody className='data'>
                    <tr>
                    <td><img className='icons' src='/images/property.png' alt='property'/></td>
                    <td className='open'>Property</td> 
                    </tr>
                    <tr>
                    <td><TbBell className="icons" /></td>
                    <td>Assistance</td> 
                    </tr>
                    <tr>
                    <td><TbArrowBarToDown className="icons" /></td>
                    <td>Received Interest</td>
                    </tr>
                    <tr>
                    <td><TbArrowBarUp className="icons" />
                        {/* <img className='icons' src='/images/sentinterest.png' alt='sentinterest'/> */}
                        </td>
                    <td> Send Interest</td>
                    </tr>
                    <tr>
                    <td><TbEye className="icons" /></td>
                    <td> Property Views</td>
                    </tr>
                    <tr>
                    <td><TbTag className="icons" /></td>
                    <td>Tariff Plan</td>
                    </tr>
                </tbody>
            </aside>
            <aside className='asideRight'>
                <header className='header'>
                    <div>USER ID : {user.userid}</div>
                    {/* <div onClick={console.log("Logout")}>Logout</div> */}
                    <div>
                    <TbUser className="iconsUsers" />
                    
                        USER NAME : {user.name}
                        <AiFillCaretDown
                            className="drop_down"
                            onClick={() => {
                                setShowPages(!showpages);
                            }}
                        />
                        {showpages ? <Logout /> : null}
                    </div>
                    {/* <div className='username'>
                    <img className='iconsUserName' src='/images/userName.png' alt='userName'/>
                    <select className='userName'>
                       <option value="UserName">
                        User Name : {user.name}</option>
                       <option value="Logout" onClick={handleLogout}>Logout</option>
                    </select>
                    </div> */}
                    
    
                </header>
                <div className='commonPage'>
                    {children}
                </div>
            </aside>

        </section>
    )
}

export default CommonPage