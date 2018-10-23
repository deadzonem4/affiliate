import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header.js';
import HomePage from './pages/HomePage.js';
import AdminPage from './pages/AdminPage.js';
import ErrorPage from './pages/ErrorPage.js';
import * as serviceWorker from './serviceWorker';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/affiliate" component={HomePage} />
          <Route exact path="/affiliate/admin" component={AdminPage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


