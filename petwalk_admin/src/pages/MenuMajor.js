import React from "react";
import {Row} from "antd";
import "./MenuMajor.scss";
// import BasicExample from "../component/navraro";
//Importando componentes

//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function MenuMajor(props){

    return(
        <div className=" progress-bar">
            <TitleHeader/>
            <Row className="d-flex content no-color" justify="center" align="middle">
            </Row>
        </div>
    )
}
