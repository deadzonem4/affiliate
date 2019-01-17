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
        information="Информация"
        news="Новини"
        contact="Контакти"
        terms="Правила и условия"
        commission="Комисионна"
        faq="Често задавани въпроси"
        betting="Отговорно залагане"
        />
        <LogoBox buttonReg="Регистрация" buttonLog="Вход"/>
      </header>
    );
}


export default Header;