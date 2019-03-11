import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const AboutPageBg = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/about-us" urlEn="/en/about-us"/>
      	<Breadcrumbs levelOne="Начало" levelTwo="За нас" levelTwoLink="/bg/about-us"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/bg/aboutUs">
      		<AboutContent title="title_bg" content="description_bg"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default AboutPageBg;