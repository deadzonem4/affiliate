import React from "react";
import Slider from "react-slick";
import slide1 from '../../images/slider/slide1.jpg';
import logo from '../../images/slider/logo.png';
import slide2 from '../../images/slider/slide2.jpg';
import '../styles/main.css';

class MainSlider extends React.Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 400,
      fade: true,
      cssEase: 'linear'
    };
  return (
    <div className="main-slider">
      <Slider {...settings} className="full-width-slider">
        <div className="slide">
          <img src={slide1} alt={slide1}/>
          <div className="slider-overlay">
            <img src={logo} alt={logo}/>
            <h2>victory is at the edge of your fingers!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <div className="slider-register"><span>{this.props.registerbutton}</span></div>
            <div className="slider-log-in"><span>{this.props.logbutton}</span></div>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt={slide2}/>
          <div className="slider-overlay">
            <img src={logo} alt={logo}/>
            <h2>victory is at the edge of your fingers!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>
            <div className="slider-register"><span>{this.props.registerbutton}</span></div>
            <div className="slider-log-in"><span>{this.props.logbutton}</span></div>
          </div>
        </div>
      </Slider>
    </div>
  );
  }
}

export default MainSlider;

