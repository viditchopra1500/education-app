import {Link } from 'react-router-dom';
import React from 'react';
import './navBar.css';
function navBar() {
    return (
        <div className="total">
        <div className="nav">
        <Link to="/" ><h4 className="text">Education App</h4></Link>

        </div >
        <div className="nav right">
        <Link to="/get-started" className="text nv">Get started</Link>
        <Link to="/about-us" className="text nv">About-Us</Link>
        </div>
        </div>
    )
}
export default navBar