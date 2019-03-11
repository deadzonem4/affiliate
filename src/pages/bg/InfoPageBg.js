import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import Language from '../../components/common/Language.js';

const InfoPageBg = (props) => {
  return (
  	<div>
      <MainLayout>
      	<Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/information" urlEn="/en/information"/>
      	<Breadcrumbs levelOne="Начало" levelTwo="Информация" levelTwoLink="/bg/information"/>
				<div className="container">
		      <div className="about-content">
		        <h2 className="dark-title">Информация</h2>
		        <div className="title-red-line"></div>
		        <div className="about-text">
		        	<p>В тази категория ще намерите най-важните теми и въпроси, относно нашата Партньорска програма. 
		        	Съветваме Ви редовно да проверявате нашия сайт, защото постоянно пускаме нови промоции и нововъведения.</p>
		      	</div>
	    		</div>
	    	</div>
			</MainLayout>
    </div>
  );
}

export default InfoPageBg;



