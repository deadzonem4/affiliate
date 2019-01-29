import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import CommissionContent from '../../components/common/CommissionContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const CommissionsPageBg = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
      	<Breadcrumbs levelOne="Начало" levelTwo="Информация" levelTwoLink="/information" levelThree="Комисионна"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/bg/commissions">
      		<CommissionContent title="title_bg" content="description_bg"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default CommissionsPageBg;