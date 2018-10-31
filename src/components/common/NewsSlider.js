import React from "react";
import Slider from "react-slick";
import './styles/main.css';
import { Link } from 'react-router-dom';

class NewsSlider extends React.Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 400,
      fade: true,
      cssEase: 'linear'
    };
  return (
    <div className="news-slider">
      <div className="news-slider-title">
        <h2>{this.props.title}</h2>
        <div className="title-white-line"></div>
      </div>
      <Slider {...settings} className="full-width-slider">
        <div className="slide">
          <h4>{this.props.date1}</h4>
          <p>{this.props.text1}</p>
        </div>
        <div className="slide">
          <h4>{this.props.date2}</h4>
          <p>{this.props.text2}</p>
        </div>
      </Slider>
      <Link className="all-news" to="/news">
          <span>{this.props.button}</span>
      </Link>
    </div>
  );
  }
}

export default NewsSlider;

