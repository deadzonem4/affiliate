import React from "react";
import Slider from "react-slick";
import logo from '../../images/slider/logo.png';
import '../styles/main.css';

class MainSlider extends React.Component {
  render() {
    const images = this.props.ApiEn.map((data, index) =>
      <div className="slide" key={index}>
        <img src={"https://dev.winbet-bg.com/uploads/images/sliders/" + data.image_name} alt=''/>
        <div className="slider-overlay">
          <img src={logo} alt={logo}/>
          <h2>{data[this.props.title]}</h2>
          <div className="title-white-line"></div>
          <p>{data[this.props.description]} 
          </p>
          <a target="_blank" rel="noopener noreferrer" href={data.button_1_en_url} className={data[this.props.button1] === '' ? 'slider-register-emty' : 'slider-register'}><span>{data[this.props.button1]}</span></a>
          <a target="_blank" rel="noopener noreferrer" href={data.button_2_en_url} className={data[this.props.button2] === '' ? 'slider-log-in-emty' : 'slider-log-in'}><span>{data[this.props.button2]}</span></a>
        </div>
      </div>
    );
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 8000,
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

