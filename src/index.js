import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us/" component={AboutPage} />
          <Route path="/information/" component={InfoPage} />
          <Route path="/promotions/" component={PromoPage} />
          <Route path="/news/" component={NewsPage} />
          <Route path="/contact/" component={ContactPage} />
          <Route path="/admin/" component={AdminPage} />
          <Route component={ErrorPage} />
        </Switch>
      </HashRouter>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


