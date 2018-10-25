import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const NewsPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Страница новини</h1>
			</MainLayoutBg>
    </div>
  );
}

export default NewsPageBg;



