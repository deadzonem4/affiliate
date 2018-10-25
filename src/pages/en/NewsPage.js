import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';



const NewsPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>News page</h1>
			</MainLayout>
    </div>
  );
}

export default NewsPage;

