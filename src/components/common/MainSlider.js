import React from "react";
import Slider from "react-slick";
import logo from '../../images/slider/logo.png';
import './styles/main.css';



class MainSlider extends React.Component {

  render() {
    const images = this.props.api.map((data, index) =>
      <div className="slide" key={index}>
        <img src={"https://dev.winbet-bg.com/uploads/images/sliders/" + data.image_name} alt=''/>
        <div className="slider-overlay">
          <img src={logo} alt={logo}/>
          <h2>{data.title_bg}</h2>
          <p>{data.description_bg} 
          </p>
          <div className={data.button_text1_bg == null ? 'slider-register-emty' : 'slider-register'}><span>{data.button_text1_bg}</span></div>
          <div className={data.button_text2_bg == null ? 'slider-log-in-emty' : 'slider-log-in'}><span>{data.button_text2_bg}</span></div>
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
      cssEase: 'linear'
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

