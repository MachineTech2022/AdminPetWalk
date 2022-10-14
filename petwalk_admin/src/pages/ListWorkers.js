import  React,{ useEffect, useState} from "react";
import './ListWorkers.scss';
import axios from 'axios';
import { Table,Button,notification,Input} from "antd";
import {SearchOutlined} from '@ant-design/icons';


//Componente Title
import TitleHeader from "../component/TitleHeader"; 
import Icons from "../component/Icons";

export default function ListConsumers(){

    function ReloadPage(){
        window.location.reload()
    }

    function ActivateWorker(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/trabajador/activar/'+id)
        notification['success']({
            message:'Cuenta Activada'
        })
        
        setTimeout(ReloadPage,800)
        
    }
    
    function BanWorkers(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/trabajador/banear/'+id)
        notification['success']({
            message:'Cuenta Baneada'
        })
        
        setTimeout(ReloadPage,800)
        
    }
        
    
    //Para consumir la api de Node
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/trabajador/all')
            .then(res => {
                setSolicitud(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])

        
         

    
    
        const columns= [
            {
                title: 'Nombre',
                dataIndex: 'nombre',
                key: 'nombre'
                
            },
            {
                title: 'Apellido',
                dataIndex: 'apellido',
                key: 'apellido'
            },
            {
                title: 'Comuna',
                dataIndex: 'comuna',
                key: 'comuna'
            },
            {
                title: 'Telefono',
                dataIndex: 'telefono',
                key: 'telefono'
            },
            {
                title: 'Correo',
                dataIndex: 'correo',
                key: 'correo',
                filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters})=> {
                    return <>
                    <Input
                    autoFocus 
                    placeholder="Search email"
                    value={selectedKeys[0]} 
                    onChange={(e)=>{
                        setSelectedKeys(e.target.value ? [e.target.value]: [] );
                        confirm({closeDropdown:false});
                    }}
                    onPressEnter={()=>{
                        confirm()
                    }}
                    onBlur={()=>{
                        confirm()
                    }}></Input>
                    <div id="divButtonSearch">
                        <Button id="buttonSearch" onClick={()=>
                            {
                                confirm();
                            }}
                            type="primary">Search
                        </Button>
                        <Button id="buttonSearch" onClick={()=>
                            {
                                clearFilters();
                                confirm();
                            }}
                            type="danger">Reset
                        </Button>
                    </div>
                    </>
                },
                filterIcon:()=>{
                    return <SearchOutlined/>
                },
                onFilter:(value,record)=>{
                    return record.correo.toLowerCase().includes(value.toLowerCase())
                }
            },
            {
                title: 'Rut',
                dataIndex: 'rut',
                key: 'rut'
            },
            {
                title: 'Dirección',
                dataIndex: 'direccion',
                key: 'direccion'
            },
            {
                title: 'Fecha de nacimiento',
                dataIndex: 'fechaNacimiento',
                key: 'fechaNacimiento'
            },
            {
                title: 'Estado',
                dataIndex: 'estado',
                key: 'estado',
            },
            {
                title: 'Activar/Desactivar',
                dataIndex: 'estado',
                key: 'estado',
                render: (fila, row) => 
                (fila === 'Activo') ? <Button type="danger" onClick={()=>BanWorkers(row._id)}>Desactivar</Button>:
                <Button type="primary" onClick={()=>ActivateWorker(row._id)}>Activar</Button>
            },

            
        ]
    
    return(
        <>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>            
            <Table dataSource={solicitudes} columns={columns}/>
        </>
    )
}/*(fila === false) ? <Button type="primary">Activar</Button>:
                <Button onClick={()=>(row._id)} type='danger' >Desactivar</Button>*/ 
