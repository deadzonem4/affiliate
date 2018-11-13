import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';



const ErrorPageBg = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Грешна страница</h1>
			</MainLayout>
    </div>
  );
}

export default ErrorPageBg;
