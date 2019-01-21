import React , { Component } from "react"
import { Button } from 'antd';
import { setToken } from "../utils/tools"
import { withRouter } from 'react-router';


class HeaderBar extends Component{
    constructor(props) {
        super(props)
    }
    logOut(){
        console.log(this)
        setToken("name", "")
        this.props.history.push("/login")
    }
    render(){
        return (
            <div className="header">
                <Button onClick={this.logOut.bind(this)}    type="primary" htmlType="submit" className="log-out">
                            logOut
                </Button>
            </div>
        )
    }
}

export default withRouter(HeaderBar)
