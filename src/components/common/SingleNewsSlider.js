import React from "react";
import Slider from "react-slick";
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import './styles/main.css';

class SingleNewsSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      imgLink: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    this.setState({
      modal: !this.state.modal,
      imgLink: e.target.getAttribute("src")
    });
   
  }

  render() {
    const images = this.props.info.map((img, index) =>
      <div className="slide" key={index}>
        <img onClick={this.toggle} className={"single-news-slider-img " + index} src={"http://dev.winbet-bg.com/uploads/images/newsImages/" + img.link} alt={img.link}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="article-image-view">
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <img  src={this.state.imgLink} alt="winbet news"/>
          </ModalBody>
        </Modal>
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

