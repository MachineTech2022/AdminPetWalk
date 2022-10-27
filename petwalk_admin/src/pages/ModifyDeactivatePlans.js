import  React,{useState,useEffect}  from "react";
import './ModifyDeactivatePlans.scss';
import axios from 'axios';
import { Table,Button,Input,notification,Modal,Form,message} from "antd";

//Componente Title
import TitleHeader from "../component/TitleHeader"; 
import Icons from "../component/Icons";
import TextArea from "antd/lib/input/TextArea";


let idPlanGlobal='';

export default function ModifyDeactivatePlans(){

    

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
        console.log(inputs._id)
        const url= "http://localhost:4000/api/plan";    
        console.log(data)
        axios.post(url,data).then(res=>{
            openCloseModalInsertar()       
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
    

    function putPlan(){
        
        console.log(idPlanGlobal);
        axios.put('http://localhost:4000/api/plan/'+idPlanGlobal, inputs)
        .then(response=>{
            var dataAuxiliar=datos;
            dataAuxiliar.map(elemento => {
                if(elemento._id===idPlanGlobal){
                elemento.inputs= inputs.caso;
                elemento.inputs= inputs.encabezado;
                elemento.inputs= inputs.descripcion;
                elemento.inputs= inputs.cantidadCoins;
                }
            });
            setDatos(dataAuxiliar);
            openCloseModalEditar();
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

        //test.push(id)
        idPlanGlobal= id;
        console.log(idPlanGlobal);
        openCloseModalEditar()
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
            title:'Acciones',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button type="primary" onClick={()=> selectionPlan(fila,row._id)} >Modificar</Button>
            {"   "}<Button type="primary">Activar</Button>
            {"   "}<Button type="primary">Desactivar</Button>
            </>
        }
    ]


    return (

        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>
            <br>
            </br>
                <div align='center'>
                    <Button  type="primary" onClick={openCloseModalInsertar} className="buttonNewPlan">Añadir nuevo plan</Button>
                </div>
            <br>
            </br>
            <br>
            </br>
            <Table dataSource={datos} columns={columns}/>
            <Modal
            title="Añadir Nuevo Plan"
            visible={modalInsertar}
            destroyOnClose={true}
            onCancel={openCloseModalInsertar}
            centered
            footer={[
                <>
                    <Button onClick={openCloseModalInsertar}>Cancelar</Button>
                    <Button type="primary" onClick={formPlan}>Añadir</Button>
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
                            placeholder="Costo"
                            className="costo_form_input"
                            value={inputs && inputs.costo}
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
                            value={inputs && inputs.encabezado}
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
                            placeholder="Cantidad de coins"
                            className="cantidadCoins_form_input"
                            value={inputs && inputs.cantidadCoins}
                        />
                    </Form.Item>
                </Form>         
            </Modal>
        </div>
    )
}
