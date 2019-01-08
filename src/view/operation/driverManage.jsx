/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:15 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 14:13:01
 */
import React,{Component} from "react"
console.log("我是驾驶员设置")

class DriverManage extends Component{
    componentWillMount() {
        console.log("驾驶员设置")
     }
    render(){
        return(
            <h1>驾驶员设置</h1>
        )
    }
}
export default DriverManage