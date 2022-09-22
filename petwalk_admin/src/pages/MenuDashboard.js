import React from "react";
import { Route } from "react-router-dom"; 
import {Row,Layout} from "antd";
import "./MenuDashboard.scss";
//Importando componentes


//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function MenuDashboard(props){
    console.log(props);
    const {Content} = Layout;

    return(
        <Layout>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
            <Layout>
                <Content>
                    <p>Aqui menu target de MenuDashboard</p>
                    <p>Ventas</p>
                    <p>Paseos/Sector/Paseador</p>
                </Content>
            </Layout>
        </Layout>
    )
}

