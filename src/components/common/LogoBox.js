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
        <div className="logo-buttons">
          <a className="log-in" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
            <span>{props.buttonLog}</span>
          </a> 
        	<a className="register" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
      			<span>{props.buttonReg}</span>
        	</a>
        </div>
      </div>
    </div>
  );
}


export default LogoBox;