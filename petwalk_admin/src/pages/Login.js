import React,{useState} from "react";
import {} from "react-router-dom"; 
import './Login.scss'
import axios from 'axios';
import {Row,Form,Input,Button,message} from 'antd';
import LogoPet from '../assets/img/LogoPet.png'

//Componente Title

export default function Login(){




    function ApiLogin(data){
        const url= "http://localhost:4000/api/admin/login";
        
        axios.post(url,data).then(response => {
                return response;
            }).then(result=>{
                //console.log(result.status)
                window.location.href='/DashboardGeneral';
                return result.status;
            })
            .catch(err =>{
                //console.log(err);
                message.error('Correo o contraseña incorrectos')
                return err.message;
            });

    }

    const [inputs,setInputs] = useState({
        correo:'',
        contrasena:''
    });

    const changeForm = e =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value

        })
    }

    const login = () =>{
        ApiLogin(inputs)
        return false
    }
    
    return(
        <div className="fondo">
            
            <Row justify="center bg-transparent" className="title">
                <div className="bg-transparent ">  
                    <img 
                        className="logo" 
                        src={LogoPet}
                        alt="LogoPet"
                        />
                </div>
            </Row>
            <Row className="content no-color" justify="center" align="middle">
                <Form
                className="d-flex flex-column from-personalizado text-light"
                onChange={changeForm}
                onFinish={login}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                initialValues={{ remember: true }}
                >
                    <Form.Item
                    name='Email' 
                    label= "Email" 
                    rules={[
                        {
                            required:true,
                            message:'Por favor ingrese su correo'
                        }
                    ]}
                    >
                        <Input
                            type='email'
                            name="correo"
                            placeholder="Correo electronico"
                            className="login_form_input"
                            
                        />
                    </Form.Item>
                    <Form.Item
                    name='password' 
                    label= "Password"
                    rules={[
                        {
                            required:true,
                            message:'Por favor ingrese contraseña'
                        }
                    ]}
                    >
                        <Input.Password
                           type='password'
                           name='contrasena'
                           placeholder="Contraseña"
                           className="login_form_input" 
                        />
                    </Form.Item>
                    <Row justify="center">
                        <Form.Item wrapperCol={{ offset: 6  , span: 16 }}>
                            <Button htmlType="submit" className="button" type="primary">Iniciar Sesión</Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Row>
        </div>
    )
}

//SACAR EL <a>