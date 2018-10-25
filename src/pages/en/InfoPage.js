import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const InfoPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Info page</h1>
			</MainLayout>
    </div>
  );
}

export default InfoPage;

