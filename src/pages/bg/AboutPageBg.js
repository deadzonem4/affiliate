import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const AboutPageBg = (props) => {

  return (
  	<div>
  		<button onClick={props.languageBg}>bg</button>
      <button onClick={props.languageEn}>en</button>
      <MainLayoutBg>
				<h1>За нас</h1>
			</MainLayoutBg>
    </div>
  );
}

export default AboutPageBg;

