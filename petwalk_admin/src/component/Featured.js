import React,{useEffect,useState} from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import axios from 'axios';

import {MoreOutlined,UpOutlined} from '@ant-design/icons';




let num = [];

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


    function SumBoletas(){
        for(var i=0; i < boletas.length; i++){
            
            num.push(boletas[i].totalPagado)
    
            console.log(num)
            //console.log(boletas[i].totalPagado)             
        }
        let total = num.reduce((a, b) => a + b, 0);
        
        const formatterPeso = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
          })

        total =(formatterPeso.format(total))


        
        //Vaciar array
        num.length = num.length - num.length
    
        return total
    }

    return(
        <div className="featured">
            <div className="top">
                <h1 className="titleRevenue">Total Revenue</h1>
                <MoreOutlined className="moreOutlined"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <p  className="title1">Total</p>
                <p className="amount">{SumBoletas()}</p>
                <p className="descripcion">Descripción</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult">
                             <UpOutlined fontSize="small"/>
                            <div className="resultAmount">$554</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult">
                             <UpOutlined fontSize="small"/>
                            <div className="resultAmount">$554</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}