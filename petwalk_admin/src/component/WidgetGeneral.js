import React,{useEffect,useState} from "react";
import "./WidgetGeneral.scss";
import {UpOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import axios from 'axios';

const WidgetGeneral=({type})=>{

    // Consumidores
    const [consumidores, getConsumidores] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/consumidor')
            .then(res => {
                getConsumidores(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])

    // Solicitudes de trabajadores    
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



    const [worker, setWorkers] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/trabajador/all')
            .then(res => {
                setWorkers(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])


    let data;

    //temporal
    const diff= 20;

        switch(type){
            case "usersWorker":
                data={
                    titulo: "Usuarios Paseadores",
                    isMoney:false,
                    link:"Cantidad total usuarios",
                    cantidad: worker.length,
                    icon: <UserOutlined className="iconUser" style={{color:"crimson"}}/>,
                };
                break;
                case "userConsumers":
                    data={
                        titulo: "Usuarios Consumidores",
                        isMoney:false,
                        link:"Cantidad total de usuarios",
                        cantidad: consumidores.length,
                        icon: <UserOutlined className="iconUser" style={{color:"blue"}}/>,
                    };
                    break;
                case "salesPlans":
                data={
                    titulo: "Ventas de Planes",
                    isMoney:true,
                    link:"Total de ventas",
                    icon: <ShoppingCartOutlined className="iconSalesPlans" style={{color:"yellow"}}/>,
                };
                    break;
                case "request":
                data={
                    titulo: "Solicitudes Pendientes",
                    isMoney:false,
                    cantidad:solicitudes.length,
                    link:"Cantidad de solicitudes pendientes",
                    icon: <UserOutlined className="iconUser" style={{color:"green"}}/>,
                };
                break;
                default:
                    break;

        }

        
    
    return(
        <div className="widgetGeneral">
            <div className="left">
                <span className="titleSpan  ">{data.titulo}</span>
                <span className="counter">{data.isMoney && "$"} {data.cantidad}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="porcentage positive">
                <UpOutlined/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}


export default WidgetGeneral