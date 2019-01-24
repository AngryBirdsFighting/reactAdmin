/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:19 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:27:22
 */
import { Button } from 'antd';
import WrapAuth from "@com/wrapAuth.jsx" 
import React,{Component} from "react"
console.log("我是规则设置")

class RulesManage extends Component{
    componentWillMount() {
     }
    render(){
        let {auth} = this.props
        return(
            <div>
                <h1>规则设置</h1>
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}

export default RulesManage