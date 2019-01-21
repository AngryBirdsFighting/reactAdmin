/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:13:25 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-21 20:52:37
 */
import routes from "./routes"
import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {getToken} from "../utils/tools"

export default class MRouter extends Component {
    constructor(props) {
        super(props)
    }
    isLogin(component){
        let token = getToken("name")
        return  token  ? component : <Redirect to={'/login'} />;
    }
    render() {
        return (
            <Switch>
                {routes.map((r) => {
                    const createRouter = r => {
                        // return <Route path={r.path} exact  component={r.component} />
                          return <Route exact path={r.path} key={r.name}   render={ props => 
                            this.isLogin(<r.component {...props}/>)
                         }/>
                    }
                  return  r.childrens ? r.childrens.map(a => createRouter(a)) : createRouter(r)
                })}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        ) 
    }
}
