/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:45 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:36:12
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import NoFound from "@view/error/nofound"
import Main from "@view/main"
import Login from "@view/login/login"
import { getToken } from "./utils/tools";


class App extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => {
           return   getToken("defaultPath") ? <Redirect to={getToken("defaultPath")} /> : <Login/>
          }} ></Route>
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
