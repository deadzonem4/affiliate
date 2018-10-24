import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const ContactPageBg = (props) => {

  return (
  	<div>
  		<button onClick={props.languageBg}>bg</button>
      <button onClick={props.languageEn}>en</button>
      <MainLayoutBg>
				<h1>Страница контакти</h1>
			</MainLayoutBg>
    </div>
  );
}

export default ContactPageBg;


