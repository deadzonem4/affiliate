import React from "react";
import MainMenu from '../../components/common/MainMenu.js';
import LogoBox from '../../components/common/LogoBox.js';
import '../styles/main.css';

const Header = (props) => {

  return (
    <header>
      <MainMenu
        home="Home"
        about="About us"
        info="Information"
        promo="Promotions"
        news="News"
        contact="Contacts"
        />
      <LogoBox button="Registration"/>
    </header>
  );
}


export default Header;