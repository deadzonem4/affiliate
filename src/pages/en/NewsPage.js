import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import AllNews from '../../templates/en/AllNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';

const NewsPage = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
      <div className="news-page">
        <div className="container">
          <ApiData dataLink="https://dev.winbet-bg.com/api/en/news">
            <AllNews />
          </ApiData>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPage;
