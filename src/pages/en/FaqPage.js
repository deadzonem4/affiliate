import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const FaqPage = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/f-a-q" urlEn="/en/f-a-q"/>
      	<Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/en/information" levelThree="FAQ"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/faq">
      		<AboutContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default FaqPage;