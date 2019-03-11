import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import SingleNews from '../../templates/en/SingleNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';

const SingleNewsPage = (props) => {

  return (
    <MainLayout>
      <ApiData dataLink="https://dev.winbet-bg.com/api/en/news">
        <SingleNews languageBg={props.languageBg} languageEn={props.languageEn} param={props.match.params.index} />
      </ApiData>
    </MainLayout>
  );
}

export default SingleNewsPage;
