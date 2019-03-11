import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const TermsPage = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/terms-and-coditions" urlEn="/en/terms-and-coditions"/>
      	<Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/en/information" levelThree="Terms and Conditions"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/terms">
      		<AboutContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default TermsPage;