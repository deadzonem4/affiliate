import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';


const MainLayout = (props) => {

    return (
      <div>
	      <Header/>
		    <button onClick={props.languageBg}>bg</button>
        <button onClick={props.languageEn}>en</button>
	      <main id="content">
	        {props.children}
	      </main>
	      <Footer/>
	    </div>
    );
}

export default MainLayout;


