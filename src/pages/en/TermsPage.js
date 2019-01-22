import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const TermsPage = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
      	<Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/information" levelThree="Terms and Conditions"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/terms">
      		<AboutContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default TermsPage;