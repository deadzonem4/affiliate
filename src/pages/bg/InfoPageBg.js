import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const InfoPageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<h1>Информационна страница</h1>
			</MainLayoutBg>
    </div>
  );
}

export default InfoPageBg;



