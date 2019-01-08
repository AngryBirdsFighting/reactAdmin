/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:11 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 14:12:32
 */
import React,{Component} from "react"
console.log("我是车辆设置")
class CarManage extends Component{
    constructor(props) {
        super(props)
    }
    // render之前调用
    componentWillMount() {
       console.log("我是车辆设置")
    }
    render(){       
        return(
            <h1>车辆设置</h1>
        )
    }
}
export default CarManage