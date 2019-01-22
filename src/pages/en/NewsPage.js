import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';

const NewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <ApiData dataLink="https://dev.winbet-bg.com/api/en/sliders">
         <MainSlider title="title_en" description="description_en" button1="button_text1_en" button2="button_text2_en"/>
      </ApiData>
      <CasinoBox 
        title="Lorem ipsum dolor"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean euismod bibendum laoreet."
        secOne="casino"
        secTwo="sport"
        secThree="casino live"
      />
      <Breadcrumbs levelOne="Home" levelTwo="News" levelTwoLink="/news"/>
      <div className="news-page">
        <div className="container">
          <ApiData dataLink="https://dev.winbet-bg.com/api/en/news">
            <AllNews read="Read >" title="Latest news"/>
          </ApiData>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPageBg;
