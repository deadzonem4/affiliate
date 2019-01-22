import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const InfoPage = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
        <Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/information"/>
				<div className="container">
		      <div className="about-content">
		        <h2 className="dark-title">Information</h2>
		        <div className="title-red-line"></div>
		        <div className="about-text">
		        	<p>In this category, you will find the most useful information regarding our Affiliate program.
		        	We kindly advise you to check regularly our site for new promotions and implementations.</p>
		      	</div>
	    		</div>
	    	</div>
			</MainLayout>
    </div>
  );
}

export default InfoPage;

