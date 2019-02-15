import React from "react";
import Header from '../../components/bg/Header.js';
import Footer from '../../components/bg/Footer.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';
import SocialBox from '../../components/bg/SocialBox.js';
import StorageFooter from '../../templates/StorageFooter.js';
import Cookie from '../../components/common/Cookie.js';

const MainLayout = (props) => {

    return (
      <div className="layout-wrapper">
      	<Language bg={props.bg} en={props.en}/>
	      <Header/>
	      <main id="content">
	        {props.children}
	      </main>
	      <SocialBox/>
			  <StorageFooter dataLink="https://dev.winbet-bg.com/api/partners-logo">
	      	<Footer/>
	      </StorageFooter>
	      <Cookie text="Този сайт използва бисквитки, за да подобри представянето" button="Разбрах"/>
	    </div>
    );
}

export default MainLayout;


