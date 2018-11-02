import React from "react";
import Header from '../../components/bg/Header.js';
import Footer from '../../components/bg/Footer.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';

const MainLayoutBg = (props) => {

    return (
      <div>
      	<Language bg={props.bg} en={props.en}/>
	      <Header/>
	      <main id="content">
	        {props.children}
	      </main>
	      <Footer/>
	    </div>
    );
}

export default MainLayoutBg;


