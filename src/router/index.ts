import {lazy} from "react";
import HomePage from "@/pages/HomePage";
import WorkSpace from "@/pages/WorkSpace";
import About from "@/pages/About";
import AnalysisMain from "@/pages/algorithmAnalysis/AnalysisMain";
import Plan from "@/pages/algorithmAnalysis/Plan";
import analysisMain from "@/pages/algorithmAnalysis/AnalysisMain";

const Login = lazy(() => import("../components/Login/index"))
const Register = lazy(() => import("../components/Register/index"))
const ContentPage = lazy(() => import("../pages/ContentPage"))
// import Login from '../components/Login/index'
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/contentPage',
        title: '我是content',
        component: ContentPage,
        children: [
            {
                path: 'homePage',
                title: '我是首页',
                component: HomePage,
                meta: {icon: 'HomeOutlined'}

            },
            {
                path: 'workSpace',
                component: WorkSpace,
                title: '我是工作台',
                meta: {icon: 'DesktopOutlined'}
            },
            {
                path: 'analysisAll',
                component: AnalysisMain,
                title: '我是分析',
                meta: {icon: 'LineChartOutlined'},
                children:[
                    {
                        path: 'plan',
                        component: Plan,
                        title: '计划信息',
                        meta: {icon: 'PieChartOutlined'},
                    },
                    {
                        path: 'about',
                        component: About,
                        title: '我是关于',
                        meta: {icon: 'SettingOutlined'},
                    },
                ]

            },
            {
                path: 'plan',
                component: Plan,
                title: '我是计划',
                meta: {icon: 'CalendarOutlined'},
            },
            {
                path: 'about',
                component: About,
                title: '我是关于',
                meta: {icon: 'SettingOutlined'}
            },
        ]
    },
]
const asyncRoutes = []
export default routes

