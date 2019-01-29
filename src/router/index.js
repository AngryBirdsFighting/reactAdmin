/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:13:25 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-29 11:06:35
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
    isLogin(component){
        let token = getToken("name")
        return  token  ? component : <Redirect to={'/login'} />;
    }
    render() {
        const { auths } = this.props;
        let auth = {};
        return (
            <div>
            <Switch>
                {routes.map((r) => {
                    const createRouter = r => {
                        // return <Route path={r.path} exact  component={r.component} />
                        return <Route exact path={r.path} key={r.name}   render={ props => {
                            if(auths){
                                let urlList = props.location.pathname.split("/")
                                let a = urlList[urlList.length - 1]
                                let authData = auths.find( item => {
                                    return item.name == a
                                })
                                auth = authData.auth
                            }
                          return   this.isLogin(<r.component auth = {auth} name={r.name} {...props}/>)
                        }
                        }/>
                    }
                  return createRouter(r)
                })}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
            </div>
        ) 
    }
}
// MRouter = connect(state =>({menus:state.permissionData}))(MRouter)
export default MRouter
