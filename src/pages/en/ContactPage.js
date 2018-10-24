import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const ContactPage = (props) => {

  return (
  	<div>
  		<button onClick={props.languageBg}>bg</button>
      <button onClick={props.languageEn}>en</button>
      <MainLayout>
				<h1>Contact page</h1>
			</MainLayout>
    </div>
  );
}

export default ContactPage;

