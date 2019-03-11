import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';
import StorageSliderEn from '../../templates/StorageSliderEn.js';
import MainSlider from '../../components/en/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

const NewsPageBg = (props) => {

  return (
    <MainLayout>
      <Language bg={props.languageBg} en={props.languageEn} urlBg="/bg/news" urlEn="/en/news"/>
      <ReactTitle title="Winbet - News"/>
      <StorageSliderEn dataLink="https://dev.winbet-bg.com/api/en/sliders">
         <MainSlider title="title_en" description="description_en" button1="button_text1_en" button2="button_text2_en"/>
      </StorageSliderEn>
      <CasinoBox 
        title="Lorem ipsum dolor"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean euismod bibendum laoreet."
        secOne="casino"
        secTwo="sport"
        secThree="casino live"
      />
      <Breadcrumbs levelOne="Home" levelTwo="News" levelTwoLink="/en/news"/>
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
