/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:13:25 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 13:52:31
 */
import routes from "./routes"
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


export default class MRouter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Switch>
                {routes.map((r) => {
                    const createRouter = r => {
                        // return <Route path={r.path} exact  component={r.component} />
                          return <Route exact path={r.path}   render={ props => <r.component {...props}/>}/>
                    }
                  return  r.childrens ? r.childrens.map(a => createRouter(a)) : createRouter(r)
                })}
            </Switch>
        )
    }
}
