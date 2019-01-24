/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:11 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:48
 */
import { Button } from 'antd';
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
        let {auth} = this.props
        return(
            <div>
                <h1>车辆设置</h1>
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}
export default CarManage