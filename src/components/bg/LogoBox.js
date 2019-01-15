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
          home="Начало"
          about="За нас"
          news="Новини"
          contact="Контакти"
          regButton="Регистрация"
          signButton="Вход"
          logButton="вход"
          title="Попълнете вашите данни"
          user="Потребител"
          password="Парола"
        />
        <div className="logo-buttons">
          <LogModal button="вход" logButton="вход" title="Попълнете вашите данни" user="Потребител" password="Парола"/>
        	<a className="register" rel="noopener noreferrer" target="_blank" href="https://affiliates.winbetaffiliates.bg/signup.php">
      			<span>{props.buttonReg}</span>
        	</a>
        </div>
      </div>
    </div>
  );
}


export default LogoBox;