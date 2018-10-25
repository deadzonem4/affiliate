import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const ErrorPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Грешна страница</h1>
			</MainLayoutBg>
    </div>
  );
}

export default ErrorPageBg;
