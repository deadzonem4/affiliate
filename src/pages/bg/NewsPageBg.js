import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import AllNews from '../../templates/bg/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';


const NewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <div className="news-page">
        <div className="container">
          <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news">
            <AllNews />
          </ApiData>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPageBg;
