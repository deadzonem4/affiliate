import React from "react";
import MainMenu from '../common/MainMenu.js';
import LogoBox from '../common/LogoBox.js';
import '../styles/main.css';

const HeaderBg = (props) => {

    return (
      <header>
        <MainMenu
        home="Начало"
        about="За нас"
        info="Информация"
        promo="Промоции"
        news="Новини"
        contact="Контакти"
        />
        <LogoBox buttonReg="Регистрация" buttonLog="Вход"/>
      </header>
    );
}


export default HeaderBg;