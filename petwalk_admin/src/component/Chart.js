import React,{useState,useEffect} from "react";
import "./Chart.scss";
import axios from 'axios';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/*let limpieza=[];
let fechaFinal = []
var contador = 0;*/


export default function Chart(props){
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
    
    console.log(boletas.length)*/
     
     /*function Test(){

      
       //Limpio el array antes de llenarlo nuevamente 
       //limpieza.length = limpieza.length - limpieza.length
     
       //Lleno el array con  fecha y tatal cortando la fecha para mostrarlo de una manera mas limpia
       /*for(var s=0; s < boletas.length; s++){ 
               
           limpieza.push({'fecha': (boletas[s].fechaCompra).slice(0,10) , 'total':(boletas[s].totalPagado)})
           console.log(limpieza)
                  
       }*/
       

       
       //Agrupar por fecha y sumar el total de las fechas que sean iguales 
       /*var objDays = limpieza.reduce((acum, item) => {
           return !acum[item.fecha] 
           ? {...acum, [item.fecha]: item.total} 
           : { ...acum, [item.fecha]: acum[item.fecha] + item.total }
           
           
           }, {})
       console.log(objDays)
           
       //creo data 
       for(var x=0; x < Object.keys(objDays).length; x++){
           fechaFinal.push({'Fecha':(Object.keys(objDays)[x]), 'Total':((Object.values(objDays)[x]))}) 
           console.log(fechaFinal)
       }
       
       //fecha.length = fecha.length - fecha.length
       
     }*/
          
     /*while( contador < 4){
         Test()
         //console.log(limpieza)
         console.log(contador)
         contador = contador +1
     }*/
    console.log(props.datos)
     return (
      <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={0}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Fecha" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/*<Line type="monotone" dataKey="cantidadCoins" stroke="#82ca9d" />*/}
      </LineChart>
    </ResponsiveContainer>
      </div>
  )
  
}





  
