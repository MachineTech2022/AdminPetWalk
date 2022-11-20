import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


let limpieza = [];
let fechaFinal = []
var contador = 0;

export default function Prueba() {


    //Boletas filtradas ultimos 7 días 
  const [boletas, setBoletas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/api/boleta')
      .then(res => {
        setBoletas([...res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  

  function Test() {

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
    
    fechaFinal.length = fechaFinal.length - fechaFinal.length

    //creo data 
    for (var x = 0; x < Object.keys(objDays).length; x++) {
      fechaFinal.push({ 'Fecha': (Object.keys(objDays)[x]), 'Total': ((Object.values(objDays)[x])) })
      
    }
    

    

  }

  Test()
  console.log(fechaFinal)
  

    const EjeX =["May","June","December","test"]
    const datos =[542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
    
    //Opciones de grafico
    const options={
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                min:0,
                ticks:{
                    stepSize:50
                }
            }
        }
    };

    


    return (
        <div style={{height:"400px"
        ,width:"500px"}}>
      <Line 
        
        data={{
          labels: EjeX,
          datasets: [{
            label: "Active Users",
            borderColor: "#f96332",
            fill: false,
            backgroundColor: ['red'],
            data:datos
          }]
        }}
        options={options}
      />
    </div>
    )
}
