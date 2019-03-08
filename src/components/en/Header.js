import React from "react";
import MainMenu from '../common/MainMenu.js';
import LogoBox from './LogoBox.js';
import '../styles/main.css';

const Header = (props) => {

  return (
    <header>
      <MainMenu
        home="Home"
        lang="/en"
        about="About us"
        information="Information"
        news="News"
        contact="Contacts"
        terms="Terms and conditions"
        commission="Commission plan"
        faq="FAQ"
        betting="Responsible betting"
        />
      <LogoBox buttonReg="Registration" buttonLog="Log in" lang="/en"/>
    </header>
  );
}


export default Header;