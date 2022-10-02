import React from "react";
import './Cards.scss';
import {Card} from 'antd';

export default function Cards(){
    return(
        <div className="content-target">
            <a href="/ListRequest">
                <Card className="target1" >
                    <p>Aceptar/Rechazar</p>
                    <p>Solicitud Paseadores</p>   
                </Card>
            </a>
            <a href="/ListWorkers">
                <Card className="target2" >
                    <p>Activar/Desactivar</p>
                    <p>Paseadores</p>   
                </Card>
            </a>
            <a href="/ListConsumers">
                <Card className="target3" >
                    <p>Activar/Desactivar</p>
                    <p>Consumidores</p>
                </Card>
            </a>
            <a href="/MenuDashboard">
                <Card className="target4" >
                    <p>Dashboard</p>
                </Card>
            </a>
        </div>
    )
}