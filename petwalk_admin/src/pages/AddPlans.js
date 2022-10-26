import React, {useState} from "react";
import {Row,Form,Input,Button,notification,message} from 'antd';
import './AddPlans.scss';
import axios from 'axios';

//Componente Title
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";
import TextArea from "antd/lib/input/TextArea";

export default function Login(){
    function ReloadPage(){
        window.location.reload()
    }

    function postPlan(data){
        const url= "http://localhost:4000/api/plan";    
        console.log(data)
        axios.post(url,data).then(res=>{
            
            if (res.status === 200);
                console.log(res.status)
                return res;
        }).then(result=>{
            return result.status;
        }).catch(err =>{
            //console.log(err);
            message.error('Datos incorrectos')
            return err.message;
        });
        
        
    
    }
    
    const [inputs,setInputs] = useState({
        costo:'',
        encabezado:'',
        descripcion:'',
        cantidadCoins:''
    });

    const changeForm = e =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value

        })
    }

    const formPlan = () =>{
        postPlan(inputs)
        setTimeout(ReloadPage,800)
        notification['success']({
            message:'El plan se agrego correctamente'
        })
        return false
    }
    
    
    
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
      };
  

    return(
        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <Row     className="title">
                <TitleHeader/>
            </Row>
            <div className="content-form-plan">
            <Form
            id="formularioPlan"
            onChange={changeForm}
            onFinish={formPlan}
            className="form-plan" 
            {...layout}>
                    <Form.Item
                    
                    name='costo' 
                    label= "Precio Plan"
                    rules={[
                        {
                            required:true,
                            message:'Favor ingresar costo del plan'
                        }
                    ]}
                    >
                        <Input
                            min={7500}
                            type='number'
                            name="costo"
                            placeholder="Costo"
                            className="costo_form_input"
                        />
                    </Form.Item>
                    <Form.Item
                    name='encabezado' 
                    label= "Nombre del Plan"
                    rules={[
                        {
                            required:true,
                            message:'Favor ingresar el nombre del plan asociado'
                        }
                    ]}
                    >
                        <Input
                            type='encabezado'
                            name="encabezado"
                            placeholder="Nombre del Plan"
                            className="encabezado_form_input"
                        />
                    </Form.Item>
                    <Form.Item
                    name='descripcion' 
                    label= "Descripción del plan"
                    rules={[
                        {
                            required:true,
                            message:'Favor ingresar una descripción asociada a este plan'
                        }
                    ]}
                    >
                        <TextArea
                            rows={4}
                            type='descripcion'
                            name="descripcion"
                            placeholder="Descripción del plan"
                            className="descripcion_form_input"
                        />
                    </Form.Item>
                    <Form.Item
                    name='cantidadCoins' 
                    label= "Cantidad de coins"
                    rules={[
                        {
                            required:true,
                            message:'Ingrese la cantidad de coins asociados a este plan'
                        }
                    ]}
                    >
                        <Input
                            min={1}
                            type='number'
                            name="cantidadCoins"
                            placeholder="Cantidad de coins"
                            className="cantidadCoins_form_input"
                        />
                    </Form.Item>
                        <Row justify="center">
                            <Form.Item wrapperCol={{ offset: 0  , span: 16 }}>
                                <Button htmlType="submit"  className="button" type="primary">Agregar</Button>
                            </Form.Item>
                        </Row>
                    </Form>
            </div>
        </div>
    )

}