import React from "react";
import MainMenu from '../../components/common/MainMenu.js';
import LogoBox from '../../components/common/LogoBox.js';
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
        <LogoBox button="Регистрация"/>
      </header>
    );
}


export default HeaderBg;