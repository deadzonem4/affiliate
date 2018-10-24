import React from "react";
import HeaderBg from './HeaderBg.js';
import FooterBg from './FooterBg.js';

const MainLayoutBg = (props) => {

    return (
      <div>
	      <HeaderBg/>
		    <button onClick={props.languageBg}>bg</button>
        <button onClick={props.languageEn}>en</button>
	      <main id="content">
	        {props.children}
	      </main>
	      <FooterBg/>
	    </div>
    );
}

export default MainLayoutBg;


