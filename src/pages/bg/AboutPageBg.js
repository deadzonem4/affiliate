import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const AboutPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>За нас</h1>
			</MainLayoutBg>
    </div>
  );
}

export default AboutPageBg;

