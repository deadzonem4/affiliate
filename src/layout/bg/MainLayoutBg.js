import React from "react";
import HeaderBg from './HeaderBg.js';
import FooterBg from './FooterBg.js';
import '../styles/main.css';

const MainLayoutBg = (props) => {

    return (
      <div>
	      <HeaderBg/>
	      <main id="content">
	        {props.children}
	      </main>
	      <FooterBg/>
	    </div>
    );
}

export default MainLayoutBg;


