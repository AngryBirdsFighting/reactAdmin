/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:37
 * @Description:  
 */
import { Button } from 'antd';
import React,{Component} from "react"
console.log("我是首页")

class Home extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        let {auth} = this.props
        return(
            <div>
                <h1>首页</h1>
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}

export default Home