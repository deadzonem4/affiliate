import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import MainSlider from '../../components/bg/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import ApiData from '../../templates/ApiData.js';
import StorageDataBg from '../../templates/StorageDataBg.js';
import '../styles/main.css';
import {ReactTitle} from 'react-meta-tags';

const HomePageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <ReactTitle title={"Winbet - Начало"}/>
      <StorageDataBg dataLink="https://dev.winbet-bg.com/api/bg/sliders">
         <MainSlider title="title_bg" description="description_bg" button1="button_text1_bg" button2="button_text2_bg"/>
      </StorageDataBg>
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
		  <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news-slider">
        <NewsSlider
					title="Последни новини"
					button="Всички новини"
					date="date"
					description="short_description_bg"
				/>
      </ApiData>
			<ContactForm
        title ="Свържете се с нас"
        subtitle = "Eлементарен примерен текст в печатарската индустрия"
        button="Изпрати"
        name="Име"
        email="Имейл"
        subject="Относно"
        message="Съобщение"
        succeed="Вашето съобщение е изпратено успешно!"
      />
		</MainLayout>
  );
}

export default HomePageBg;
