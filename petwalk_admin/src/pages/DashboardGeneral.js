import React from "react";
import './DashboardGeneral.scss';


//Componentes
import TitleHeader from "../component/TitleHeader";
import Icons from "../component/Icons";
import WidgetGeneral from "../component/WidgetGeneral"

export default function DashboardGeneral(){
    return (
        <div>
            <div className="icons1">
                <Icons/>
            </div>
            <TitleHeader></TitleHeader>
            <div className="containerWidget">
                <WidgetGeneral/>
                <WidgetGeneral/>
                <WidgetGeneral/>
                <WidgetGeneral/>
            </div>
        </div>
    )
}