/* eslint-disable import/first */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import * as serviceWorker from './serviceWorker';
//-------en
import HomePage from './pages/en/HomePage.js';
import AboutPage from './pages/en/AboutPage.js';
import InfoPage from './pages/en/InfoPage.js';
import NewsPage from './pages/en/NewsPage.js';
import ContactPage from './pages/en/ContactPage.js';
import ErrorPage from './pages/en/ErrorPage.js';
import SingleNewsPage from './pages/en/SingleNewsPage.js';
import TermsPage from './pages/en/TermsPage.js';
import CommissionsPage from './pages/en/CommissionsPage.js';
import FaqPage from './pages/en/FaqPage.js';
import BettingPage from './pages/en/BettingPage.js';
//-------bg
import HomePageBg from './pages/bg/HomePageBg.js';
import AboutPageBg from './pages/bg/AboutPageBg.js';
import InfoPageBg from './pages/bg/InfoPageBg.js';
import NewsPageBg from './pages/bg/NewsPageBg.js';
import ContactPageBg from './pages/bg/ContactPageBg.js';
import ErrorPageBg from './pages/bg/ErrorPageBg.js';
import SingleNewsPageBg from './pages/bg/SingleNewsPageBg.js';
import TermsPageBg from './pages/bg/TermsPageBg.js';
import CommissionsPageBg from './pages/bg/CommissionsPageBg.js';
import FaqPageBg from './pages/bg/FaqPageBg.js';
import BettingPageBg from './pages/bg/BettingPageBg.js';

const langBg = "bg";
const langEn = "en";
class App extends Component {

  constructor(props) {
    super(props);
    this.langChangeBg = this.langChangeBg.bind(this);
    this.langChangeEn = this.langChangeEn.bind(this);
    this.state = {language: "bg"};
  }
  langChangeBg() {
    this.setState({
      language: "bg"
    });
    localStorage.setItem('language', langBg);
  }
  langChangeEn() {
    this.setState({
      language: "en"
    });
    localStorage.setItem('language', langEn);
  }
  componentWillMount(){
    localStorage.getItem('language') && this.setState({
      language: localStorage.getItem('language')
    });
  }
  render() {
    const url = window.location.href.split("/");
    return (
      <div>
      {url[5] === "en" ?
      <HashRouter>
        <Switch>
        <Route exact path={"/"} render={(props) => <HomePage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route exact path={"/en/"} render={(props) => <HomePage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/about-us/" render={(props) => <AboutPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/information/" render={(props) => <InfoPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/terms-and-coditions/" render={(props) => <TermsPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/commission/" render={(props) => <CommissionsPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/f-a-q/" render={(props) => <FaqPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/responsible-betting/" render={(props) => <BettingPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/news/" render={(props) => <NewsPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/en/contact/" render={(props) => <ContactPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path={"/en/news:index"} render={(props) => <SingleNewsPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route render={(props) => <ErrorPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/> />
        </Switch>
      </HashRouter>
      :
      <HashRouter>
        <Switch>
         <Route exact path="/" render={(props) => <HomePageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route exact path={"/bg/"} render={(props) => <HomePageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/about-us/" render={(props) => <AboutPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/information/" render={(props) => <InfoPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/terms-and-coditions/" render={(props) => <TermsPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/commission/" render={(props) => <CommissionsPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/f-a-q/" render={(props) => <FaqPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/responsible-betting/" render={(props) => <BettingPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/news/" render={(props) => <NewsPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/bg/contact/" render={(props) => <ContactPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path={"/bg/news:index"} render={(props) => <SingleNewsPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route render={(props) => <ErrorPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/> />
        </Switch>
      </HashRouter>
      }
      </div>
    );
  };

}




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


