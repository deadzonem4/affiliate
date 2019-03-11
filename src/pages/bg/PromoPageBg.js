import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import Language from '../../components/common/Language.js';

const PromoPageBg = (props) => {

  return (
  	<div>
      <MainLayout>
      <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/information" urlEn="/en/information"/>
				<h1>Страница промоции</h1>
			</MainLayout>
    </div>
  );
}

export default PromoPageBg;



