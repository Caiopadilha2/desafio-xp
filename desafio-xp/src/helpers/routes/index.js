import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Negociation from '../../pages/Negociation';
import Wallet from '../../pages/Wallet';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/wallet" component={ Wallet } />
        <Route path="/negociation" component={ Negociation } />
        <Route path="/balance" component={ } />
        <Route path="/*" component= {  } />
      </Switch>
    );
  }
}

export default Routes;
