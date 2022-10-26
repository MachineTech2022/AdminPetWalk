import  React,{useState,useEffect}  from "react";
import './ModifyDeactivatePlans.scss';
import axios from 'axios';
import { Table,Button,Input,notification,Modal,} from "antd";

//Componente Title
import TitleHeader from "../component/TitleHeader"; 
import Icons from "../component/Icons";

export default function ModifyDeactivatePlans(){

    const [modal,setModal]= useState(false);

    const openModal=()=>{
        setModal(true);
    }

    const closeModal=()=>{
        setModal(false);
    }

    const accion=()=>{
        alert('Se presiono ok')
    }

    //Para consumir api de Node 
    const [listPlans, setListPlans] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/plan')
            .then(res => {
                setListPlans(res.data)
                
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
            title:'Modificar',
            dataIndex:'modificar',
            key:'modificar',
            render: () => <><Button type="primary" onClick={openModal}>Modificar</Button></>
        }
    ]

    return (

        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>
            <Table dataSource={listPlans} columns={columns}/>
            <Modal title="Modificar Plan"
            visible={modal}
            onCancel={closeModal}
            onOk={accion}
            >
                <p>Este es el modal</p>
            </Modal>
        </div>
    )
}
