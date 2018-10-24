import React from "react";
import MainMenuBg from '../../components/bg/MainMenuBg.js';
import LogoBoxBg from '../../components/bg/LogoBoxBg.js';
import '../styles/main.css';

const HeaderBg = (props) => {

    return (
      <header>
        <MainMenuBg/>
        <LogoBoxBg/>
      </header>
    );
}


export default HeaderBg;