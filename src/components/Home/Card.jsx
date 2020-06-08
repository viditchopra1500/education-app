import React from "react";
import "./Card.css";
import {Link } from 'react-router-dom';
function Card(props){
    return(
        <div class="box">
            <div class="content">
                <h2>{props.place}</h2>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <Link to={{pathname:"/get-started",titlename:props.titlename}} className="Link">Get Started</Link>
            </div>
        </div>
    );

}


export default Card;
