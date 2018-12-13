import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import SocialIcons from '../../components/common/SocialIcons.js';
import LatestNews from './LatestNews.js';
import WaitPageBg from '../../pages/bg/WaitPageBg.js';
import {Link} from "react-router-dom";
import '../styles/main.css';

const url = 'https://dev.winbet-bg.com/api/';

class SingleNewsBg extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      loading : true,
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
    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
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
              <span>{this.state.api[0][this.props.match.params.index-1].date}</span>
            </div>
            <div className="single-article-navigation">
              <Link  to="/news">{"< Обратно"}</Link>
              <Link className={next > this.state.api[0].length ? "emty-block" : "" } to={next > this.state.api[0].length ? "/news" : "/article"+next}>{next > this.state.api[0].length ? "" : "Следваща >" }</Link>
              <SocialIcons/>
            </div>
            <div className="single-article-header">
              <h2 className="single-article-title">{this.state.api[0][this.props.match.params.index-1].title_bg}</h2>
              <h4 className="single-article-sub-title">{this.state.api[0][this.props.match.params.index-1].subtitle_bg}</h4>
            </div>
            <div className="row">
              <article className="single-article-box col-md-9">
                <div className="single-article-content">
                  <img className="single-article-main-image" src={"http://dev.winbet-bg.com/uploads/images/news/" + this.state.api[0][this.props.match.params.index-1].image_name} alt={this.state.api[0][this.props.match.params.index-1].image_name}/>
                  {renderHTML(this.state.api[0][this.props.match.params.index-1].description_bg)} 
                  <SingleNewsSlider info={this.state.api[0][this.props.match.params.index-1].photos}/>
                </div>
                <div className="single-article-about">
                  <h4>За Winbet</h4>
                  <p>Lorem Ipsum е елементарен примерен текст, използван в печатарската и 
                    типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, 
                    когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с 
                    тях книга с примерни шрифтове."
                  </p>
                </div>
              </article>
              <div className="col-md-3 latest-news-sidebar">
                <LatestNews data={this.state.api[0]} apiLink={this.state.api[0][this.props.match.params.index-1]}/>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;



