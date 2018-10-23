import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import InfoPage from './pages/InfoPage.js';
import PromoPage from './pages/PromoPage.js';
import NewsPage from './pages/NewsPage.js';
import ContactPage from './pages/ContactPage.js';
import AdminPage from './pages/AdminPage.js';
import ErrorPage from './pages/ErrorPage.js';
import * as serviceWorker from './serviceWorker';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/affiliate" component={HomePage} />
          <Route path="/affiliate/about-us/" component={AboutPage} />
          <Route path="/affiliate/information/" component={InfoPage} />
          <Route path="/affiliate/promotions/" component={PromoPage} />
          <Route path="/affiliate/news/" component={NewsPage} />
          <Route path="/affiliate/contact/" component={ContactPage} />
          <Route path="/affiliate/admin/" component={AdminPage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


