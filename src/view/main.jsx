/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:32 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-07 19:42:42
 */
import React, { Component } from 'react';
import Menu from "../compoents/menu.jsx";
import HeaderBar from "../compoents/header.jsx";
import Fetch from "../fetch/"
import Routes from "../router"

let fetch = new Fetch()
class Main extends Component {
    // 在 render 之前调用
    componentWillMount() {
        let param = {
            url: "/auth/findMenuPerms",
            data: {}
        }
        fetch.fetchAjax(param, (res, err) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <div className={"app"}>
                <div  className={"app-menu"}>
                <Menu></Menu></div>
                <div className={"app-context"}>
                <Routes></Routes>
                </div>
                </div>
                
            </div>
        )
    }
}
export default Main