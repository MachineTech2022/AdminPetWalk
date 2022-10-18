import React,{useState} from "react";
import {} from "react-router-dom"; 
import './Login.scss'
import {Row,Form,Input,Button,notification} from 'antd';
//Componente Title
import TitleHeader from "../component/TitleHeader";

export default function Login(){

    const [inputs,setInputs] = useState({
        email:'',
        password:''
    });
    
    return(
        <div>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
            <Row className="content" justify="center" align="middle">
                <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                initialValues={{ remember: true }}
                >
                    <Form.Item label= "Email">
                        <Input
                            
                            type='email'
                            name="email"
                            placeholder="Correo electronico"
                            className="login_form_input"
                        />
                    </Form.Item>
                    <Form.Item label= "Password">
                        <Input.Password
                           
                           type='password'
                           name='password'
                           placeholder="Contraseña"
                           className="login_form_input" 
                        />
                    </Form.Item>
                    <Row justify="center">
                        <Form.Item wrapperCol={{ offset: 6  , span: 16 }}>
                            <a href="/MenuMajor">
                                <Button htmlType="submit" className="button" type="primary">Iniciar Sesión</Button>
                            </a>
                        </Form.Item>
                    </Row>
                </Form>
            </Row>
        </div>
    )
}

//SACAR EL <a>