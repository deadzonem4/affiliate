import React from "react";
import Slider from "react-slick";
import './styles/main.css';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

class SingleNewsSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      visible: false,
      imgLink: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    this.setState({
      visible: true,
      imgLink: e.target.getAttribute("src")
    });
  }

  render() {
    const images = this.props.info.map((img, index) =>
      <div className="slide" key={index}>
        <img onClick={this.toggle} className={"single-news-slider-img " + index} src={"https://dev.winbet-bg.com/uploads/images/newsImages/" + img} alt={img}/>
      </div>
    );

    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      infinite: false,
      speed: 400,
      fade: false,
      arrows: true,
      cssEase: 'linear'
    };
    return (
      <div>
        <Viewer 
          visible={this.state.visible}
          onClose={() => { this.setState({ visible: false }); } }
          images={[{src: this.state.imgLink, alt: ''}]}
        />
        <Slider {...settings} className="single-news-slider">
          {images}
        </Slider>
      </div>
    );
  }
}

export default SingleNewsSlider;

