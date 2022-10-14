import React from "react";
import {Row,Layout} from "antd";
import "./MenuDashboard.scss";
//Importando componentes
import Icons from "../component/Icons";

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
                    <p>Aqui menu target de MenuDashboard</p>
                    <p>Ventas</p>
                    <p>Paseos/Sector/Paseador</p>
                </Content>
            </Layout>
        </Layout>
    )
}

