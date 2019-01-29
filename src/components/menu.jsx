import React, { Component } from "react";
import {  Icon, Button } from 'antd';
import SiderMenu from "@com/siderMenu.js"
import { connect} from "react-redux";
import { withRouter } from 'react-router';
// import menus from "../router/routes"
class NavMenu extends Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: [],
    defaultOpenKeys:[]
    // menuClass: "menu"
  }
  componentWillMount() {
      let menuUrl =  this.props.location.pathname.split("/")
      this.setState({
        defaultSelectedKeys:[menuUrl[(menuUrl.length - 1)]]
    })
      if(menuUrl.length == 4){
        this.setState({
          defaultOpenKeys:[menuUrl[2]]
      })
      }
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
          style={{width: this.state.collapsed ? "80px" : "200px"}}
          menus={this.props.menu.data} 
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          defaultOpenKeys={this.state.defaultOpenKeys}>
        </SiderMenu>
      </div>
    );
  }
}

NavMenu = connect(state =>({menu:state.permissionData}))(NavMenu)
export default withRouter(NavMenu)