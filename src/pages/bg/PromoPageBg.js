import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';



const PromoPageBg = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Страница промоции</h1>
			</MainLayout>
    </div>
  );
}

export default PromoPageBg;



