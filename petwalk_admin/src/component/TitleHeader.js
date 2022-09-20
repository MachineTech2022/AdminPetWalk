import React from "react";
import './TitleHeader.scss';
import LogoPet from '../assets/img/LogoPet.png'
import {Row} from 'antd';

export default function TitleHeader(){
    return (
        <Row>
            <div className="title">  
                <img 
                    className="logo" 
                    src={LogoPet}
                    alt="LogoPet"
                />
            </div>
        </Row>
    )
}