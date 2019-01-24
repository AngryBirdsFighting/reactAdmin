import React from "react"
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router';
const SubMenu = Menu.SubMenu;

const createSubMenu = (item) => (
    <SubMenu key={item.name} title={<span><Icon type="appstore" /><span>{item.name}</span></span>}>
    {item.childrens.map( i => (
        i.childrens ? createSubMenu(i) : createMenuItem(i)
    ))}
  </SubMenu>
)

const createMenuItem = (item) => 
{
return(  
    <Menu.Item key={item.name}>
       <Link to={item.path}>
       <Icon type="appstore" />
           <span>{item.name}</span>
       </Link>
    </Menu.Item>
) 
}
export default withRouter(({menus, ...props}) =>
{    
return  (
    
    <Menu  { ...props}>
        {menus && menus.map( item => (
            item.childrens ? createSubMenu(item) : createMenuItem(item)
        ))}
    </Menu>
)})
