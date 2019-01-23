/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:32 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-23 19:29:16
 */
import React, { Component } from 'react';
import Menu from "@com//menu.jsx";
import HeaderBar from "@com//header.jsx";
import Fetch from "../fetch/"
import MRouter from "../router"
import { connect} from "react-redux";

let fetch = new Fetch()
class Main extends Component {
    constructor(props){
        super(props)
    }
    // 在 render 之前调用
    componentWillMount() {
        debugger
        // console.log(this.props)
        // let param = {
        //     url: "/auth/findMenuPerms",
        //     data: {}
        // }
        // fetch.fetchAjax(param).then(res => {
        //     console.log(res)
        // }).catch( err => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <div>
                <HeaderBar ></HeaderBar>
                <div className={"app"}>
                    <div className={"app-menu"}>
                        <Menu {...this.props}></Menu></div>
                    <div className={"app-context"}>
                        <MRouter></MRouter>
                    </div>
                </div>
            </div>
        )
    }
}
Main = connect(state =>({menu:state.permissionData}))(Main)
export default Main