import React from "react";
import Slider from "react-slick";
import slide1 from '../../images/slider/slide1.jpg';
import slide2 from '../../images/slider/slide2.jpg';
import logo from '../../images/slider/logo.png';
import './styles/main.css';

class MainSlider extends React.Component {
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
    <div className="main-slider">
      <Slider {...settings} className="full-width-slider">
        <div className="slide">
          <img src={slide1} alt={slide1}/>
          <div className="slider-overlay">
            <img src={logo} alt={logo}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.text} 
            </p>
            <div className={this.props.registerbutton == null ? 'slider-register-emty' : 'slider-register'}><span>{this.props.registerbutton}</span></div>
            <div className={this.props.logbutton == null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{this.props.logbutton}</span></div>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt={slide2}/>
          <div className="slider-overlay">
            <h2>{this.props.title2}</h2>
            <p>{this.props.text2} 
            </p>
            <div className={this.props.registerbutton2 == null ? 'slider-register-emty' : 'slider-register'}><span>{this.props.registerbutton2}</span></div>
            <div className={this.props.logbutton2 == null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{this.props.logbutton2}</span></div>
          </div>
        </div>
      </Slider>
    </div>
  );
  }
}

export default MainSlider;

