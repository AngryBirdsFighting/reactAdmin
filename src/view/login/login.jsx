/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:07 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 10:01:03
 */
import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';


class Login extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        form: {
            name: '',
            password: '',
        }
    }
    componentWillMount() {
        console.log("woshilogin")
     }
    onSubmit(e) {
        console.log(this.state.form)
        e.preventDefault();
    }
    onChange(key, value) {
        this.state.form[key] = value;
        this.forceUpdate();
    }
    render() {
        return (
            <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
                <Form.Item label="账号">
                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
                </Form.Item>
                <Form.Item label="密码">
                    <Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" nativeType="submit">登陆</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Login