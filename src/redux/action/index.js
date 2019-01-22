/*
 * @Author: Wang Chao 
 * @Date: 2019-01-22 16:49:47 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-22 17:14:57
 * @Description:  redux action 管理
 */
import * as type from './type';
import Fetch from "../../fetch/index"
let fetch = new Fetch()

let getInfo = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/userInfo",
            data: {}
        }
        fetch.fetchAjax(param)
    })
}
let getPermission = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/getPermission",
            data: {}
        }
        fetch.fetchAjax(param)
    })
}
// 创建action creator
const setInfo = () =>{
    return {type: type.SET_INFO}
}
const setPermission = () =>{
    return {type: type.SET_PERMISSION}
}
export const setInfoAsync = () => {
    return dispatch => {
        Promise.all([p1, p2]).then( res => {
            debugger
            dispatch(setPermission())
        }).catch( err => {

        })
    }
}