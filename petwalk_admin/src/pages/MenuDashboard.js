import React from "react";
import {Row,Layout} from "antd";
import "./MenuDashboard.scss";
//Importando componentes
import Icons from "../component/Icons";
import CardsDashboars from "../component/CardsDashboards";

//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function MenuDashboard(props){
    console.log(props);
    const {Content} = Layout;

    return(
        <Layout>
            <div className="icons1">
                <Icons/>
            </div>
            <Row className="title">
                <TitleHeader/>
            </Row>
            <Layout>
                <Content>
                    <CardsDashboars/>
                </Content>
            </Layout>
        </Layout>
    )
}

