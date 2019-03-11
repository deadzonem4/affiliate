import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const BettingPage = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/responsible-betting" urlEn="/en/responsible-betting"/>
      	<Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/en/information" levelThree="Responsible gaming"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/bettings">
      		<AboutContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default BettingPage;