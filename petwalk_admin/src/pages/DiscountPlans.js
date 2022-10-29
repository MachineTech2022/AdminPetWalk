import React,{useState,useEffect} from "react";
import {} from "react-router-dom"; 
import './DiscountPlans.scss'
import axios from 'axios';
import { Table,Button,Input,notification,Modal,Form,message} from "antd";
//Componentes
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";


export default function DiscountPlans(){


    const [datos,setDatos]=useState([]);


    //Para consumir api de Node y listar
    useEffect(()=>{
        axios.get('http://localhost:4000/api/plan')
        .then(res => {
            setDatos(res.data)
            
        })
        
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const columns =[
        {
            title:'Costo',
            dataIndex:'costo',
            key:'costo'
        },
        {
            title:'Encabezado',
            dataIndex:'encabezado',
            key:'encabezado'
        },
        {
            title:'Agregar Descuento',
            dataIndex:'acciones',
            key:'acciones',
            render: (fila,row) => <><Button type="primary" >Agregar Descuento</Button>
            </>
        },
        
    ]


    return(
        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>
            <Table dataSource={datos} columns={columns}/>
        </div>
    )
}