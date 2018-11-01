import React from "react";
import './styles/main.css';

const ServiceBox = (props) => {

  return (
    <div className="service-placeholder">
      <div className="container">
        <div className="service-title-box">
          <h2 className="dark-title">{props.title}</h2>
          <div className="title-red-line"></div>
          <p className="subtitle-text">{props.description}</p>
        </div>
        <div className="service-content">
          <div className="row">
            <div className="service-box col-sm-4">
              <i className="fas fa-dollar-sign"></i>
              <h4>{props.box1Title}</h4>
              <p>{props.box1Text}</p>
            </div>
            <div className="service-box col-sm-4">
              <i className="far fa-thumbs-up"></i>
              <h4>{props.box2Title}</h4>
              <p>{props.box2Text}</p>
            </div>
            <div className="service-box col-sm-4">
              <i className="fas fa-headphones"></i>
              <h4>{props.box3Title}</h4>
              <p>{props.box3Text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ServiceBox;