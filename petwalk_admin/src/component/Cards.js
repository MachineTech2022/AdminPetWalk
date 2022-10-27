import React from "react";
import './Cards.scss';
import {Card} from 'antd';

export default function Cards(){
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
            <a href="/AddPlans">
                <Card className="target" >
                    <p>Agregar Planes</p>   
                </Card>
            </a>
            <a href="/ModifyDeactivatePlans">
                <Card className="target" >
                    <p>Modificar/Desactivar Planes</p>   
                </Card>
            </a>
        </div>
    )
}