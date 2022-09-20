import React from "react";
import {} from "react-router-dom"; 
import './Login.scss'
import {Row,Form,Input,Button} from 'antd';
//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function Login(){
    return(
        <div>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
            <Row className="content" justify="center" align="middle">
                <Form>
                    <Form.Item label= "Username">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label= "Password">
                        <Input.Password/>
                    </Form.Item>
                    <Row justify="center">
                        <Form.Item>
                            <Button className="button" type="primary">Iniciar Sesión</Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Row>
        </div>
    )
}