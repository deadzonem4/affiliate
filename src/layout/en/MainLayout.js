import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';


const MainLayout = (props) => {

    return (
      <div>
	      <Header/>

	      <main id="content">
	        {props.children}
	      </main>
	      <Footer/>
	    </div>
    );
}

export default MainLayout;


