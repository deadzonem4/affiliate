import React from "react";
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import SocialIcons from '../../components/common/SocialIcons.js';
import LatestNews from './LatestNews.js';
import WaitPageBg from '../../pages/bg/WaitPageBg.js';
import {Link} from "react-router-dom";
import '../styles/main.css';
import ImgsViewer from 'react-images-viewer'


class SingleNewsBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      isOpen: false
    };
    this.closeImgsViewer = this.closeImgsViewer.bind(this)
  }
  componentWillMount(){
    this.setState({ 
      loading: false
    });
    window.scrollTo(0, 0);
  }
  closeImgsViewer () {
    this.setState({
      isOpen: false
    })
  }
  openImgsViewer () {
    this.setState({
      isOpen: true
    })
  }
  render() {
    const newsIndex = parseInt(this.props.param);
    const next = newsIndex + 1;
  	if (this.state.loading) {
      return (
        <WaitPageBg/>
      );
    }
    return (
        <div className="single-atricle-page">
          <div className="container">
            <div className="single-news-title-date">
              <span>{this.props.api[this.props.param-1].date}</span>
            </div>
            <div className="single-article-navigation">
              <div className="single-article-navigation-buttons">
                <Link  to="/news">{"< Обратно"}</Link>
                <Link className={next > this.props.api.length ? "emty-block" : "" } to={next > this.props.api.length ? "/news" : "/article"+next}>{next > this.props.api.length ? "" : "Следваща >" }</Link>
              </div>
              <SocialIcons col=""/>
            </div>
            <div className="single-article-header">
              <h2 className="single-article-title">{this.props.api[this.props.param-1].title_bg}</h2>
              <h4 className="single-article-sub-title">{this.props.api[this.props.param-1].subtitle_bg}</h4>
            </div>
            <div className="row">
              <article className="single-article-box col-md-9">
                <div className="single-article-content">
                  <ImgsViewer
                    imgs={[{src: "https://dev.winbet-bg.com/uploads/images/news/" + this.props.api[this.props.param-1].image_name, alt: ''}]}
                    isOpen={this.state.isOpen}
                    onClose={this.closeImgsViewer}
                    backdropCloseable={true}
                    leftArrowTitle={"left"}
                    rightArrowTitle={"right"}
                    closeBtnTitle={"close"}
                    showImgCount={false}
                  />
                  <img onClick={(e) => this.openImgsViewer()} className="single-article-main-image" src={"https://dev.winbet-bg.com/uploads/images/news/" + this.props.api[this.props.param-1].image_name} alt={this.props.api[this.props.param-1].image_name}/>
                  <div dangerouslySetInnerHTML={{__html: this.props.api[this.props.param-1].description_bg}} />
                  <SingleNewsSlider info={this.props.api[this.props.param-1].photos}/>
                </div>
                <div className="single-article-about">
                  <h4>За Winbet</h4>
                  <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
                    типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
                    когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
                    тях книга с примерни шрифтове.
                  </p>
                </div>
              </article>
              <div className="col-md-3 latest-news-sidebar">
                <LatestNews data={this.props.api}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SingleNewsBg;



