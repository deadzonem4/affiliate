import React from "react";
import '../styles/main.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import LogModal from '../common/LogModal.js';
import MobileMenu from '../common/MobileMenu.js';

const LogoBox = (props) => {

  return (
    <div className="logo-box">
      <div className="logo-box-content">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo}  alt="Affiliate"/>
        </Link>
        <MobileMenu 
          home="Home"
          about="About us"
          news="News"
          contact="Contacts"
          regButton="Sign up"
          signButton="Log in"
          logButton="Log in"
          title="User login"
          user="Username"
          password="Password"
          information="Information"
          terms="Terms and conditions"
          commission="Commission"
          faq="FAQ"
          betting="Responsible betting"
        />
        <div className="logo-buttons">
          <LogModal button="Log in" logButton="Log in" title="User login" user="Username" password="Password"/>
          <a className="register" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
            <span>{props.buttonReg}</span>
          </a>
        </div>
      </div>
    </div>
  );
}


export default LogoBox;