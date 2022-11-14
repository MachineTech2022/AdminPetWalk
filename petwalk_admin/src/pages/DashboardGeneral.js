import React from "react";
import './DashboardGeneral.scss';



//Componentes
import TitleHeader from "../component/TitleHeader";
import WidgetGeneral from "../component/WidgetGeneral"
import Featured from "../component/Featured";
import Chart from "../component/Chart";

export default function DashboardGeneral(props){


    

    
    
    


    return (
        <div>
            
            <TitleHeader></TitleHeader>
            <div className="containerWidget">
                <WidgetGeneral type="usersWorker"/>
                <WidgetGeneral type="userConsumers"/>
                <WidgetGeneral type="request"/>
                <WidgetGeneral type="salesPlans"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
        </div>
    )
}