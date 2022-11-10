import React, {useEffect,useState} from "react";
import './ReportUser.scss';
import axios from 'axios';
import { Table,Button,notification} from "antd";

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

    const columns= [
        {
            title: 'ID CONSUMIDOR',
            dataIndex: 'idConsumidor',
            key: 'idConsumidor'
        },
    ]
    

    return (
        <div>
            <TitleHeader/>
            <Table dataSource={reportes} columns={columns}/>
        </div>
    )
}