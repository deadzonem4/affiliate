import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';
import MainSlider from '../../components/common/MainSlider.js';
import CasinoBox from '../../components/common/CasinoBox.js';


const NewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <ApiData dataLink="https://dev.winbet-bg.com/api/bg/sliders">
         <MainSlider title="title_bg" description="description_bg" button1="button_text1_bg" button2="button_text2_bg"/>
      </ApiData>
      <CasinoBox 
        title="Lorem ipsum dolor"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean euismod bibendum laoreet."
        secOne="casino"
        secTwo="sport"
        secThree="casino live"
      />
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
