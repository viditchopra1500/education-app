import React from "react";
import "./Card.css";
import {Link } from 'react-router-dom';
function Card(props){
    return(
        <div className={props.theme?"box light":"box dark"}>
            <div className="content">
                <h2>{props.place}</h2>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Link to={{pathname:"/get-started"}} className="Link" onClick={()=>{
                    props.handleCardRoute(props.titlename);
                }}>Get Started</Link>
            </div>
        </div>
    );

}


export default Card;
