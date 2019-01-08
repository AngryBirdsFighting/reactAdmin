/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:23 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 19:54:38
 */
import React,{Component} from "react"
console.log("我是用户设置")
class UserManage extends Component{
    componentWillMount() {
        console.log("用户设置")
     }
     componentWillMount(){
        console.log('1...componentWillMount');
       }
       componentDidMount(){
           console.log('2...componentDidMount');
       }
       componentWillUpdate(){
           console.log('3...componentWillUpdate');
       }
       componentDidUpdate(){
           console.log('4...componentDidUpdate');
       }
    render(){
        console.log("5555555555")
        return(
      
            <h1>用户设置</h1>
        )
    }
}
export default UserManage