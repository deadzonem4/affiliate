import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import AllNews from '../../templates/bg/AllNews.js'
import '../styles/main.css';
import NewsData from '../../templates/bg/NewsData.js';


const NewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <div className="news-page">
        <div className="container">
          <NewsData>
            <AllNews />
          </NewsData>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPageBg;
