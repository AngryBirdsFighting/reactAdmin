/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:23 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:42
 */
import { Button } from 'antd';
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
        let {auth} = this.props
        return(
            <div>
                <h1>用户设置</h1>
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}
export default UserManage