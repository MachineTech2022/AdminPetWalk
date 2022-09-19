import React from "react";
import { Route } from "react-router-dom"; 
import {Layout} from "antd";
import "./LayoutMajor.scss";

export default function LayoutMajor(props){
    console.log(props);
    const {routes}= props;
    const {Content} = Layout;

    return(
        <Layout>
            <h2>Menú Sider</h2>
            <Layout>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
            </Layout>
        </Layout>
    )
}

function LoadRouters({routes}) {
    console.log(routes);
    return routes.map((route,index)=>
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}

        />
    )
}
