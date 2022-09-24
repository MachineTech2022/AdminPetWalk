import  React,{ useEffect, useState} from "react";
import './ListWorkers.scss';
import axios from 'axios';
import { Table,Row} from "antd";



//Componente Title
import TitleHeader from "../component/TitleHeader"; 


export default function ListWorkers(){
    
    
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/trabajador')
            .then(res => {
                //console.log(res);
                setSolicitud(res.data)
            }).catch(err=>{
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
            title: 'Genero',
            dataIndex: 'genero',
            key: 'genero'
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
            title: 'Antecedentes',
            dataIndex: 'documento',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[0]}>Ver</a>)
        },
        {
            title: 'Foto carnet A',
            dataIndex: 'documento1',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[1]}>Ver</a>)
        },
        {
            title: 'Foto carnet B',
            dataIndex: 'documento2',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[2]}>Ver</a>)
        },
    ]
    //console.log(solicitudes.map(solicitud => (key={solicitud.id})))
    return(
        <div>
            <TitleHeader></TitleHeader>
            <Table dataSource={solicitudes} columns={columns}/> 
             
        </div>
        
        
        /*<div>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Comuna</th>
                    <th>Genero</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Rut</th>
                    <th>Direccion</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Antecedentes</th>
                    <th>Carnet Frontal</th>
                    <th>Carnet Trasero</th>
                </tr>
            </thead>
            <tbody>
            
            {
                solicitudes.map(solicitud=>(
            <tr key={solicitud.id}>
                    <td>{solicitud.nombre}</td>
                    <td>{solicitud.apellido}</td>
                    <td>{solicitud.comuna}</td>
                    <td>{solicitud.genero}</td>
                    <td>{solicitud.telefono}</td>
                    <td>{solicitud.correo}</td>
                    <td>{solicitud.rut}</td>
                    <td>{solicitud.direccion}</td>
                    <td>{solicitud.fechaNacimiento}</td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[0]}>Descargar</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[1]}>Descargar</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[2]}>Descargar</a></td>

            </tr>))
            }
            </tbody>      
            <div>
                {solicitudes.map((solicitud)=>
                <h1>{solicitud.documentos[0]}</h1>)}
            </div> 
            
        </div>*/
    )
}

/*
<div>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Comuna</th>
                    <th>Genero</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Rut</th>
                    <th>Direccion</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Antecedentes</th>
                    <th>Carnet Frontal</th>
                    <th>Carnet Trasero</th>
                </tr>
            </thead>
            <tbody>
            {
                solicitudes.map(solicitud=>(
            <tr key={solicitud.id}>
                    <td>{solicitud.nombre}</td>
                    <td>{solicitud.apellido}</td>
                    <td>{solicitud.comuna}</td>
                    <td>{solicitud.genero}</td>
                    <td>{solicitud.telefono}</td>
                    <td>{solicitud.correo}</td>
                    <td>{solicitud.rut}</td>
                    <td>{solicitud.direccion}</td>
                    <td>{solicitud.fechaNacimiento}</td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[0]}>Descargar</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[1]}>Descargar</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[2]}>Descargar</a></td>

            </tr>))
            }
            </tbody>        
        </div>
*/