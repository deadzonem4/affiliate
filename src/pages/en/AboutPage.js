import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const AboutPage = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/about-us" urlEn="/en/about-us"/>
      	<Breadcrumbs levelOne="Home" levelTwo="About us" levelTwoLink="/en/about-us"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/aboutUs">
      		<AboutContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default AboutPage;