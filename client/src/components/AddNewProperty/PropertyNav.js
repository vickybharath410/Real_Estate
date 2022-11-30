import React from 'react';
import '../RealEstate.css';
// import {NavLink} from 'react-router-dom';
import {
Nav,
NavLink,
NavSpan,
Bars,
NavMenu
} from './PropertyNavElements';

export default function PropertyNav({step, navStep}) {


	const changeStep = (event) => {
		const stepNav = event.currentTarget.id;
		console.log(stepNav);
		if(stepNav === "basic_info"){
			navStep(1);
		}
		else if(stepNav === "property_detail"){
			navStep(2);
		}
		else if(stepNav === "general_info"){
			navStep(3);
		}
		else if(stepNav === "location_info"){
			navStep(4);
		}

	}
return (
	<>
   

	<Nav>
		<Bars />

		<NavMenu>
		<NavLink id="basic_info"  className={`${ step === 1 ? "active" : "" }`} onClick={changeStep}>
			<NavSpan  className={`${ step === 1 ? "active" : "" }`}>1</NavSpan>Basic Info
		</NavLink>
		<NavLink id="property_detail"  className={`${ step === 2 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 2 ? "active" : undefined }`}>2</NavSpan>Property Detail
		</NavLink>
		<NavLink id="general_info"  className={`${ step === 3 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 3 ? "active" : undefined }`}>3</NavSpan>General Info
		</NavLink>
		<NavLink id="location_info"   className={`${ step === 4 ? "active" : undefined }`} onClick={changeStep}>
            <NavSpan  className={`${ step === 4 ? "active" : undefined }`}>4</NavSpan>Location Info
		</NavLink>
		</NavMenu>
	</Nav>


	</>
);
};

{/* <div className='addProperty'>
		<h3 className='addhead'>ADD NEW PROPERTY</h3>
		<div className='navbar'>
			<div className='navForm'><div className='num'>1</div> Basic Info</div>
			<div className='navForm'><div className='num'>2</div>Property Detail</div>
			<div className='navForm'><div className='num'>3</div>General Info</div>
			<div className='navForm'><div className='num'>4</div>Location Info</div>
		</div>

	</div> */}