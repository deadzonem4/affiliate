import React from "react";
import './styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const LogoBox = (props) => {

  return (
    <div className="logo-box">
      <div className="logo-box-content">
      	<Link className="navbar-brand" to="/">
      		<img className="logo" src={logo}  alt="Affiliate"/>
        </Link>
      	<a className="register" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
    			<span>{props.button}</span>
      	</a>
      </div>
    </div>
  );
}


export default LogoBox;