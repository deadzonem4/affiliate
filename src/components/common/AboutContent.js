import React from "react";
import './styles/main.css';
import {ReactTitle} from 'react-meta-tags';

const AboutContent = (props) => {
  return (
    <div className="container">
      <ReactTitle title={"Winbet - " + props.api[0][props.title]}/>
      <div className="about-content">
        <h2 className="dark-title">{props.api[0][props.title]}</h2>
        <div className="title-red-line"></div>
        <div className="about-text">
          <div dangerouslySetInnerHTML={{__html: props.api[0][props.content]}} />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;

