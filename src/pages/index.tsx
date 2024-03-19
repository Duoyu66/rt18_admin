import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Suspense, useEffect} from 'react';
import routers from '../router';

// 递归解析路由组件
const generateRoutes = (routes:any) => {
    return routes.map((route:any, index:number) => (
        <Route key={index} path={route.path} element={<route.component />}>
            {route.children && route.children.length > 0 && generateRoutes(route.children)}
        </Route>
    ));
};

const LayoutMain = () => {
    useEffect(() => {
        console.log("陪陪",generateRoutes(routers)[3].props.children[2].props.children)
    }, []);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>

                <Routes>{generateRoutes(routers)}</Routes>
            </Router>
        </Suspense>
    );
};

export default LayoutMain;
