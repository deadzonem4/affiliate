import React from "react";
import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/main.css';
import Language from '../../components/common/Language.js';

const MainLayout = (props) => {

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

export default MainLayout;


