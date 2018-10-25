import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';


const PromoPage = (props) => {

  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
				<h1>Promo page</h1>
			</MainLayout>
    </div>
  );
}

export default PromoPage;

