/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-21 20:48:44
 * @Description:  
 */

import React,{Component} from "react"
console.log("我是首页")

class Home extends Component{
    componentWillMount() {
        console.log("首页")
     }
    render(){
        return(
            <h1>首页</h1>
        )
    }
}

export default Home