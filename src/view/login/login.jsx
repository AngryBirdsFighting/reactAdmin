/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:07 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-23 17:05:23
 */
import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { setToken } from "../../utils/tools";
import Fetch from "../../fetch/index";
import { connect} from "react-redux";
import { setInfoAsync } from "../../redux/action/"

let fetch = new Fetch()
class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps){
        let data = nextProps.menu.data
        debugger
        if(data.length > 0){
            let path = data[0].childrens ?  data[0].childrens[0].path : data[0].path
            this.props.history.push(path)
            setToken("name", "aaa")
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let param = {
                    url: "/login",
                    data: values
                }
                fetch.fetchAjax(param).then( res => {
                    if (res.success){
                         this.props.setInfoAsync()
                    } else {
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-from">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
NormalLoginForm = connect(state =>({menu:state.permissionData}), {setInfoAsync})(NormalLoginForm)
export default Form.create()(NormalLoginForm); 