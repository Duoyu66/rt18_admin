import './index.css'
import React, {Suspense, useEffect, useState} from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LaptopOutlined,
    NotificationOutlined,
    HomeOutlined,
    SettingOutlined,
    LineChartOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import {Avatar, Button, MenuProps, Popover} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {getHomePageMessage} from "../../api/HomePage";
import HeaderTop from "../../components/HeaderTop";
import myLogo from '@/assets/img/mylogo.png'
import {HashRouter as Router, NavLink, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import routers from "@/router";
const lastRoutes = routers[3].children
const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getIconComponent = (iconName: string)=> {
    switch (iconName) {
        case 'HomeOutlined':
            return HomeOutlined;
        case 'SettingOutlined':
            return SettingOutlined;
        case 'DesktopOutlined':
            return DesktopOutlined;
        case 'LineChartOutlined':
            return LineChartOutlined
        case  'CalendarOutlined':
            return CalendarOutlined
        // 添加其他图标的导入和映射关系

        default:
            return null;
    }
};

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,

    } as MenuItem;
}

// const items: MenuItem[] = [
//     {label:'首页',key:'/homePage',icon: <PieChartOutlined/>},
//     {label:'工作台',key:'/workSpace',icon: <PieChartOutlined/>},
//     {label:'力扣分析',key:'/analysisMain',icon: <PieChartOutlined/>,
//     children:[
//         {label:'分析台',key:'/analysisMain',icon: <PieChartOutlined/>},
//         {label:'统计台',key:'/plan',icon: <PieChartOutlined/>},
//     ]},
//     {label:'关于',key:'/about',icon: <PieChartOutlined/>},
// ];

// @ts-ignore
// const items2: MenuItem[] = lastRoutes.map((item:any, index) => {
//     const key = "/"+item.path;
//     const IconComponent:any = getIconComponent(item.meta.icon);
//     return {
//         key,
//         icon: IconComponent ? <IconComponent /> : null,
//         label: item.title,
//         children: item.children?.map((child:any, j:any) => ({
//             key: `/${item.path}`+'/'+child.path,
//             label: child.title,
//             icon: getIconComponent(child.meta.icon) ? <IconComponent /> : null,
//         })),
//     } as MenuItem;
// });
let myItems:any = []
function generateMenuItems(routes: any,parentPath =""): MenuItem[] {
    return routes.map((route:any) => {
        const IconComponent:any = getIconComponent(route.meta.icon);
        const menuItem: MenuItem = {
            label: route.title,
            key: parentPath +"/"+route.path,
            icon: IconComponent ? <IconComponent /> : null,
        };

        if (route.children) {
            // @ts-ignore
            menuItem.children = generateMenuItems(route.children, (parentPath + "/" + route.path));
        }

        return menuItem;
    });
}
myItems=generateMenuItems(lastRoutes)

console.log("最终生成的是",myItems)


// console.log("此时的menyITem是",items2)
const ContentPage = () => {
    const navigate = useNavigate();
    let playod = {
        qq: '2523890936'
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const silderClick = (value: any) => {
        navigate("/contentPage" + value.key)
    }

    // @ts-ignore
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme="light" style={{position: 'relative'}} collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                {/*侧边栏logo*/}
                <div className="demo-logo-vertical">
                    <img src={myLogo} alt="图片错误"/>
                </div>
                {/*侧边栏主菜单*/}
                <Menu onClick={silderClick} expandIcon theme="light" defaultSelectedKeys={['1']} mode="inline"
                      // items={lastRoutes?.map((item:any) => {
                      //     return {
                      //         key: item.path,
                      //         label: <NavLink to={`/${item.path}`}>{item.title}</NavLink>,
                      //         // icon: item.icon,
                      //     };
                      // })
                      // }
                     items={myItems}
                />
                <Button type="text" className="flodOrExpand" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </Button>
            </Sider>
            <Layout>
                {/*layout布局顶部header*/}
                <HeaderTop></HeaderTop>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>产品首页</Breadcrumb.Item>
                        <Breadcrumb.Item>百度产品列表</Breadcrumb.Item>
                        <Breadcrumb.Item>实例化产品页</Breadcrumb.Item>
                        <Breadcrumb.Item>用户资源</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="main-content"
                         style={{
                             padding: 0,
                             minHeight: 360,
                           backgroundColor:'#f5f5f5',
                             borderRadius: borderRadiusLG,
                         }}
                    >
                        <div className="">

                            <Outlet></Outlet>
                        </div>
                        <Footer style={{textAlign: 'center'}}>
                            My Bolg ©{new Date().getFullYear()} Created by LBL
                        </Footer>
                    </div>

                </Content>

            </Layout>
        </Layout>
    )
}
export default ContentPage
