import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const ContactPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Contact page</h1>
			</MainLayout>
    </div>
  );
}

export default ContactPage;

