import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';



const NewsPageBg = (props) => {

  return (
  	<div>
  		<button onClick={props.languageBg}>bg</button>
      <button onClick={props.languageEn}>en</button>
      <MainLayoutBg>
				<h1>Страница новини</h1>
			</MainLayoutBg>
    </div>
  );
}

export default NewsPageBg;


