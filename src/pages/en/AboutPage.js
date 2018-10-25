import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const AboutPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>About page</h1>
			</MainLayout>
    </div>
  );
}

export default AboutPage;

