import React,{useEffect} from "react";
import './ListWorkers.scss';
import { Table,Row } from "antd";

//Componente Title
import TitleHeader from "../component/TitleHeader";


export default function ListWorkers(){

    useEffect(()=>{
        const getWorkers = () =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json)
            .then(res => console.log(res))
        }
        getWorkers()
    },[])

    return(
        <div>
            <Row justify="center" className="title">
                <TitleHeader/>
            </Row>
            <Row>

            </Row>
        </div>
    )
}