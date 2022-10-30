import React,{useState,useEffect} from "react";
import {} from "react-router-dom"; 
import './DiscountPlans.scss'
import axios from 'axios';
import { Table,Button,Input,notification,Modal,Form,message} from "antd";
//Componentes
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";

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
        openCloseModalDiscount()
        return idGlobal;
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
            title:'Costo nuevo',
            dataIndex:'costoNuevo',
            key:'costoNuevo'
        },
        {
            title:'Agregar Descuento',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button type="primary" onAuxClick={()=> selectionDiscount(fila,row._id)} >Agregar Descuento</Button>
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
                    <Button type="primary">Añadir Descuento</Button>
                </>
            ]}
            >

            </Modal>
        </div>
    )
}