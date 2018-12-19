import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import SocialIcons from '../../components/common/SocialIcons.js';
import LatestNews from './LatestNews.js';
import WaitPageBg from '../../pages/bg/WaitPageBg.js';
import {Link} from "react-router-dom";
import '../styles/main.css';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

const url = 'https://dev.winbet-bg.com/api/bg/news';

class SingleNewsBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
      visible: false,
      api: ''
    };
  }
  componentWillMount(){
    fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(api => {

        this.setState({ 
          api: api,
          loading: false
        });
      })
      .catch(error => {
      });      
  }
  render() {
    const newsIndex = parseInt(this.props.match.params.index);
    const next = newsIndex + 1;
  	if (this.state.loading) {
      return (
        <WaitPageBg/>
      );
    }
    return (
    	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
        <div className="single-atricle-page">
          <div className="container">
            <div className="single-news-title-date">
              <span>{this.state.api[this.props.match.params.index-1].date}</span>
            </div>
            <div className="single-article-navigation">
              <div className="single-article-navigation-buttons">
                <Link  to="/news">{"< Обратно"}</Link>
                <Link className={next > this.state.api.length ? "emty-block" : "" } to={next > this.state.api.length ? "/news" : "/article"+next}>{next > this.state.api.length ? "" : "Следваща >" }</Link>
              </div>
              <SocialIcons col=""/>
            </div>
            <div className="single-article-header">
              <h2 className="single-article-title">{this.state.api[this.props.match.params.index-1].title_bg}</h2>
              <h4 className="single-article-sub-title">{this.state.api[this.props.match.params.index-1].subtitle_bg}</h4>
            </div>
            <div className="row">
              <article className="single-article-box col-md-9">
                <div className="single-article-content">
                        <Viewer 
                        visible={this.state.visible}
                        onClose={() => { this.setState({ visible: false }); } }
                        images={[{src: "https://dev.winbet-bg.com/uploads/images/news/" + this.state.api[this.props.match.params.index-1].image_name, alt: ''}]}
                        />
                  <img onClick={() => { this.setState({ visible: !this.state.visible }); } } className="single-article-main-image" src={"https://dev.winbet-bg.com/uploads/images/news/" + this.state.api[this.props.match.params.index-1].image_name} alt={this.state.api[this.props.match.params.index-1].image_name}/>
                  <div dangerouslySetInnerHTML={{__html: this.state.api[this.props.match.params.index-1].description_bg}} />
                  <SingleNewsSlider info={this.state.api[this.props.match.params.index-1].photos}/>
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
                <LatestNews data={this.state.api} apiLink={this.state.api}/>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;


