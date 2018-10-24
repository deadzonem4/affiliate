import React from "react";
import '../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const LogoBox = (props) => {

    return (
      <div className="logo-box">
	      <div className="container">
	      	<Link className="navbar-brand" to="/">
	      		<img className="logo" src={logo}  alt="Affiliate"/>
	        </Link>
	      </div>
      </div>
    );
}


export default LogoBox;