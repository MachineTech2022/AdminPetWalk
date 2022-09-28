import  React,{ useEffect, useState} from "react";
import './ListWorkers.scss';
import axios from 'axios';
import { Table } from "antd";



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
            title: 'Antecedentes',
            dataIndex: 'documento',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[0]} target={"_blank"} rel={"noreferrer noopener"}>Ver</a>)
        },
        {
            title: 'Foto carnet A',
            dataIndex: 'documento1',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[1]} target={"_blank"} rel={"noreferrer noopener"} >Ver</a>)
        },
        {
            title: 'Foto carnet B',
            dataIndex: 'documento2',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[2]} target={"_blank"} rel={"noreferrer noopener"}>Ver</a>)
        },
        
    ]
    
    return(
        <div>
            <TitleHeader></TitleHeader>
            <Table dataSource={solicitudes} columns={columns}/> 
        </div>
    )
}