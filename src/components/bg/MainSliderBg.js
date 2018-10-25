import React from "react";
import Slider from "react-slick";
import slide1 from '../../images/slider/slide1.jpg';
import slide2 from '../../images/slider/slide2.jpg';
import logo from '../../images/slider/logo.png';
import '../styles/main.css';

class MainSliderBg extends React.Component {
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
            <h2>победата е на върха на пръстите Ви!</h2>
            <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
            типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
            когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
            тях книга с примерни шрифтове. 
            </p>
            <div className="slider-register"><span>{this.props.registerbutton}</span></div>
            <div className="slider-log-in"><span>{this.props.logbutton}</span></div>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt={slide2}/>
          <div className="slider-overlay">
            <img src={logo} alt={logo}/>
            <h2>победата е на върха на пръстите Ви!</h2>
            <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
            типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
            когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
            тях книга с примерни шрифтове. 
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

export default MainSliderBg;

