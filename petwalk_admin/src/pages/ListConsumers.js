import  React,{ useEffect, useState} from "react";
import './ListConsumers.scss';
import '../.'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Table,Input,notification} from "antd";
import {SearchOutlined} from '@ant-design/icons'

//Componente Title
import TitleHeader from "../component/TitleHeader"; 

export default function ListConsumers(){

    function ReloadPage(){
        window.location.reload()
    }
    //Funcion para activar cuentas de consumidor
    function ActivateConsumers(id){
        console.log(id)
        axios.patch(' http://localhost:4000/api/consumidor/activar/'+id)
        notification['success']({
            message:'Cuenta Activada'
        })
        
        setTimeout(ReloadPage,800)
    }
    //Funcion para boton de banear a consumidor
    function BanConsumers(id){
        axios.patch('http://localhost:4000/api/consumidor/banear/'+id)
        notification['success']({
            message:'Cuenta Baneada'
        })
        
        setTimeout(ReloadPage,800)
    }
        
    
    //Para consumir la api de Node
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/consumidor')
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
                            variant="primary">Search
                        </Button>
                        <Button id="buttonSearch" onClick={()=>
                            {
                                clearFilters();
                                confirm();
                            }}
                            variant="danger">Reset
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
                dataIndex: 'activo',
                key: 'activo',
                render: fila => (fila === false) ? <p>Inactivo</p> : <p>Activo</p>
            },
            {
                title: 'Activar/Desactivar',
                dataIndex: 'activo',
                key: 'activo',
                render: (fila, row) => 
                (fila === false) ? <Button onClick={()=> ActivateConsumers(row._id) } variant="primary">Activar</Button>:
                <Button variant="danger" onClick={()=>BanConsumers(row._id)} >Desactivar</Button>
            },
            
        ]
   
    return(
        <>
            <TitleHeader></TitleHeader>
            <Table className="diseño-tabla" dataSource={solicitudes} columns={columns}/>
        </>
    )
}
