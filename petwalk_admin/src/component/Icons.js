import React from "react";
import './Icons.scss';
import {HomeOutlined,PoweroffOutlined} from '@ant-design/icons';



export default function Icons(){
    return(
        <div className="content-icons" style={{fontSize:'35px'}}>
            <a href="/MenuMajor"><HomeOutlined  className="home-icon"/></a>
            <a href="/"><PoweroffOutlined className="session-icon"/></a>
        </div>
    )
}