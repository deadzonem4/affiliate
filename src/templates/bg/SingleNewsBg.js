import React from "react";
import MainLayout from '../../layout/bg/MainLayout.js';
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import LatestNews from './LatestNews.js';
import {Link} from "react-router-dom";

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
        <div className="wait-page">
          <i className="fas fa-spinner"></i>
          <h4>Моля изчакайте</h4>
        </div>
      );
    }
    return (
    	<MainLayout bg={this.props.languageBg} en={this.props.languageEn}>
        <div className="container">
          <div className="row">
            <article className="article-box col-md-9">
              <div className="single-news-title-date">
                <span>{this.state.api[0][this.props.match.params.index-1].date}</span>
              </div>
          	  <Link  to="/news">Обратно</Link>
              <Link  to={next>this.state.api[0].length ? "/news" : "/article"+next}>{next>this.state.api[0].length ? "" : " Следваща"}</Link>
          		<h2>{this.state.api[0][this.props.match.params.index-1].title_bg}</h2>
              <h4>{this.state.api[0][this.props.match.params.index-1].subtitle_bg}</h4>
              <img src={"http://dev.winbet-bg.com/uploads/images/news/" + this.state.api[0][this.props.match.params.index-1].image_name} alt={this.state.api[0][this.props.match.params.index-1].image_name}/>
              {renderHTML(this.state.api[0][this.props.match.params.index-1].description_bg)} 
              <SingleNewsSlider info={this.state.api[0][this.props.match.params.index-1].photos}/>
            </article>
            <div className="col-md-3">
              <LatestNews data={this.state.api[0]}/>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default SingleNewsBg;



