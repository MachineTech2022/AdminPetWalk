import  React,{useState,useEffect}  from "react";
import './ModifyDeactivatePlans.scss';
import axios from 'axios';
import { Table,Input,notification,Modal,Form,message} from "antd";
import Button from 'react-bootstrap/Button';

//Componentes
import TitleHeader from "../component/TitleHeader"; 

import TextArea from "antd/lib/input/TextArea";

let idGlobal='';

export default function ModifyDeactivatePlans(){
    //Funcion para activar cuentas de consumidor
    function ActivatePlan(id){
        console.log(id)
        axios.patch(' http://localhost:4000/api/plan/activar/'+id)
        notification['success']({
            message:'Cuenta Activada'
        })
        
        setTimeout(ReloadPage,800)
    }
    //Funcion para boton de banear a consumidor
    function DeactivatePlan(id){
        axios.patch('http://localhost:4000/api/plan/desactivar/'+id)
        notification['success']({
            message:'Plan desactivado'
        })
        
        setTimeout(ReloadPage,800)
    }


    //Función para relogear la ruta
    function ReloadPage(){
        window.location.reload()
    }

    const [datos,setDatos]=useState([]);
    const [modalInsertar,setModalInsertar]= useState(false);
    const [modalEditar,setModalEditar]= useState(false);


    const openCloseModalInsertar=()=>{
        setModalInsertar(!modalInsertar);
    }

    const openCloseModalEditar=()=>{
        setModalEditar(!modalEditar);
    }


    //Funcion para añadir un nuevo plan por la api de Node
    function postPlan(data){
        const url= "http://localhost:4000/api/plan";    
        console.log(data)
        if( data.costo === "" || data.encabezado === "" || data.descripcion === "" || data.cantidadCoins === ""){
            notification['error']({
                message:'Favor rellenar todos los campos'
            })
        }
        else if(data.costo < 7500){
            notification['error']({
                message:'El precio del plan no puede ser menor a 7500'
            })
        }
        else if(data.cantidadCoins < 1){
            notification['error']({
                message:'La cantidad de coins debe ser 1 o superior a 1'
            })
        }
    
        else{
            axios.post(url,data).then(res=>{
                openCloseModalInsertar()       
                if (res.status === 200);
                    console.log(res.status)
                    return res;
            }).then(result=>{
                setTimeout(ReloadPage,800)
                notification['success']({
                     message:'El plan se agrego correctamente'
                 })
                return result.status;
            }).catch(err =>{
                message.error('Datos incorrectos')
                return err.message;
            });
        }     
    }
    

    function putPlan(){


        var dataAuxiliar=datos;
        dataAuxiliar.map(elemento=> {
            if(elemento._id === idGlobal){
                try {
                    if(inputs.costo < 7500){
                        notification['error']({
                            message:'El precio del plan no puede ser menor a 7500'
                        })
                    }
                    else if(inputs.cantidadCoins< 1){
                        notification['error']({
                            message:'La cantidad de coins debe ser 1 o superior a 1'
                        })
                    }
                    else if (inputs.costo !== null 
                        && inputs.encabezado !== undefined
                        && inputs.descripcion !== undefined
                        && inputs.cantidadCoins !== undefined){
                            console.log(typeof(inputs.costo))
                            console.log(typeof(inputs.encabezado))
                            elemento.costo= inputs.costo;
                            elemento.encabezado= inputs.encabezado;
                            elemento.descripcion= inputs.descripcion;
                            elemento.cantidadCoins= inputs.cantidadCoins;
                            
                            axios.put('http://localhost:4000/api/plan/'+idGlobal , inputs)
                            openCloseModalEditar();
                            setTimeout(ReloadPage,800)
                            notification['success']({
                                message:'El plan se agrego correctamente'
                            })
                    }
                    else{
                        notification['error']({
                            message:'Favor rellenar todos los campos'
                        })
                    }
                    
                } catch (error) {
                    notification['error']({
                        message:'Favor rellenar todos los campos'
                    })
                }
                
            }
        })
        
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

    

    const selectionPlan=(inputs,id)=>{
        setInputs(inputs);
        idGlobal = id;
        openCloseModalEditar()
        return idGlobal;
    } 

    const formPlan = () =>{
        postPlan(inputs)
        return false;
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 15 },
      };

    //Para consumir api de Node y listar
    useEffect(()=>{
            axios.get('http://localhost:4000/api/plan')
            .then(res => {
                setDatos(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])

    const columns =[
        {
            title:'Costo',
            dataIndex:'costo',
            key:'costo'
        },
        {
            title:'Encabezado',
            dataIndex:'encabezado',
            key:'encabezado'
        },
        {
            title:'Descripción',
            dataIndex:'descripcion',
            key:'descripcion'
        },
        {
            title:'Cantidad Coins',
            dataIndex:'cantidadCoins',
            key:'cantidadCoins'
        },
        {
            title:'Editar Planes',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button type="primary" onClick={()=> selectionPlan(fila,row._id)} >Modificar</Button>
            </>
        },
        {
            title: 'Activar/Desactivar',
            dataIndex: 'activo',
            key: 'activo',
            render: (fila, row) => 
            (fila === false) ? <Button onClick={()=> ActivatePlan(row._id) } variant="success">Activar</Button>:
            <Button  variant="danger" onClick={()=>DeactivatePlan(row._id)} >Desactivar</Button>
        }
    ]


    return (

        <div>
            
            <TitleHeader></TitleHeader>
            <br>
            </br>
                <div align='center'>
                    <Button variant="success" onClick={openCloseModalInsertar}>Añadir nuevo plan</Button>{' '}
                </div>
            <Table className="tabla" dataSource={datos} columns={columns}/>
            <Modal
            title="Añadir Nuevo Plan"
            visible={modalInsertar}
            destroyOnClose={true}
            onCancel={openCloseModalInsertar}
            centered
            footer={[
                <>
                    <Button variant="danger" onClick={openCloseModalInsertar}>Cancelar</Button>
                    <Button variant="success" onClick={formPlan}>Añadir</Button>
                </>
            ]}
            >
                <Form
                id="formularioPlan"
                onChange={changeForm}
                //onFinish={formPlan}
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
                            required={true}
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
                </Form>         
            </Modal>
            
            <Modal
            title="Modificar Plan"
            visible={modalEditar}
            onCancel={openCloseModalEditar}
            destroyOnClose={true}
            centered
            footer={[
                <>
                    <Button onClick={openCloseModalEditar}>Cancelar</Button>
                    <Button type="primary" onClick={putPlan}>Modificar</Button>
                </>
            ]}
            >
                <Form
                id="formularioPlan"
                onChange={changeForm}
                //onFinish={formPlan}
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
                            className="costo_form_input"
                            defaultValue={inputs && inputs.costo}
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
                            
                            className="encabezado_form_input"
                            defaultValue={inputs && inputs.encabezado}
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
                            className="descripcion_form_input"
                            value={inputs && inputs.descripcion}
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
                            
                            className="cantidadCoins_form_input"
                            value={inputs && inputs.cantidadCoins}
                        />
                    </Form.Item>
                </Form>         
            </Modal>
        </div>
    )
}
