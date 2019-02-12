import React from "react";
import Slider from "react-slick";
import logo from '../../images/slider/logo.png';
import '../styles/main.css';

class MainSlider extends React.Component {
  render() {
    const images = this.props.ApiBg.map((data, index) =>
      <div className="slide" key={index}>
        <img src={"https://dev.winbet-bg.com/uploads/images/sliders/" + data.image_name} alt=''/>
        <div className="slider-overlay">
          <img src={logo} alt={logo}/>
          <h2>{data[this.props.title]}</h2>
          <div className="title-white-line"></div>
          <p>{data[this.props.description]} 
          </p>
          <div className={data[this.props.button1] == null ? 'slider-register-emty' : 'slider-register'}><span>{data[this.props.button1]}</span></div>
          <div className={data[this.props.button2] == null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{data[this.props.button2]}</span></div>
        </div>
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
      cssEase: 'linear',
      dots: true
    };
    return (
      <div className="main-slider">
        <Slider {...settings} className="full-width-slider">
          {images}
        </Slider>
      </div>
    );
  }
}

export default MainSlider;

