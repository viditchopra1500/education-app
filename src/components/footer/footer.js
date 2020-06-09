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
                        <div className="footer title"><h4>Made By</h4></div>
                        <h5>IIT Madras Interns</h5>
                    </div>
                    <div className="col">
                    <div className="footer title"><h4>Links</h4></div>
                        <ul className="list-unstyled">
                        <li className="footer list"><Link to="/" type="button" style={{textDecoration:'none',color:"inherit"}} ><h5 className="footer text">Home</h5></Link></li>
                        <li className="footer list"><Link to="/about-us" style={{textDecoration:'none',color:"inherit"}}><h5 className="footer text">About Us</h5></Link></li>
                        &copy;{new Date().getFullYear()} IIT Madras | All rights reserved
                        </ul>
                    </div>
                    <div className="col">
                    <div className="footer title"><h4>Follow Us On</h4></div>
                    <ul className="list-unstyled">
                    <li className="footer list"><a href="https://www.facebook.com/ReachIITM/" className="text">
                    <img  src={facebook} alt="facebook" height="30px"/>
                    </a></li>
                    <li className="footer list"><a href="https://www.instagram.com/explore/locations/13479514/iit-madras/" className="text">
                    <img alt="facebook" src={insta} height="30px"/>
                        </a></li>
                    <li></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default footer;