import {Link } from 'react-router-dom';
import React from 'react';
import './navBar.css';
import homeicon from'./browser.png'
function navBar() {
    return (
        <div className="total">
        <div className="nav">
        <Link to="/" type="img" src={homeicon} class="homepage"><img src={homeicon} alt="Home" height="30px"></img></Link>
        <Link to="/get-started" className="text nv">Get started</Link>

        </div >
        <div className="nav right">
        <Link to="/about-us" className="text nv">About-Us</Link>
        </div>
        </div>
    )
}
export default navBar