import React from "react";
import Slider from "react-slick";
import './styles/main.css';
import ImgsViewer from 'react-images-viewer'

class SingleNewsSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currImg: 0
    };
    this.closeImgsViewer = this.closeImgsViewer.bind(this)
    this.openImgsViewer = this.openImgsViewer.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrev = this.gotoPrev.bind(this)
  }
  gotoPrev () {
    this.setState({
      currImg: this.state.currImg - 1
    })
  }
  gotoNext () {
    this.setState({
      currImg: this.state.currImg + 1
    })
  }
  closeImgsViewer () {
    this.setState({
      currImg: 0,
      isOpen: false,
    })
  }
  openImgsViewer (index, e) {
    this.setState({
      currImg: index,
      isOpen: true,
    })
  }

  render() {
    const images = this.props.info.map((img, index) =>
      <div className={img===''? "slide not-visible": "slide"} key={index}>
        <img onClick={(e) => this.openImgsViewer(index, e)} className={"single-news-slider-img " + index} src={"https://dev.winbet-bg.com/uploads/images/newsImages/" + img} alt={img}/>
      </div>
    );
    const addProps = this.props.info.map((link, index) =>
     <img src={"https://dev.winbet-bg.com/uploads/images/newsImages/" + link} alt="winbet-gallery"/>
    );
    var imgProps = [];
    for(var i=0; i<addProps.length;i++){      
      imgProps.push(addProps[i].props)  
    };
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
        <ImgsViewer
          imgs={imgProps}
          currImg={this.state.currImg}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrev}
          onClickNext={this.gotoNext}
          onClose={this.closeImgsViewer}
          backdropCloseable={true}
          leftArrowTitle={"left"}
          rightArrowTitle={"right"}
          closeBtnTitle={"close"}
        />
        <Slider {...settings} className="single-news-slider">
          {images}
        </Slider>
      </div>
    );
  }
}

export default SingleNewsSlider;

