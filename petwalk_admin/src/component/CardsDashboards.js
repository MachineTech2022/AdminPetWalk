import React from "react";
import './CardsDashboards.scss';
import {Card} from 'antd';

export default function CardsDashboars(){
    return(
        <div className="content-target">
            <a href="/DashboardGeneral">
                <Card className="target" >
                    <p>Dashboard</p>
                    <p>Generales</p>   
                </Card>
            </a>
            <a href="/DashboardGeneral">
                <Card className="target" >
                    <p>Dashboard</p>
                    <p>Generales</p>   
                </Card>
            </a>
            <a href="/DashboardGeneral">
                <Card className="target" >
                    <p>Dashboard</p>
                    <p>Generales</p>   
                </Card>
            </a>
            <a href="/DashboardGeneral">
                <Card className="target" >
                    <p>Dashboard</p>
                    <p>Generales</p>   
                </Card>
            </a>
        </div>
    )
}