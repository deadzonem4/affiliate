import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsBg from '../../templates/bg/SingleNewsBg.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';

const SingleNewsPageBg = (props) => {

  return (
    <MainLayout bg={props.languageBg} en={props.languageEn}>
          <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news">
            <SingleNewsBg param={props.match.params.index} />
          </ApiData>
    </MainLayout>
  );
}

export default SingleNewsPageBg;
