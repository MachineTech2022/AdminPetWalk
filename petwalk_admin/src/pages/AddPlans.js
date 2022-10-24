import React from "react";
import {Row,Form,Input,Button,message} from 'antd';

//Componente Title
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";

export default function Login(){

    return(
        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
        </div>
    )

}