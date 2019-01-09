import React from 'react';
import MainLayout from '../../layout/en/MainLayout.js';
import SingleNews from '../../templates/en/SingleNews.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';

const SingleNewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
          <ApiData dataLink="https://dev.winbet-bg.com/api/en/news">
            <SingleNews param={props.match.params.index} />
          </ApiData>
    </MainLayout>
  );
}

export default SingleNewsPageBg;
