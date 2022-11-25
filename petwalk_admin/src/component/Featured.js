import React,{useState,useEffect} from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import axios from 'axios';


import {MoreOutlined,UpOutlined} from '@ant-design/icons';


let numLastMonth=[]
let numCurrentMonth =[]
export default function Featured(){

    const [boletas, setBoletas] = useState([])
    useEffect(()=>{
            axios.get('http://localhost:4000/api/boleta')
            .then(res => {
                setBoletas(res.data)
                
            })
            
            .catch(err=>{
                console.log(err)
            })
        }, [])


    

        const [allReportes, setallReporte] = useState([])
        useEffect(()=>{
                axios.get('http://localhost:4000/api/reporte')
                .then(res => {
                    setallReporte(res.data)
                    
                })
                
                .catch(err=>{
                    console.log(err)
                })
            }, [])
        
        

        const [reportes, setReporte] = useState([])
         useEffect(()=>{
                axios.get('http://localhost:4000/api/reporte/reporteActivo')
                .then(res => {
                    setReporte(res.data)
                
                })
            
                .catch(err=>{
                    console.log(err)
                })
            }, [])
        
        function Porcentaje(){
            let porcentaje = (reportes.length / allReportes.length) *100
            return(100-(Math.trunc(porcentaje)))  
        }
    
        


    
    function CurrentMonth(){
        
        numCurrentMonth.length= numCurrentMonth.length - numCurrentMonth.length
        const fechaActual = new Date();
        const mesPasado = fechaActual.getMonth() + 1; 
        
        
        
        for (let s = 0; s < boletas.length; s++) {
            if(mesPasado.toString() === (boletas[s].fechaCompra).slice(5, 7)){
                numCurrentMonth.push((boletas[s].totalPagado) )
            }
          }

        
        let totalCurrentMonth = numCurrentMonth.reduce((a, b) => a + b, 0);

        //Formatear el total a CLP
        const formatterPeso = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
          })        
        totalCurrentMonth =(formatterPeso.format(totalCurrentMonth))

        return totalCurrentMonth
    }

    
    function SumMonthLast(){
        
        numLastMonth.length= numLastMonth.length - numLastMonth.length
        const fechaActual = new Date();
        const mesPasado = fechaActual.getMonth(); 
        
        
        
        for (let s = 0; s < boletas.length; s++) {
            if(mesPasado.toString() === (boletas[s].fechaCompra).slice(5, 7)){
                numLastMonth.push((boletas[s].totalPagado) )
            }
            
          }

        
        let totalLastMonth = numLastMonth.reduce((a, b) => a + b, 0);

        //Formatear el total a CLP
        const formatterPeso = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
          })        
        totalLastMonth =(formatterPeso.format(totalLastMonth))

        return totalLastMonth
    }

    console.log("asAS")

    return(
        <div className="featured">
            <div className="top">
                <h1 className="titleRevenue">Reportes</h1>
                <MoreOutlined className="moreOutlined"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={Porcentaje()} text={"%"+Porcentaje()} strokeWidth={5}/>
                </div>
                <p  className="title1">Porcentaje revisados</p>
                <p className="amount">{reportes.length}</p>
                <p className="descripcion">Reportes por revisar</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Ventas Mes Actual</div>
                        <div className="itemResult">
                             <UpOutlined fontSize="small"/>
                            <div className="resultAmount">{CurrentMonth()}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Ventas Mes Anterior</div>
                        <div className="itemResult">
                             <UpOutlined fontSize="small"/>
                            <div className="resultAmount">{SumMonthLast()}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}