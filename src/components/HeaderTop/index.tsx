import {Avatar, Layout, Popover, Space, theme} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import './index.css'
const { Header, Content, Footer, Sider } = Layout;
// const {
//     token: { colorBgContainer, borderRadiusLG },
// } = theme.useToken();

const content = (
    <ul className="right-popover">
        <li><a href="https://www.baidu.com">个人信息</a></li>
        <li><a href="https://www.baidu.com">修改密码</a></li>
        <li onClick={()=>{window.location.href = '/#/login'}}> 退出登录</li>
    </ul>
);
const HeaderTop=()=>{
    return (
        <Header className="header" style={{ border:'1px solid red',padding: 0,backgroundColor:'#fff' }} >
          <Space style={{marginRight:'10px'}}>
              <Avatar className="icon-my-img"   size={{ xs: 22, sm: 24, md: 26, lg: 28, xl: 30, xxl: 64 }} >枪</Avatar>
              <Popover content={content} trigger="click" >
                  <span className="userNameStyle"> 欢迎~枪响!</span>
              </Popover>
          </Space>
        </Header>

    )
}
export default HeaderTop
