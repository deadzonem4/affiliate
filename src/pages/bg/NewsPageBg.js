import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import AllNews from '../../templates/bg/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const NewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <ApiData dataLink="https://dev.winbet-bg.com/api/bg/sliders">
         <MainSlider title="title_bg" description="description_bg" button1="button_text1_bg" button2="button_text2_bg"/>
      </ApiData>
      <CasinoBox 
        title="Примерен текст"
        text="Lorem Ipsum е елементарен примерен текст, 
          използван в печатарската и типографската индустрия."
        secOne="казино"
        secTwo="спорт"
        secThree="казино на живо"
      />
      <Breadcrumbs levelOne="Начало" levelTwo="Новини" levelTwoLink="/news"/>
      <div className="news-page">
        <div className="container">
          <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news">
            <AllNews read="Прочети >" title="Последни новини"/>
          </ApiData>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPageBg;
