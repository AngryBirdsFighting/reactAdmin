/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:45 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-21 16:29:55
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NoFound from "@view/error/nofound"
import Main from "@view/main"
import Login from "@view/login/login"


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/main" component={Main} ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={NoFound}></Route>  
          <Route component={NoFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
