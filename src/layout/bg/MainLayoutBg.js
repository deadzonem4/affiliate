import React from "react";
import HeaderBg from './HeaderBg.js';
import FooterBg from './FooterBg.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';

const MainLayoutBg = (props) => {

    return (
      <div>
      	<Language bg={props.bg} en={props.en}/>
	      <HeaderBg/>
	      <main id="content">
	        {props.children}
	      </main>
	      <FooterBg/>
	    </div>
    );
}

export default MainLayoutBg;


