import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const ErrorPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Error page</h1>
			</MainLayout>
    </div>
  );
}

export default ErrorPage;
