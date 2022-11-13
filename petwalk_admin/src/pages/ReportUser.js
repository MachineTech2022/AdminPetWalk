import React, {useEffect,useState} from "react";
import './ReportUser.scss';
import axios from 'axios';
import { Table,Button,notification} from "antd";

//Componentes
import TitleHeader from "../component/TitleHeader";

let num = [];
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


    //revision

    const [boletas, setBoletas] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/boleta')
            .then(res => {
                setBoletas(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])


        function SumBoletas(){
            for(var i=0; i < boletas.length; i++){
                
                num.push(boletas[i].totalPagado)

                console.log(num)
                //console.log(boletas[i].totalPagado)             
            }
            let total = num.reduce((a, b) => a + b, 0);

            console.log(total)
            //Vaciar array
            num.length = num.length - num.length

            return total
        }
    

    return (
        <div>
            <TitleHeader/>
            <Table dataSource={reportes} data={consumers} columns={columns}/>
            <Button onClick={()=> SumBoletas()}>test</Button>
        </div>
    )
}