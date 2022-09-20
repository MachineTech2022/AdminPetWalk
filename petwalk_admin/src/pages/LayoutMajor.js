import React from "react";
import { Route } from "react-router-dom"; 
import {Row,Layout} from "antd";
import "./LayoutMajor.scss";

//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function LayoutMajor(props){
    console.log(props);
    const {routes}= props;
    const {Content} = Layout;

    return(
        <Layout>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
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
