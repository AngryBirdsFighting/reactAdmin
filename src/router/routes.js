/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:03 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-21 20:48:58
 */
import AsyncComponent from "./asyncComponent"
import { homedir } from "os";
const CarManage = AsyncComponent(() => import("@view/operation/carManage"))
const DriverManage = AsyncComponent(() => import("@view/operation/driverManage"))
const RulesManage = AsyncComponent(() => import("@view/system/rulesManage"))
const UserManage = AsyncComponent(() => import("@view/system/userManage"))
const Home = AsyncComponent(() => import("@view/home"))
// import CarManage from "@view/operation/carManage"
// import DriverManage from "@view/operation/driverManage"
// import RulesManage from "@view/system/rulesManage"
// import UserManage from "@view/system/userManage"

export default [
    { path: "/main/home", name: "home",component: Home},
    {
        path: "/main/operation", name: "operation",
        childrens: [
            { path: "/main/operation/carManage", name: "carManage", component: CarManage },
            { path: "/main/operation/driverManage", name: "driverManage", component: DriverManage } 
        ]
    },
    {
        path: "/main/system", name: "system",
        childrens: [
            { path: "/main/system/userManage", name: "userManage", component: UserManage },
            { path: "/main/system/rulesManage", name: "rulesManage", component: RulesManage }
        ]
    }      
]
