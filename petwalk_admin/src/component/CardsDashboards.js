import React from "react";
import './CardsDashboards.scss';
import {Card} from 'antd';

export default function CardsDashboars(){
    return(
        <div className="content-target">
            <a href="/ListRequest">
                <Card className="target" >
                    <p>Aceptar/Rechazar</p>
                    <p>Solicitud Paseadores</p>   
                </Card>
            </a>
            <a href="/ListWorkers">
                <Card className="target" >
                    <p>Activar/Desactivar</p>
                    <p>Paseadores</p>   
                </Card>
            </a>
            <a href="/ListConsumers">
                <Card className="target" >
                    <p>Activar/Desactivar</p>
                    <p>Consumidores</p>
                </Card>
            </a>
            <a href="/MenuDashboard">
                <Card className="target" >
                    <p>Dashboard</p>
                </Card>
            </a>
        </div>
    )
}