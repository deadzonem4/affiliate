import React from "react";
import Slider from "react-slick";
import './styles/main.css';
import { Link } from 'react-router-dom';

class NewsSlider extends React.Component {

  render() {
    const slides = this.props.api.map((data, index) =>
      <div className="slide" key={index}>
          <h4>{data[this.props.date]}</h4>
          <p>{data[this.props.description]}</p>
      </div>
    );
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
        <h2 className="white-title">{this.props.title}</h2>
        <div className="title-white-line"></div>
      </div>
      <Slider {...settings} className="full-width-slider">
        {slides}
      </Slider>
      <Link className="all-news" to={this.props.link}>
          <span>{this.props.button}</span>
      </Link>
    </div>
    );
  }
}

export default NewsSlider;

