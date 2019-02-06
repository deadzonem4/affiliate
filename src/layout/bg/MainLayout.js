import React from "react";
import Header from '../../components/bg/Header.js';
import Footer from '../../components/bg/Footer.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';
import SocialBox from '../../components/bg/SocialBox.js';
import ApiData from '../../templates/ApiData.js';
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
			  <ApiData dataLink="https://dev.winbet-bg.com/api/partners-logo">
	      	<Footer/>
	      </ApiData>
	      <Cookie text="Този сайт използва бисквитки, за да подобри представянето" button="Разбрах"/>
	    </div>
    );
}

export default MainLayout;


