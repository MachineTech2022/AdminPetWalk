import React, { useState, useEffect } from "react";
import "./Chart.scss";
import axios from 'axios';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let limpieza = [];
let fechaFinal = []
var contador = 0;


export default function Chart(props) {
  //Boletas filtradas ultimos 7 días 
  const [boletas, setBoletas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/api/boleta/filtro')
      .then(res => {
        setBoletas([...res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  

  console.log('primera', boletas.length)

  function Test() {
    console.log('test ejecutado', boletas)

    //Limpio el array antes de llenarlo nuevamente 


    //Lleno el array con  fecha y tatal cortando la fecha para mostrarlo de una manera mas limpia
    for (let s = 0; s < boletas.length; s++) {
      limpieza.push({ 'fecha': (boletas[s].fechaCompra).slice(0, 10), 'total': (boletas[s].totalPagado) })
    }



    //Agrupar por fecha y sumar el total de las fechas que sean iguales 
    let objDays = limpieza.reduce((acum, item) => {
      return !acum[item.fecha]
        ? { ...acum, [item.fecha]: item.total }
        : { ...acum, [item.fecha]: acum[item.fecha] + item.total }
    }, {})
    console.log(objDays)


    fechaFinal.length = fechaFinal.length - fechaFinal.length
    //creo data 
    for (var x = 0; x < Object.keys(objDays).length; x++) {
      fechaFinal.push({ 'Fecha': (Object.keys(objDays)[x]), 'Total': ((Object.values(objDays)[x])) })
      console.log(fechaFinal)
    }
    

    

  }

  Test()
  console.log(props.datos)
  if (boletas.length > 0) {

    return (

      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={fechaFinal}
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

}






