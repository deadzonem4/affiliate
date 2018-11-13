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
import PromoPage from './pages/en/PromoPage.js';
import NewsPage from './pages/en/NewsPage.js';
import ContactPage from './pages/en/ContactPage.js';
import AdminPage from './pages/en/AdminPage.js';
import ErrorPage from './pages/en/ErrorPage.js';
import SingleNews from './templates/en/SingleNews.js';
//-------bg
import HomePageBg from './pages/bg/HomePageBg.js';
import AboutPageBg from './pages/bg/AboutPageBg.js';
import InfoPageBg from './pages/bg/InfoPageBg.js';
import PromoPageBg from './pages/bg/PromoPageBg.js';
import NewsPageBg from './pages/bg/NewsPageBg.js';
import ContactPageBg from './pages/bg/ContactPageBg.js';
import AdminPageBg from './pages/bg/AdminPageBg.js';
import ErrorPageBg from './pages/bg/ErrorPageBg.js';
import SingleNewsBg from './templates/bg/SingleNewsBg.js';



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
  }
  langChangeEn() {
    this.setState({
      language: "en"
    });
  }

  render() {

    return (
      <div>
      {this.state.language === "en" ?
        <HashRouter>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/about-us/" render={(props) => <AboutPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/information/" render={(props) => <InfoPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/promotions/" render={(props) => <PromoPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/news/" render={(props) => <NewsPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/contact/" render={(props) => <ContactPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/admin/" render={(props) => <AdminPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path={"/news:index"} render={(props) => <SingleNews {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route render={(props) => <ErrorPage {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/> />
        </Switch>
      </HashRouter>
      :
        <HashRouter>
        <Switch>
          <Route exact path="/" render={(props) => <HomePageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/about-us/" render={(props) => <AboutPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/information/" render={(props) => <InfoPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/promotions/" render={(props) => <PromoPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/news/" render={(props) => <NewsPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/contact/" render={(props) => <ContactPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path="/admin/" render={(props) => <AdminPageBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
          <Route path={"/newsbg:index"} render={(props) => <SingleNewsBg {...props} languageBg={this.langChangeBg = this.langChangeBg.bind(this)} languageEn={this.langChangeEn = this.langChangeEn.bind(this)} />}/>
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


