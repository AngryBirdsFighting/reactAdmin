/*
 * @Author: Wang Chao 
 * @Date: 2019-01-07 17:14:15 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-25 09:41:18
 */
import { Button } from 'antd';
import React,{Component} from "react"
console.log("我是驾驶员设置")

class DriverManage extends Component{
    componentDidMount() {
        console.log("驾驶员设置")
        const { BMap } = window
        var map = new BMap.Map("allmap"); // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom("上海",15); 
        map.enableScrollWheelZoom();   
        // var p1 = new BMap.Point(116.301934, 39.977552);
        // var p2 = new BMap.Point(116.508328, 39.919141);
        // var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        // driving.search(p1, p2);
     }
    render(){
        let {auth} = this.props
        return(
            <div>
                <div id="allmap" className="b-map"></div>
                {/* <h1>驾驶员设置</h1> */}
                {auth.add ? <Button>add</Button> : null}
                {auth.edit ? <Button>edit</Button> : null}
                {auth.delete ? <Button>delete</Button> : null}
                {auth.info ? <Button>info</Button> : null}
            </div>
        )
    }
}
export default DriverManage