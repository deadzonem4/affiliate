import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const TermsPageBg = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/terms-and-coditions" urlEn="/en/terms-and-coditions"/>
        <Breadcrumbs levelOne="Начало" levelTwo="Информация" levelTwoLink="/bg/information" levelThree="Правила и условия"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/bg/terms">
      		<AboutContent title="title_bg" content="description_bg"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default TermsPageBg;