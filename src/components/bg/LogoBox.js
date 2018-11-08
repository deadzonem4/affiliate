import React from "react";
import '../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import LogModal from '../common/LogModal.js';

const LogoBox = (props) => {

  return (
    <div className="logo-box">
      <div className="logo-box-content">
      	<Link className="navbar-brand" to="/">
      		<img className="logo" src={logo}  alt="Affiliate"/>
        </Link>
        <div className="logo-buttons">
          <LogModal button="вход" logButton="вход" title="Заглавие" user="Потребител" password="Парола"/>
        	<a className="register" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
      			<span>{props.buttonReg}</span>
        	</a>
        </div>
      </div>
    </div>
  );
}


export default LogoBox;