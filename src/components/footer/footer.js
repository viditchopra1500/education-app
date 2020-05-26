import React from 'react';
import './footer.css'
import {Link } from 'react-router-dom';
import facebook from './facebook.png'
import insta from './instagram-sketched.png'
const footer=(props)=>{
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title">MADE BY</div>
                        <h4>IIT Madras Interns</h4>
                    </div>
                    <div className="col">
                    <div className="title">USEFUL LINKS</div>
                        <ul className="list-unstyled">
                        <li className="list"><Link to="/" type="button" className="text">Home</Link></li>
                        <li className="list"><Link to="/get-started" className="text">Get started</Link></li>
                        <li className="list"><Link to="/about-us" className="text">About-Us</Link></li>
                        &copy;{new Date().getFullYear()} IIT Madras | All rights reserved
                        </ul>
                    </div>
                    <div className="col">
                    <div className="title">Follow Us On</div>
                    <ul className="list-unstyled">
                    <li className="list"><a href="https://www.facebook.com/" className="text">
                    <img  src={facebook} alt="facebook" height="30px"/>
                    </a></li>
                    <li className="list"><a href="https://www.instagram.com/" className="text">
                    <img alt="facebook" src={insta} height="30px"/>
                        </a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default footer;