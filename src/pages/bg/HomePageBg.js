import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';
import MainSliderBg from '../../components/bg/MainSliderBg.js';

const HomePageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<MainSliderBg registerbutton="Регистрация" logbutton="Вход"/>
			</MainLayoutBg>
    </div>
  );
}

export default HomePageBg;
