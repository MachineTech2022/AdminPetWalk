import  React,{ useEffect, useState} from "react";
import './ListRequest.scss';
import axios from 'axios';
import { Table,Button,Tag} from "antd";



//Componente Title
import TitleHeader from "../component/TitleHeader"; 









export default function List(){



    function AceptarSolicitud(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/trabajador/aceptar/'+id)
        window.location.reload()
    }
    
    function RechazarSolicitud(id){
        console.log(id)
        axios.patch('http://localhost:4000/api/trabajador/rechazar/'+id)
        window.location.reload()
    }
        
    
    //Para consumir la api de Node
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/trabajador')
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
                title: 'Documentos',
                dataIndex: "documentos",
                key: "documentos",
                render: fila => <><a href={"http://localhost:4000/" + fila[0]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento" color={'yellow'}>Antecedentes</Tag></a>
                <a href={"http://localhost:4000/" + fila[1]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento1" color={'yellow'}>Foto Carnet A</Tag></a>
                <a href={"http://localhost:4000/" + fila[2]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento2" color={'yellow'}>Foto Carnet B</Tag></a>
                </>
            },
            {   
                title: 'Solicitud',
                dataIndex: "_id",
                key: "_id",
                render: fila => <><Button id="buttonDocument" onClick={()=>AceptarSolicitud(fila)} type='primary' >Aceptar</Button>
                <Button id="buttonDocument" danger onClick={()=>RechazarSolicitud(fila)}>Rechazar</Button></>
            },
            
        ]
    
    return(
        <>
            <TitleHeader></TitleHeader>
            <Table dataSource={solicitudes} columns={columns}/>
             
        </>
    )
}


/*
()=>AceptarSolicitud(fila)
render: fila => <><Button onClick= {()=>console.log(columns.id)} type="primary">Aceptar</Button>{" "} <Button type="primary" danger>Rechazar</Button></>
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
                    <th>Solicitud</th>
                </tr>
            </thead>
            <tbody>
            {
                solicitudes.map(solicitud=>(
            <tr key={solicitud._id}>
                    <td>{solicitud.nombre}</td>
                    <td>{solicitud.apellido}</td>
                    <td>{solicitud.comuna}</td>
                    <td>{solicitud.genero}</td>
                    <td>{solicitud.telefono}</td>
                    <td>{solicitud.correo}</td>
                    <td>{solicitud.rut}</td>
                    <td>{solicitud.direccion}</td>
                    <td>{solicitud.fechaNacimiento}</td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[0]}>Ver</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[1]}>Ver</a></td>
                    <td><a href={'http://localhost:4000/'+solicitud.documentos[2]}>Ver</a></td>
                    <td><Button onClick= {()=>console.log(solicitud._id)}>Aceptar</Button><Button>Rechazar</Button></td>
            </tr>))
            }
            </tbody>   
            </div>  
*/ 

