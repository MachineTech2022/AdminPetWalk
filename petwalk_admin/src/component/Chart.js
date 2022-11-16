import React,{useEffect,useState} from "react";
import "./Chart.scss";
import axios from 'axios';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

var fecha = []

export default function Chart(){
  
  
 //Boletas filtradas ultimos 7 días 
  const [boletas, setBoletas] = useState([])
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
    fecha.length = fecha.length - fecha.length

    //Lleno el array con  fecha y tatal cortando la fecha para mostrarlo de una manera mas limpia
    for(var i=0; i < boletas.length; i++){ 
            
        fecha.push({'fecha': (boletas[i].fechaCompra).slice(0,10) , 'total':(boletas[i].totalPagado)})
               
    }

    //Agreupar por fecha y sumar el total de las fechas que sean iguales 
    const objDays = fecha.reduce((acum, item) => {
        return !acum[item.fecha] 
        ? {...acum, [item.fecha]: item.total} 
        : { ...acum, [item.fecha]: acum[item.fecha] + item.total }
        
        
        }, {})
    console.log(objDays)
    //fecha.length = fecha.length - fecha.length
    
    //creo data 
    for(var x=0; x < Object.keys(objDays).length; x++){
        fecha.push({'fecha':(Object.keys(objDays)[x]), 'total':((Object.values(objDays)[x]))}) 
    }
    //fecha.length = fecha.length - fecha.length
    console.log('aqui')
}

Test()


  return (
    <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={fecha}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
      {/*<Line type="monotone" dataKey="cantidadCoins" stroke="#82ca9d" />*/}
    </LineChart>
  </ResponsiveContainer>
    </div>
)
}





  
