import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import {  Icon, Button } from 'antd';
// const SubMenu = Menu.SubMenu;
import SiderMenu from "@com/siderMenu.js"
import menus from "../router/routes"
class NavMenu extends Component {
  state = {
    collapsed: false,
    // menuClass: "menu"
  }
  componentWillMount() {
    debugger
    console.log(this.props)
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      // menuClass: this.state.menuClass === "menu" ? "small-menu" : "menu"
    });
  }
  render() {
    return (
      <div>
        <Button type="dashed" className="change-menu" onClick={this.toggleCollapsed.bind(this)} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <SiderMenu   
          // className={this.state.menuClass}
          style={{width: this.state.collapsed ? "80px" : "200px"}}
          menus={this.props.menu.data} 
          defaultSelectedKeys={['driverManage']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          defaultOpenKeys={['operation']}>
        </SiderMenu>
      </div>
    );
  }

}


export default NavMenu