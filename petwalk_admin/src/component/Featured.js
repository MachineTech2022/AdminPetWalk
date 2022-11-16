import React from "react";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"


import {MoreOutlined,UpOutlined} from '@ant-design/icons';


export default function Featured(){

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
                <p className="amount">$400</p>
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