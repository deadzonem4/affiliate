import React from "react";
import Slider from "react-slick";
import './styles/main.css';
import { Link } from 'react-router-dom';

class SingleNewsSlider extends React.Component {
  render() {
    const images = this.props.info.map((img, index) =>
      <div className="slide" key={index}>
        <img className="single-news-slider-img" src={"http://dev.winbet-bg.com/uploads/images/newsImages/" + img.link}/>
      </div>
    );
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      speed: 400,
      fade: false,
      arrows: true,
      cssEase: 'linear'
    };
  return (
      <Slider {...settings} className="single-news-slider">
        {images}
      </Slider>
  );
  }
}

export default SingleNewsSlider;

