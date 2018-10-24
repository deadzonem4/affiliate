import React from "react";
import MainMenu from '../../components/en/MainMenu.js';
import LogoBox from '../../components/en/LogoBox.js';
import '../styles/main.css';

const Header = (props) => {

    return (
      <header>
        <MainMenu/>
        <LogoBox/>
      </header>
    );
}


export default Header;