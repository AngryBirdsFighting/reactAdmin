/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:23 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-09 09:10:47
 */
import React, { Component } from "react"
class UserManage extends Component {
    state={
        title:"用户设置"
    }
    componentWillMount() {
        this.setState({
            title:"用户设置1"
        })
    }
    componentDidMount() {
        this.setState({
            title:"用户设置2"
        })
    }
    componentWillUpdate() {
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <h1>{this.state.title}</h1>
        )
    }
}
export default UserManage