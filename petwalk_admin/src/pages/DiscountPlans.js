import React,{useState,useEffect} from "react";
import {} from "react-router-dom"; 
import './DiscountPlans.scss'
import axios from 'axios';
import { Table,Input,notification,Modal,Form} from "antd";
import Button from 'react-bootstrap/Button';
import node from '../config/varGlobal';


//Componentes
import TitleHeader from "../component/TitleHeader";
import moment from 'moment';

let idGlobal='';
export default function DiscountPlans(){


    const [datos,setDatos]=useState([]);
    const [modalDiscount,setModalDiscount]= useState(false);

    const openCloseModalDiscount=()=>{
        setModalDiscount(!modalDiscount);
    }

    //Función para relogear la ruta
    function ReloadPage(){
        window.location.reload()
    }

    //Para consumir api de Node y listar
    useEffect(()=>{
        axios.get(node + '/api/plan')
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
        var today = new Date();
        var day = today.getDate() ;
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var hoy = (`${year}-${month}-${day}`);
        console.log(typeof(Date(hoy)))
        
        var dataAuxiliar=datos;
        
        dataAuxiliar.map(elemento=>{
            if(elemento._id === idGlobal){
                try {
                    console.log((inputs.fechaTermino)+'1')
                    console.log((hoy)+'2')


                    
                    
                    if(inputs.costoNuevo < 1000){
                        notification['error']({
                            message:'El costo del plan no puede ser menor a 1000'
                        })
                    }
                    else if(inputs.costoNuevo === undefined || inputs.fechaTermino === undefined){
                        notification['error']({
                            message:'Favor rellenar todos los campos'
                        })
                        console.log('por aqui pasa')
                    }
                    else if(new moment(inputs.fechaTermino) < new moment(hoy)){
                        notification['error']({
                            message:'Favor ingresar una fecha valida'
                        })
                    }
                    else{
                        console.log(elemento.costoNuevo)
                        elemento.costoNuevo= inputs.costoNuevo
                        elemento.fechaTermino=moment(inputs.fechaTermino).format('YYYY/MM/DD')
                        console.log(elemento.fechaTermino)
                        

                        axios.put(node + '/api/plan/crearDescuento/'+idGlobal,inputs)
                        openCloseModalDiscount();
                        setTimeout(ReloadPage,800)
                        notification['success']({
                            message:'Descuento agregado'
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

    //Funcion para activar cuentas de consumidor
    function ActivateDiscount(id){
        console.log(id)
        axios.patch(node + '/api/plan/descuento/activar/'+id)
        notification['success']({
            message:'Descuento Activada'
        })
        
        setTimeout(ReloadPage,800)
    }
    //Funcion para boton de banear a consumidor
    function DeactivateDiscount(id){
        axios.patch(node + '/api/plan/descuento/desactivar/'+id)
        notification['success']({
            message:'Descuento desactivado'
        })
        
        setTimeout(ReloadPage,800)
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
            title:'Fecha Término',
            dataIndex:'fechaTermino',
            key:'fechaTermino'
        },
        {
            title:'Agregar Descuento',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button variant="success" onClick={()=> selectionDiscount(fila,row._id)} >Agregar Descuento</Button>
            </>
        },
        {
            title:'Activar/Desactivar',
            dataIndex:'descuentoActivo',
            key:'descuentoActivo',
            render:(fila, row) => 
            (fila === false) ? <Button onClick={()=> ActivateDiscount(row._id) } variant="success">Activar</Button>:
            <Button variant="danger" onClick={()=>DeactivateDiscount(row._id)} >Desactivar</Button>
        }
        
    ]


    return(
        <div>
            <TitleHeader></TitleHeader>
            <Table className="diseño-tabla" dataSource={datos} columns={columns}/>
            <Modal
            title="Añadir Descuento"
            visible={modalDiscount}
            destroyOnClose={true}
            onCancel={openCloseModalDiscount}
            centered
            footer={[
                <>
                    <Button variant="danger" onClick={openCloseModalDiscount}>Cancelar</Button>
                    <Button variant="success" onClick={putDiscount}>Añadir Descuento</Button>
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
                        <Input
                        type='date'
                        name="fechaTermino"
                        >
                        </Input>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}