import React from 'react';
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsBg from '../../templates/bg/SingleNewsBg.js'
import '../styles/main.css';
import ApiData from '../../templates/ApiData.js';

const SingleNewsPageBg = (props) => {

  return (
    <MainLayout>
      <ApiData dataLink="https://dev.winbet-bg.com/api/bg/news">
        <SingleNewsBg languageBg={props.languageBg} languageEn={props.languageEn} param={props.match.params.index} />
      </ApiData>
    </MainLayout>
  );
}

export default SingleNewsPageBg;
