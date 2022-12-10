import  React,{ useEffect, useState} from "react";
import './ListRequest.scss';
import axios from 'axios';
import { Table,Tag,notification} from "antd";
import Button from 'react-bootstrap/Button';
import node from '../config/varGlobal'


//Componente Title
import TitleHeader from "../component/TitleHeader"; 


export default function List(){
    
    
    function ReloadPage(){
        window.location.reload()
    }

    function AceptarSolicitud(id){
        axios.patch(node + '/api/trabajador/aceptar/'+id)
        notification['success']({
            message:'Solicitud Aceptada'
        })
        
        setTimeout(ReloadPage,800)

        
        
    }
    
    function RechazarSolicitud(id){
        axios.patch( node + '/api/trabajador/rechazar/'+id)
        notification['success']({
            message:'Solicitud Rechazada'
        })
        
        setTimeout(ReloadPage,800)
        
    }
        
    
    //Para consumir la api de Node
    const [solicitudes, setSolicitud] = useState([])
    useEffect(()=>{
            axios.get( node + '/api/trabajador')
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
                title: 'Teléfono',
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
                render: fila => <><a href={node +'/' + fila[0]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento" color={'yellow'}>Antecedentes</Tag></a>
                <a href={node +'/' + fila[1]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento1" color={'yellow'}>Foto Carnet A</Tag></a>
                <a href={node +'/' + fila[2]} target={"_blank"} rel={"noreferrer noopener"}>
                    <Tag className="tagDocumento2" color={'yellow'}>Foto Carnet B</Tag></a>
                </>
            },
            {   
                title: 'Solicitud',
                dataIndex: "_id",
                key: "_id",
                render: fila => <><Button  id="buttonDocument" onClick={()=>AceptarSolicitud(fila)} variant="success" >Aceptar</Button>
                <Button  className="btn-danger" id="buttonDocument" variant="danger" onClick={()=>RechazarSolicitud(fila)}>Rechazar</Button></>
            },
            
        ]
    
    return(
        <>
            
            <TitleHeader></TitleHeader>
            <Table className="diseño-tabla" dataSource={solicitudes} columns={columns}/>
             
        </>
    )
}

