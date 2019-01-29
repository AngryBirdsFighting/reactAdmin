/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:32 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-29 11:03:41
 */
import React, { Component } from 'react';
import Menu from "@com//menu.jsx";
import HeaderBar from "@com//header.jsx";
import MRouter from "../router"
import { connect} from "react-redux";
import { setInfoAsync } from "../redux/action/";

class Main extends Component {
    constructor(props){
        super(props)
    }
    // 在 render 之前调用
    componentWillMount() {
        this.props.menu.defaultPath || this.props.setInfoAsync()
    }
    render() {
        const { menu } = this.props;
        return (
            <div>
                <HeaderBar ></HeaderBar>
                <div className={"app"}>
                    <div className={"app-menu"}>
                        <Menu></Menu></div>
                    <div className={"app-context"}>
                        <MRouter auths = {menu.auths} auth=""></MRouter>
                    </div>
                </div>
            </div>
        )
    }
}
Main = connect(state =>({menu:state.permissionData}), {setInfoAsync})(Main)
export default Main