import React from "react";
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import ShareButtons from '../../components/common/ShareButtons.js';
import LatestNews from './LatestNews.js';
import WaitPage from '../../pages/en/WaitPage.js';
import {Link} from "react-router-dom";
import '../styles/main.css';
import ImgsViewer from 'react-images-viewer'
import Breadcrumbs from '../../components/common/Breadcrumbs.js';
import {ReactTitle} from 'react-meta-tags';
import Language from '../../components/common/Language.js';

class SingleNews extends React.Component {

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
    const imgLink = "https://dev.winbet-bg.com/uploads/images/news/" + this.props.api[this.props.param-1].image_name;
    const title = this.props.api[this.props.param-1].title_en;
    const subTitle = this.props.api[this.props.param-1].subtitle_en;
    if (this.state.loading) {
      return (
        <WaitPage/>
      );
    }
    return (
      <div>
        <Language bg={this.props.languageBg} en={this.props.languageEn} urlBg={`/bg/news${newsIndex}`} urlEn={`/en/news${newsIndex}`}/>
        <ReactTitle title={"Winbet - " + title}/>
        <Breadcrumbs levelOne="Home" levelTwo="News" levelTwoLink="/en/news" levelThree={title}/>
        <div className="single-atricle-page">
          <div className="container">
            <div className="single-news-title-date">
              <span>{this.props.api[this.props.param-1].date}</span>
            </div>
            <div className="single-article-navigation">
              <div className="single-article-navigation-buttons">
                <Link  to="/en/news">{"< Back"}</Link>
                <Link className={next > this.props.api.length ? "emty-block" : "" } to={next > this.props.api.length ? "/en/news" : "/en/news"+next}>{next > this.props.api.length ? "" : "Next >" }</Link>
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
                  <img onClick={(e) => this.openImgsViewer()} className="single-article-main-image" src={imgLink} alt={this.props.api[this.props.param-1].image_name}/>
                  <div dangerouslySetInnerHTML={{__html: this.props.api[this.props.param-1].description_en}} />
                  <SingleNewsSlider info={this.props.api[this.props.param-1].photos}/>
                </div>
                <div className="single-article-about">
                  <h4>About Winbet</h4>
                  <p>Winbet is a Bulgarian casino chain and a licensed bookmaker. The gaming halls have twenty years of history behind, with their total number now being 37, and by 2015 the company has been successfully developing its online platform.
                  The main mission of Winbet's management and staff is not only to justify but also to exceed customer expectations, and the success of the brand lies in the continuous improvement of the products and services offered.
                  </p>
                </div>
              </article>
              <div className="col-md-3 latest-news-sidebar">
                <LatestNews data={this.props.api}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleNews;






