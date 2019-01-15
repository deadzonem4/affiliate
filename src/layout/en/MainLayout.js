import React from "react";
import Header from '../../components/en/Header.js';
import Footer from '../../components/en/Footer.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';
import SocialBox from '../../components/en/SocialBox.js';
import ApiData from '../../templates/ApiData.js';

const MainLayout = (props) => {

    return (
      <div className="layout-wrapper">
        <Language bg={props.bg} en={props.en}/>
        <Header/>
        <main id="content">
          {props.children}
        </main>
        <SocialBox/>
        <ApiData dataLink="https://dev.winbet-bg.com/api/partners-logo">
          <Footer/>
        </ApiData>
      </div>
    );
}

export default MainLayout;



