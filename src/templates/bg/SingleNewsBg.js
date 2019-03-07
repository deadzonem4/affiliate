import React from "react";
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import ShareButtons from '../../components/common/ShareButtons.js';
// import LatestNews from './LatestNews.js';
import WaitPageBg from '../../pages/bg/WaitPageBg.js';
import NewsErrorPage from '../../pages/bg/NewsErrorPage.js';
import {Link} from "react-router-dom";
import '../styles/main.css';
import ImgsViewer from 'react-images-viewer'
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import {ReactTitle} from 'react-meta-tags';

class SingleNewsBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      isOpen: false,
      newsId: 0
    };
    this.closeImgsViewer = this.closeImgsViewer.bind(this);
    this.nextNews = this.nextNews.bind(this);
    this.latestClick = this.latestClick.bind(this)
  }
  componentWillMount(){
    this.setState({ 
      loading: false
    });
    window.scrollTo(0, 0);
    localStorage.getItem('curNews') && this.setState({
      newsId: localStorage.getItem('curNews')
    });
  }
  nextNews(){
    localStorage.setItem('curNews', `${parseInt(this.state.newsId) + 1}`);
    localStorage.getItem('curNews') && this.setState({
      newsId: localStorage.getItem('curNews')
    });
  }
  latestClick(event) {
    localStorage.setItem('curNews', event.target.getAttribute('value'));
    localStorage.getItem('curNews') && this.setState({
      newsId: localStorage.getItem('curNews')
    });
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
    const url = window.location.href.split("/");
    const lastSegment = url.pop() || url.pop();
    console.log(lastSegment);
    const next = parseInt(this.state.newsId);
    const imgLink = "https://dev.winbet-bg.com/uploads/images/news/" + this.props.api[this.state.newsId].image_name;
    const title = this.props.api[this.state.newsId].title_bg;
    const subTitle = this.props.api[this.state.newsId].subtitle_bg;
    console.log(subTitle);
  	if (this.state.loading) {
      return (
        <WaitPageBg/>
      );
    }
    else if(subTitle !== lastSegment){
      return (
        <NewsErrorPage/>
      );
    }
    return (
      <div>
        <ReactTitle title={"Winbet - " + title}/>
        <Breadcrumbs levelOne="Начало" levelTwo="Новини" levelTwoLink="/news" levelThree={title}/>
        <div className="single-atricle-page">
          <div className="container">
            <div className="single-news-title-date">
              <span>{this.props.api[this.state.newsId].date}</span>
            </div>
            <div className="single-article-navigation">
              <div className="single-article-navigation-buttons">
                <Link  to="/news">{"< Обратно"}</Link>
                <Link onClick={this.nextNews} className={next + 1 >= this.props.api.length ? "emty-block" : "" } to={next + 1 >= this.props.api.length ? this.props.api[next].subtitle_bg : this.props.api[next+1].subtitle_bg}>{next > this.props.api.length ? "" : "Следваща >" }</Link>
              </div>
              <ShareButtons link={window.location.href}/>
            </div>
            <div className="single-article-header">
              <h2 className="single-article-title">{title}</h2>
              <h4 className="single-article-sub-title">{subTitle}</h4>
            </div>
            <div className="row">
              <article className="single-article-box col-md-9">
                <div className="single-article-content">
                  <ImgsViewer
                    imgs={[{src: imgLink, alt: ''}]}
                    isOpen={this.state.isOpen}
                    onClose={this.closeImgsViewer}
                    backdropCloseable={true}
                    leftArrowTitle={"left"}
                    rightArrowTitle={"right"}
                    closeBtnTitle={"close"}
                    showImgCount={false}
                  />
                  <img onClick={(e) => this.openImgsViewer()} className="single-article-main-image" src={imgLink} alt={this.props.api[this.state.newsId].image_name}/>
                  <div dangerouslySetInnerHTML={{__html: this.props.api[this.state.newsId].description_bg}} />
                  <SingleNewsSlider info={this.props.api[this.state.newsId].photos}/>
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
                <div className="single-article-sidebar">
                  <Link onClick={this.latestClick} to={{pathname: this.props.api[0].subtitle_bg}}>
                    <div className="single-sidebar-article">
                      <span>{this.props.api[0].date}</span>
                      <h4 value="0">{this.props.api[0].title_bg}</h4>
                    </div>
                  </Link>
                  <Link onClick={this.latestClick} to={{pathname: this.props.api[1].subtitle_bg}}>
                    <div className="single-sidebar-article">
                      <span>{this.props.api[1].date}</span>
                      <h4 value="1">{this.props.api[1].title_bg}</h4>
                    </div>
                  </Link>
                  <Link onClick={this.latestClick} to={{pathname: this.props.api[2].subtitle_bg}}>
                    <div className="single-sidebar-article">
                      <span>{this.props.api[2].date}</span>
                      <h4 value="2">{this.props.api[2].title_bg}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleNewsBg;



