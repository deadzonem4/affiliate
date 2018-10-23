import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ErrorPage from './pages/ErrorPage.js';
import * as serviceWorker from './serviceWorker';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  component={ErrorPage} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();