import React from "react";
import MainMenu from '../common/MainMenu.js';
import LogoBox from './LogoBox.js';
import '../styles/main.css';

const Header = (props) => {

  return (
    <header>
      <MainMenu
        home="Home"
        about="About us"
        news="News"
        contact="Contacts"
        />
      <LogoBox buttonReg="Registration" buttonLog="Log in" />
    </header>
  );
}


export default Header;