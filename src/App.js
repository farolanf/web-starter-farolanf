import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RestPage from './components/RestPage';

import SearchPage from './containers/SearchPage';

import * as ROUTES from './utils/routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={ROUTES.SEARCH} component={SearchPage} />
          <Route exact path={ROUTES.REST + '/:id'} component={RestPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
