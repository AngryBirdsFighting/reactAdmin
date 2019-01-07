/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:03 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-07 20:05:05
 */
import CarManage from "@view/operation/carManage"
import DriverManage from "@view/operation/driverManage"
import RulesManage from "@view/system/rulesManage"
import UserManage from "@view/system/userManage"
import Main from "@view/main"

export default [
    {
        path: "/main/operation", name: "operation", component: Main,
        childrens: [
            { path: "/main/operation/carManage", name: "carManage", component: CarManage },
            { path: "/main/operation/driverManage", name: "driverManage", component: DriverManage }
        ]
    },
    {
        path: "/main/system", name: "system", component: Main,
        childrens: [
            { path: "/main/system/userManage", name: "userManage", component: UserManage },
            { path: "/main/system/rulesManage", name: "rulesManage", component: RulesManage }
        ]
    }
]
