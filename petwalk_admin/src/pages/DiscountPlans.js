import React,{useState,useEffect} from "react";
import {} from "react-router-dom"; 
import './DiscountPlans.scss'
import axios from 'axios';
import { Table,Button,Input,DatePicker,notification,Modal,Form,message} from "antd";
//Componentes
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";
import { string } from "yup";
import { date } from "yup/lib/locale";

let idGlobal='';
export default function DiscountPlans(){


    const [datos,setDatos]=useState([]);
    const [modalDiscount,setModalDiscount]= useState(false);

    const openCloseModalDiscount=()=>{
        setModalDiscount(!modalDiscount);
    }


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

    const [inputs,setInputs] = useState({
        costo:'',
        encabezado:'',
        costoNuevo:'',
        porcentajeDescuento:'', 
        fechaTermino:'',
    });

    const changeForm = e =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
            
        })
    }

    const selectionDiscount=(inputs,id)=>{
        setInputs(inputs);
        idGlobal = id;
        console.log(idGlobal)
        openCloseModalDiscount()
        return idGlobal;
    } 

    function putDiscount(id){
        var dataAuxiliar=datos;
        dataAuxiliar.map(elemento=>{
            if(elemento._id === idGlobal){
                try {
                    console.log(inputs.fechaTermino)
                    if(inputs.costoNuevo < 1000){
                        notification['error']({
                            message:'El costo del plan no puede ser menor a 1000'
                        })
                    }
                    
                } catch (error) {
                    notification['error']({
                        message:'Favor rellenar todos los campos'
                    })
                }
            }
        })

        /*axios.put('http://localhost:4000/api/plan/crearDescuento/'+idGlobal)
        notification['success']({
            message:'Descuento agregado'
        })*/
    }

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
            title:'Costo con descuento',
            dataIndex:'costoNuevo',
            key:'costoNuevo'
        },
        {
            title:'Porcentaje Descuento',
            dataIndex:'porcentajeDescuento',
            key:'porcentajeDescuento'
        },
        {
            title:'Fecha Termino',
            dataIndex:'fechaTermino',
            key:'fechaTermino'
        },
        {
            title:'Agregar Descuento',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button type="primary" onClick={()=> selectionDiscount(fila,row._id)} >Agregar Descuento</Button>
            </>
        },
        
    ]


    return(
        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>
            <Table dataSource={datos} columns={columns}/>
            <Modal
            title="Añadir Descuento"
            visible={modalDiscount}
            destroyOnClose={true}
            onCancel={openCloseModalDiscount}
            centered
            footer={[
                <>
                    <Button onClick={openCloseModalDiscount}>Cancelar</Button>
                    <Button type="primary" onClick={putDiscount}>Añadir Descuento</Button>
                </>
            ]}
            >
                <Form
                onChange={changeForm}
                >
                    <Form.Item
                    name="costoNuevo"
                    label="Nuevo Costo Plan"
                    rules={[
                        {
                            required:true,
                            message:'Favor ingresar el nuevo costo asociado'
                        }
                    ]}
                    >
                        <Input
                            type='costoNuevo'
                            name="costoNuevo"
                            className="costoNuevo_form_input"
                        />
                    </Form.Item>
                    <Form.Item
                    name="fechaTermino"
                    label="Fecha termino descuento"
                    className="fechaTermino_form_input"
                    rules={[
                        {
                            required:true,
                            message:'Favor seleccionar una fecha'
                        }
                    ]}
                    >
                        <DatePicker/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}