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
            <a href="/ModifyDeactivatePlans">
                <Card className="target" >
                    <p>Planes</p>
                    <p>Agregar Planes</p>
                    <p>Modificar Activar/Desactivar</p>   
                </Card>
            </a>
            <a href="/DiscountPlans">
                <Card className="target" >
                    <p>Descuentos Planes</p> 
                </Card>
            </a>
            <a href="/ReportUser">
                <Card className="target" >
                    <p>Reportes de usuarios</p> 
                </Card>
            </a>
        </div>
    )
}