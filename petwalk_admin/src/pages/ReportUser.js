import React, {useEffect,useState} from "react";
import './ReportUser.scss';
import axios from 'axios';
import { Table,Button,notification} from "antd";

//Componentes
import TitleHeader from "../component/TitleHeader";

let fecha = []

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
        
    ]

    //Boletas filtradas ultimos 7 días 
  const [boletas, setBoletas] = useState([])
  useEffect(()=>{
          axios.get('http://localhost:4000/api/boleta/filtro')
          .then(res => {
              setBoletas(res.data)
              
          })
          
          .catch(err=>{
              console.log(err)
          })
      }, [])



function Test(){
    fecha.length = fecha.length - fecha.length
    for(var i=0; i < boletas.length; i++){
        
        //Filtro de fechas distintas 
        if ( i === 0){
            fecha.push((boletas[i].fechaCompra).slice(0,10) )
        }
        else{
            if((boletas[i].fechaCompra).slice(0,10) !== (boletas[i-1].fechaCompra).slice(0,10)){
                fecha.push((boletas[i].fechaCompra).slice(0,10))
            }
        }

        
        
            
        //fecha.push((boletas[i].fechaCompra).slice(0,10))
        //fecha.push({'fecha': (boletas[i].fechaCompra).slice(0,10) , 'total':(boletas[i].totalPagado)})
        console.log((fecha))
        
                  
    }
    
    //console.log(typeof(boletas))
}

        
    

    return (
        <div>
            <TitleHeader/>
            <Table dataSource={reportes} data={consumers} columns={columns}/>
            <Button onClick={()=> Test()}>Test</Button>
        </div>
    )
}