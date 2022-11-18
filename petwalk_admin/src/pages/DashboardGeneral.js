import React,{useState,useEffect} from "react";
import './DashboardGeneral.scss';
import axios from 'axios';

import { Button} from "antd";

//Componentes
import TitleHeader from "../component/TitleHeader";
import WidgetGeneral from "../component/WidgetGeneral"
import Featured from "../component/Featured";
import Chart from "../component/Chart";

//let limpieza=[];
//let fechaFinal = []
//var contador = 0;



export default function DashboardGeneral(props){

    //Boletas filtradas ultimos 7 días 
  /*const [boletas, setBoletas] = useState([])
  useEffect(()=>{
          axios.get('http://localhost:4000/api/boleta/filtro')
          .then(res => {
              setBoletas(res.data)        
          })         
          .catch(err=>{
              console.log(err)
          })
      }, [])
    
    
     
     function Test(){

      
       //Limpio el array antes de llenarlo nuevamente 
       //limpieza.length = limpieza.length - limpieza.length
     
       //Lleno el array con  fecha y tatal cortando la fecha para mostrarlo de una manera mas limpia
       for(var s=0; s < boletas.length; s++){ 
        
               
           limpieza.push({'fecha': (boletas[s].fechaCompra).slice(0,10) , 'total':(boletas[s].totalPagado)})
                     
       }
       

       
       //Agrupar por fecha y sumar el total de las fechas que sean iguales 
       var objDays = limpieza.reduce((acum, item) => {
           return !acum[item.fecha] 
           ? {...acum, [item.fecha]: item.total} 
           : { ...acum, [item.fecha]: acum[item.fecha] + item.total }
           
           
           }, {})
       console.log(objDays)
           
       //creo data 
       for(var x=0; x < Object.keys(objDays).length; x++){
           fechaFinal.push({'Fecha':(Object.keys(objDays)[x]), 'Total':((Object.values(objDays)[x]))}) 
       }
       console.log(fechaFinal)
       fechaFinal.length = fechaFinal.length - fechaFinal.length
       
     }*/



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
                <Chart  />
            </div>
            
        </div>
    )
}