import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';

const HomePageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Начална страница</h1>
			</MainLayoutBg>
    </div>
  );
}

export default HomePageBg;
