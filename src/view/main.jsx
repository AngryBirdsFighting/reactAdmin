/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:32 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 19:54:47
 */
import React, { Component } from 'react';
import Menu from "../compoents/menu.jsx";
import HeaderBar from "../compoents/header.jsx";
import Fetch from "../fetch/"
import MRouter from "../router"

let fetch = new Fetch()
class Main extends Component {
    constructor(props){
        super(props)
    }
    // 在 render 之前调用
    componentWillMount() {
        console.log(this.props)
        // let param = {
        //     url: "/auth/findMenuPerms",
        //     data: {}
        // }
        // fetch.fetchAjax(param, (res, err) => {
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <div className={"app"}>
                    <div className={"app-menu"}>
                        <Menu></Menu></div>
                    <div className={"app-context"}>
                        <MRouter></MRouter>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main