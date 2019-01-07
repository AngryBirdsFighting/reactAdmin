/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:50 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-07 18:48:24
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
