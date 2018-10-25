import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';
import MainSlider from '../../components/common/MainSlider.js';

const HomePageBg = (props) => {

  return (
  	<div>
      <MainLayoutBg bg={props.languageBg} en={props.languageEn}>
				<MainSlider 
					registerbutton="Регистрация" 
					logbutton="Вход" 
					text="Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
	            типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
	            когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
	            тях книга с примерни шрифтове." 
					title="победата е на върха на пръстите Ви!"
				/>
			</MainLayoutBg>
    </div>
  );
}

export default HomePageBg;
