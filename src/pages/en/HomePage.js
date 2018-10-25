import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const HomePage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Home page</h1>
			</MainLayout>
    </div>
  );
}

export default HomePage;
