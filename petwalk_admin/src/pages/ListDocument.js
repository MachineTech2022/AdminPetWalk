import  React,{ useEffect, useState} from "react";
import './ListDocument.scss';
import axios from 'axios';
import { Table } from "antd";
import Antecedentes from '../assets/img/Antecedentes.png';
import CedulaA from '../assets/img/CedulaA.png';
import CedulaB from '../assets/img/CedulaB.jpg';



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
            dataIndex: 'documentos',
            key: 'documentos',
            render: f => <p>{f}</p>
        },
        {
            title: 'Foto carnet A',
            dataIndex: 'documento1',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[1]} target={"_blank"} rel={"noreferrer noopener"} >
                    <img className="cedulaA" src={CedulaA} alt='cesulaA' width={100} /></a>)
        },
        {
            title: 'Foto carnet B',
            dataIndex: 'documento2',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <a href={"http://localhost:4000/"+solicitud.documentos[2]} target={"_blank"} rel={"noreferrer noopener"}>
                    <img className="cedulaB" src={CedulaB} alt='cesulaB' width={100} /></a>)
        },
        {
            title: 'Foto + Carnet',
            dataIndex: 'documento',
            key: 'documento',
            render: fila => solicitudes.map((solicitud)=>
                <><a href={"http://localhost:4000/"+solicitud.documentos[0]} target={"_blank"} rel={"noreferrer noopener"}>Ver</a></>)
        },
        
    ]
    
    return(
        <div>
            <TitleHeader></TitleHeader>
            <Table dataSource={solicitudes} columns={columns}/> 
        </div>
    )
}