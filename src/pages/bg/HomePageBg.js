import React from 'react';
import MainLayoutBg from '../../layout/bg/MainLayoutBg.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import SocialBox from '../../components/bg/SocialBox.js';

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
				<CasinoBox 
					title="Примерен текст"
					text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия."
					secOne="казино"
					secTwo="спорт"
					secThree="казино на живо"
				/>
				<ServiceBox
					title="Слоган заглавие"
					description="Eлементарен примерен текст в печатарската индустрия"

					box1Title="Заглавие 1"
					box1Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"

					box2Title="Заглавие 2"
					box2Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"

					box3Title="Заглавие 3"
					box3Text="Lorem Ipsum е елементарен примерен текст, 
						използван в печатарската и типографската индустрия, стандарт от около 1500 година, когато неизвестен печатар взема"
				/>
				<NewsSlider
					title="Последни новини"
					button="Всички новини"
					date1="29/10/2018"
					text1="Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
	            типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
	            когато неизвестен печатар."

					date2="21/10/2018"
					text2="Lorem Ipsum е индустриален стандарт от около 1500 година, 
	            когато неизвестен печатар. Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
	            типографската индустрия. "
				/>
				<ContactForm
          title ="Свържете се с нас"
          subtitle = "Eлементарен примерен текст в печатарската индустрия"
          button="Изпрати"
          name="Име"
          email="Имейл"
          subject="Относно"
          message="Съобщение"
        />
        <SocialBox/>
			</MainLayoutBg>
    </div>
  );
}

export default HomePageBg;
