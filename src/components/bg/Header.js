import React from "react";
import MainMenu from '../common/MainMenu.js';
import LogoBox from './LogoBox.js';
import '../styles/main.css';

const Header = (props) => {

    return (
      <header>
        <MainMenu
        home="Начало"
        about="За нас"
        news="Новини"
        contact="Контакти"
        />
        <LogoBox buttonReg="Регистрация" buttonLog="Вход"/>
      </header>
    );
}


export default Header;