/*
 * @Author: Wang Chao 
 * @Date: 2019-01-22 16:49:47 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-23 16:55:54
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
        fetch.fetchAjax(param).then( res => {
            resolve(res)
        })
    })
}
let getPermission = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/getPermission",
            data: {}
        }
        fetch.fetchAjax(param).then(res => {
            resolve(res)
        })
    })
}
// 创建action creator
const setInfo = () =>{
    return {type: type.SET_INFO}
}
const setPermission = (data) =>(
    {type: type.SET_PERMISSION,
     data
    }
)
export const  setInfoAsync = () => {
    return dispatch => {
        Promise.all([getInfo(), getPermission()]).then( res => {
            dispatch(setPermission(res[1].permission))
        }).catch( err => {
        })
    }
}