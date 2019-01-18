import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import ApiData from '../../templates/ApiData.js';
import AboutContent from '../../components/common/AboutContent.js';

const BettingPageBg = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
      	<ApiData dataLink="https://dev.winbet-bg.com/api/bg/bettings">
      		<AboutContent title="title_bg" content="description_bg"/>
      	</ApiData>
			</MainLayout>
    </div>
  );
}

export default BettingPageBg;