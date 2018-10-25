import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const PromoPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Страница промоции</h1>
			</MainLayoutBg>
    </div>
  );
}

export default PromoPageBg;



