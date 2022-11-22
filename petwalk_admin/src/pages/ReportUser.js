import React, {useEffect,useState} from "react";
import './ReportUser.scss';
import axios from 'axios';
import { Table, Button, notification} from "antd";

//Componentes
import TitleHeader from "../component/TitleHeader";




export default function ReportUser(){

    function ReloadPage(){
        window.location.reload()
    }

    const [reportes, setReporte] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/reporte/reporteActivo')
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
    
    //Función para desactivar el reporte
    function IgnoreReport(id){
        axios.patch('http://localhost:4000/api/reporte/reporteDesactivar/'+id)
        notification['success']({
            message:'Reporte Ignorado'
        })
        
        setTimeout(ReloadPage,800)
    }


    // Se banea al trabajador y se cambia el estado del reporte
    function BanWorkers(idTrabajador,idReporte){
        console.log(idTrabajador)
        axios.patch('http://localhost:4000/api/trabajador/banear/'+idTrabajador)
        notification['success']({
            message:'Cuenta Baneada'
        })

        axios.patch('http://localhost:4000/api/reporte/reporteDesactivar/'+idReporte)
        
        
        setTimeout(ReloadPage,800)
        
    }
    
    function MapCosumer(id){
        for(var i=0; i < consumers.length; i++){
            if(id === consumers[i]._id){
                return (consumers[i].nombre)
            }
            
        }
    }

    function MapWorker(id){
        for(var i=0; i < worker.length; i++){
            if(id === worker[i]._id){
                return (worker[i].nombre)
            }
            
        }
    }


    

    
       
    const columns= [
        {
            title: 'Nombre Cliente',
            dataIndex: 'descripcion',
            key: 'descripcion',
            render: (fila,row)=>  <p>{MapCosumer(row.idConsumidor)}</p>
            //<Button  onClick={()=> Test(row.idConsumidor)} >Test</Button>
        },
        {
            title: 'Nombre Paseador Reportado',
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
            key:'banear',
            render: (fila,row)=> <Button onClick={()=> BanWorkers(row.idTrabajador,row._id)}>Banear Paseador</Button>
        },
        {
            title:'Ignorar',
            dataIndex:'ignorar',
            key:'ignorar',
            render: (fila, row)=> <Button onClick={()=> IgnoreReport(row._id)}>Ignorar</Button>
        }
        
    ]
    

    return (
        <div>
            <TitleHeader/>
            <Table className="diseño-tabla" dataSource={reportes} data={consumers} columns={columns}/>
            
        </div>
    )
}