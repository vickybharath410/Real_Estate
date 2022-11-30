import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #FFFFFF;
width:70%;
margin:5% 13%;
box-shadow: 10px 14px 70px rgba(0, 0, 0, 0.03);
border-radius: 200px;
transition: 0.3s;
display: flex;
justify-content: space-between;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled.div`

display: flex;
align-items: center;
text-decoration: none;
padding: 0.8rem 1rem;
cursor: pointer;
box-sizing: border-box;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;
color: #AAAAAA;
&.active {
	
	background: #6AB4F8;
box-shadow: 0px 13px 25px rgba(0, 0, 0, 0.15);
border-radius: 500px;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;

color: #FFFFFF;
}
`;


export const NavSpan = styled.div`

display: flex;
align-items: center;
text-decoration: none;
padding: 5px 18px;
margin-right: 0.4rem;
cursor: pointer;
box-sizing: border-box;
border-radius: 100%;
width: 10%;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;
background-color: #E1F9F4;
color: #A6A6A6;
&.active {
	border-radius: 100%;
    width: 10%;
    padding: 5px 18px;
    text-align:center ;
    color: #0F0F0F;
    background-color: #FFFFFF;
    box-sizing: border-box;
    margin-right: 0.4rem;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
/*margin-right: -24px;*/
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;