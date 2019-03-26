import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import MainSlider from '../../components/bg/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import ServiceBox from '../../components/common/ServiceBox.js';
import NewsSlider from '../../components/common/NewsSlider.js';
import ContactForm from '../../components/common/ContactForm.js';
import ApiData from '../../templates/ApiData.js';
import StorageSliderBg from '../../templates/StorageSliderBg.js';
import '../styles/main.css';
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const HomePageBg = (props) => {

  return (
    <MainLayout>
    	<Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/" urlEn="/en/"/>
      <ReactTitle title={"Winbet - Начало"}/>
      <StorageSliderBg dataLink="https://dev.winbet-bg.com/api/bg/sliders">
        <MainSlider title="title_bg" description="description_bg" button1="button_text1_bg" button2="button_text2_bg"/>
      </StorageSliderBg>
			<CasinoBox 
				title="Нашите продукти"
				text="Станете част от семейството на Winbet и се възползвайте от шанса за допълнителна печалба!"
				secOne="казино"
				secTwo="спорт"
				secThree="казино на живо"
			/>
			<ServiceBox
				title="Присъединете се към нашата партньорска програма!"
				description="Разнообразни продукти и много възможности"

				box1Title="Регистрация"
				box1Text="Партньорската програма на Winbet Ви предлага продукти с най-високо качество: слот игри, казино на живо, спортни залози. Множество платежни методи, съпорт и иновативен софтуер."

				box2Title="Реклама"
				box2Text="Winbet предоставя голямо разнообразие от рекламни материали на своите партньори. Достигнете до нови клиенти и се развивайте заедно с нас."

				box3Title="Печалба"
				box3Text="Осигурете си доходи чрез реклама. Ще получавате процент от изиграните средства на клиентите, които са се регистрирали от Вашата реклама."
			/>
		  <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news-slider">
        <NewsSlider
					title="Последни новини"
					button="Всички новини"
					date="date"
					description="short_description_bg"
					link="/bg/news"
				/>
      </ApiData>
			<ContactForm
        title ="Свържете се с нас"
        subtitle = "Ако имате въпроси може да се свържете с нас като попълните и изпратите формата "
        button="Изпрати"
        name="Име"
        email="Имейл"
        subject="Заглавие"
        message="Съобщение"
        succeed="Вашето съобщение е изпратено успешно!"
      />
		</MainLayout>
  );
}

export default HomePageBg;
