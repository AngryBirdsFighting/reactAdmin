/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:13:25 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-23 19:13:10
 */
import routes from "./routes"
import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {getToken} from "../utils/tools"
// import AsyncComponent from "./asyncComponent"
import { connect} from "react-redux";
 class MRouter extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log(this.props)
        // this.props.setInfoAsync()
    }
    isLogin(component){
        let token = getToken("name")
        return  token  ? component : <Redirect to={'/login'} />;
    }
    render() {
        return (
            <div>
            <Switch>
                {routes.map((r) => {
                    const createRouter = r => {
                        // return <Route path={r.path} exact  component={r.component} />
                          return <Route exact path={r.path} key={r.name}   render={ props => 
                            this.isLogin(<r.component {...props}/>)
                         }/>
                    }
                  return   createRouter(r)
                })}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
            </div>
        ) 
    }
}
// MRouter = connect(state =>({menus:state.permissionData}))(MRouter)
export default MRouter
