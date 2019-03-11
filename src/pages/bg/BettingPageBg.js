import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const BettingPageBg = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/responsible-betting" urlEn="/en/responsible-betting"/>
        <Breadcrumbs levelOne="Начало" levelTwo="Информация" levelTwoLink="/bg/information" levelThree="Отговорно залагане"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/bg/bettings">
      		<AboutContent title="title_bg" content="description_bg"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default BettingPageBg;