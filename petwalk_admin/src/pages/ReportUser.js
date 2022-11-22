import React, {useEffect,useState} from "react";
import './ReportUser.scss';
import axios from 'axios';
import { Table} from "antd";

//Componentes
import TitleHeader from "../component/TitleHeader";




export default function ReportUser(){

    const [reportes, setReporte] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/reporte')
            .then(res => {
                setReporte(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])


    const [consumers, setConsumers] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/consumidor')
            .then(res => {
                setConsumers(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])


    const [worker, setWorker] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/trabajador/all')
            .then(res => {
                setWorker(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])
    

    function MapCosumer(id){
        for(let i=0; i < consumers.length; i++){
            if(id === consumers[i]._id){
                return (consumers[i].nombre)
            }
            
        }
    }

    function MapWorker(id){
        for(let i=0; i < worker.length; i++){
            if(id === worker[i]._id){
                return (worker[i].nombre)
            }
            
        }
    }


    function MapState(id){
        for(let i=0; i < worker.length; i++){
            if(id === worker[i]._id){
                return (worker[i].estado)
            }
        }
    }

    MapState()
       
    const columns= [
        {
            title: 'Nombre Cliente',
            dataIndex: 'descripcion',
            key: 'descripcion',
            render: (fila,row)=>  <p>{MapCosumer(row.idConsumidor)}</p>
            //<Button  onClick={()=> Test(row.idConsumidor)} >Test</Button>
        },
        {
            title: 'Nombre Paseador',
            dataIndex: 'descripcion',
            key: 'descripcion',
            render: (fila,row)=>  <p>{MapWorker(row.idTrabajador)}</p>
            //<Button  onClick={()=> Test(row.idConsumidor)} >Test</Button>
        },
        {
            title: 'Descripción',
            dataIndex: 'descripcion',
            key: 'descripcion'
        },
        {
            title:'Banear',
            dataIndex:'banear',
            key:'banear'
        },
        {
            title:'Ignorar Reporte',
            dataIndex:'ignorar',
            key:'ignorar'
        }
        
    ]
    

    return (
        <div>
            <TitleHeader/>
            <Table  dataSource={reportes} data={consumers} columns={columns}/>
            
        </div>
    )
}