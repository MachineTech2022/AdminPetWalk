import  React,{ useEffect, useState} from "react";
import './ListWorkers.scss';
import axios from 'axios';
import { Table,Button} from "antd";

//Componente Title
import TitleHeader from "../component/TitleHeader"; 

export default function ListConsumers(){



    /*function AceptarSolicitud(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/trabajador/aceptar/'+id)
        window.location.reload()
    }*/
    
    /*function BanWorkers(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/consumidor/banear/'+id)
        window.location.reload()
    }*/
        
    
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
                key: 'correo'
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
                dataIndex: 'activo',
                key: 'activo',
                render: fila => (fila === false) ? <p>Inactivo</p> : <p>Activo</p>
            },
            {
                title: 'Activar/Desactivar',
                dataIndex: 'activo',
                key: 'activo',
                render: (fila, row) => 
                (fila === false) ? <Button type="primary">Activar</Button>:
                <Button onClick={()=>(row._id)} type='danger' >Desactivar</Button>
            },

            
        ]
    
    return(
        <>
            <TitleHeader></TitleHeader>
            <Table dataSource={solicitudes} columns={columns}/>
        </>
    )
}/**/ 
