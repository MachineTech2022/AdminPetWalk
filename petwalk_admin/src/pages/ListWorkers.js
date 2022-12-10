import  React,{ useEffect, useState} from "react";
import './ListWorkers.scss';
import axios from 'axios';
import { Table,notification,Input} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import Button from 'react-bootstrap/Button';
import node from '../config/varGlobal'

//Componente Title
import TitleHeader from "../component/TitleHeader"; 


export default function ListConsumers(){

    function ReloadPage(){
        window.location.reload()
    }

    function ActivateWorker(id){
        console.log(id)
        axios.patch(node + '/api/trabajador/activar/'+id)
        notification['success']({
            message:'Cuenta Activada'
        })
        
        setTimeout(ReloadPage,800)
        
    }

    console.log(node)
    
    function BanWorkers(id){
        console.log(id)
        axios.patch(node + '/api/trabajador/banear/'+id)
        notification['success']({
            message:'Cuenta Baneada'
        })
        
        setTimeout(ReloadPage,800)
        
    }
        
    
    //Para consumir la api de Node
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get(node + '/api/trabajador/all')
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
                title: 'Teléfono',
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
                    placeholder="Buscar email"
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
                            variant="primary">Buscar
                        </Button>
                        <Button id="buttonSearch" onClick={()=>
                            {
                                clearFilters();
                                confirm();
                            }}
                            variant="danger">Cancelar
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
                (fila === 'Activo') ? <Button variant="danger" onClick={()=>BanWorkers(row._id)}>Desactivar</Button>:
                <Button variant="success" onClick={()=>ActivateWorker(row._id)}>Activar</Button>
            },

            
        ]
    
    return(
        <>
            <TitleHeader></TitleHeader>            
            <Table className="diseño-tabla" dataSource={solicitudes} columns={columns}/>
        </>
    )
}