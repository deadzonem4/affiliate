import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const InfoPageBg = (props) => {
  return (
  	<div>
      <MainLayout bg={props.languageBg} en={props.languageEn}>
      	<Breadcrumbs levelOne="Начало" levelTwo="Информация" levelTwoLink="/information"/>
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



