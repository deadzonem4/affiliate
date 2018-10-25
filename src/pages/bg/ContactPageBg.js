import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const ContactPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Страница контакти</h1>
			</MainLayoutBg>
    </div>
  );
}

export default ContactPageBg;


