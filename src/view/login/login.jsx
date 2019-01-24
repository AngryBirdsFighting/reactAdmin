/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:07 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 16:10:35
 */
import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { setToken } from "../../utils/tools";
import Fetch from "../../fetch/index";
import { connect} from "react-redux";
import { setInfoAsync } from "../../redux/action/"
import { withRouter } from 'react-router';

let fetch = new Fetch()
class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let vm = this
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let param = {
                    url: "/login",
                    data: values
                }
               
                fetch.fetchAjax(param).then( res => {
                    if (res.success){
                         this.props.setInfoAsync( (path) => {
                             vm.props.history.push(path)
                         })
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
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
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
export default Form.create()(withRouter(NormalLoginForm)); 