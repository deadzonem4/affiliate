import React from "react";
import MainLayout from '../../layout/en/MainLayout.js';
import SingleNewsSlider from '../../components/common/SingleNewsSlider.js';
import SocialIcons from '../../components/common/SocialIcons.js';
import LatestNews from './LatestNews.js';
import WaitPage from '../../pages/en/WaitPage.js';
import {Link} from "react-router-dom";
import '../styles/main.css';

const url = 'https://dev.winbet-bg.com/api/';

class SingleNews extends React.Component {

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
        <WaitPage/>
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
              <div className="single-article-navigation-buttons">
                <Link  to="/news">{"< Back"}</Link>
                <Link className={next > this.state.api[0].length ? "emty-block" : "" } to={next > this.state.api[0].length ? "/news" : "/article"+next}>{next > this.state.api[0].length ? "" : "Next >" }</Link>
              </div>
              <SocialIcons col=""/>
            </div>
            <div className="single-article-header">
              <h2 className="single-article-title">{this.state.api[0][this.props.match.params.index-1].title_en}</h2>
              <h4 className="single-article-sub-title">{this.state.api[0][this.props.match.params.index-1].subtitle_en}</h4>
            </div>
            <div className="row">
              <article className="single-article-box col-md-9">
                <div className="single-article-content">
                  <img className="single-article-main-image" src={"http://dev.winbet-bg.com/uploads/images/news/" + this.state.api[0][this.props.match.params.index-1].image_name} alt={this.state.api[0][this.props.match.params.index-1].image_name}/>
                  {renderHTML(this.state.api[0][this.props.match.params.index-1].description_en)} 
                  <SingleNewsSlider info={this.state.api[0][this.props.match.params.index-1].photos}/>
                </div>
                <div className="single-article-about">
                  <h4>About Winbet</h4>
                  <p>Sed venio ad inconstantiae crimen, ne saepius dicas me aberrare; Te ipsum, dignissimum maioribus tuis, 
                    voluptasne induxit, ut adolescentulus eriperes P. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. 
                    Vides igitur te aut ea sumere, quae non concedantur, aut ea, quae etiam concessa te nihil iuvent. Illa tamen simplicia, 
                    vestra versuta. Neminem videbis ita laudatum, ut artifex callidus comparandarum voluptatum diceretur. Numquam facies. 
                    Superiores tres erant, quae esse possent, quarum est una sola defensa, eaque vehementer. Vos autem cum perspicuis dubia 
                    debeatis illustrare, dubiis perspicua conamini tollere.
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

export default SingleNews;



