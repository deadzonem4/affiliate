import React from "react";
import Header from '../../components/en/Header.js';
import Footer from '../../components/en/Footer.js';
import '../styles/main.css';
import SocialBox from '../../components/en/SocialBox.js';
import StorageFooter from '../../templates/StorageFooter.js';
import Cookie from '../../components/common/Cookie.js';

const MainLayout = (props) => {

    return (
      <div className="layout-wrapper">
        <Header/>
        <main id="content">
          {props.children}
        </main>
        <SocialBox/>
        <StorageFooter dataLink="https://dev.winbet-bg.com/api/partners-logo">
          <Footer/>
        </StorageFooter>
        <Cookie text="This website uses cookies to enhance the user experience." button="Agree"/>
      </div>
    );
}

export default MainLayout;



