import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import CommissionContent from '../../components/common/CommissionContent.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const CommissionsPage = (props) => {
  return (
  	<div>
      <MainLayout>
        <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/commission" urlEn="/en/commission"/>
      	<Breadcrumbs levelOne="Home" levelTwo="Information" levelTwoLink="/en/information" levelThree="Commission plan"/>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/en/commissions">
      		<CommissionContent title="title_en" content="description_en"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default CommissionsPage;