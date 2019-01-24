/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:15 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:33
 */
import { Button } from 'antd';
import React,{Component} from "react"
console.log("我是驾驶员设置")

class DriverManage extends Component{
    componentWillMount() {
        console.log("驾驶员设置")
     }
    render(){
        let {auth} = this.props
        return(
            <div>
                <h1>驾驶员设置</h1>
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}
export default DriverManage