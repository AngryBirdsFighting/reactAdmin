/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:50 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-08 19:55:03
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// async function aa() {
//     const { default: component } = await  import("./view/system/userManage")
//     const a = await  import("./view/system/userManage")
//     debugger
//     console.log("1111")
    
// }  
// aa()
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
