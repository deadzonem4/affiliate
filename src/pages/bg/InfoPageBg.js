import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';



const InfoPageBg = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Информационна страница</h1>
			</MainLayout>
    </div>
  );
}

export default InfoPageBg;



