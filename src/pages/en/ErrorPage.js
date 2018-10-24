import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const ErrorPage = (props) => {

  return (
  	<div>
  		<button onClick={props.languageBg}>bg</button>
      <button onClick={props.languageEn}>en</button>
      <MainLayout>
				<h1>Error page</h1>
			</MainLayout>
    </div>
  );
}

export default ErrorPage;
