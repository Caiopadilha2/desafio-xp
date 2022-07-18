import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Balance from '../../pages/Balance';
import Login from '../../pages/Login';
import Negociation from '../../pages/Negociation';
import NotFound from '../../pages/NotFound';
import Wallet from '../../pages/Wallet';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/wallet" component={ Wallet } />
        <Route path="/negociation" component={ Negociation } />
        <Route path="/balance" component={ Balance } />
        <Route path="/*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Routes;
