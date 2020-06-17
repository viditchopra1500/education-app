import React from 'react';
import './aboutUs.css'
import goal from './goal.png'
const aboutUs=(props)=>{
    return (
        <section className="aboutus">
        <div className="container-fluid header">
            <div className="big-heading aboutus">
                Who We Are
            </div>
            <div className="feature-title top">
                HPC is an e-learning app that aims to provide high quality video lectures from the topic of 
                high performance computing. 
                The HPC learning app makes use of original content, rich animations, interactive simulations and engaging video
                 lessons from India’s brightest minds. This app is made during the internship period under Prof Rupesh Nasre , CSE, IITM 
            </div>
        </div>
        <div className="container-fluid middle">
            <img src={goal} alt="goal" height="100px"></img>
            <div className="big-heading aboutus">
                Mission
            </div>
            <div  className="feature-title middle">
            Our mission is to provide free, world-class education to anyone, anywhere.
            Anyone can learn anything for free.
            Education is a human right.
            Delivering world class learning experience, We try to make learning contextual and visual, and not just theoretical.
            </div>
            </div>
            <div className="container-fluid bottom">
            <i className="user-icon fas fa-users fa-5x"></i>
            <div className="big-heading aboutus">
                Our Team
            </div>
            <div  className="feature-title desc">
                This is a guided project under Prof. Rupesh Nasre , Faculty CSE ,IITM.
                Our team consists of 10 members
            </div>
            <div className="row aboutus">
            <div className="feature-box col-md-3">
                <ol className="list tit">
                    <h5>Web dev Team</h5>
                    <li>Shridhar</li>
                    <li>Vidit</li>
                </ol>
            </div>
            <div className="feature-box col-md-3">
                <ol className="list tit">
                <h5>Video Team 1</h5>
                <li>Adit</li>
                <li>Divya</li>
                <li>Niketha Nethaji</li>
            </ol>
            </div>
            <div className="feature-box col-md-3">
            <ol className="list tit">
            <h5>Video Team 2</h5>
                <li>Aishvarya Gopu</li>
                <li>Janarthanan K</li>
            </ol>
            </div>
            <div className="feature-box col-md-3">
            <ol className="list tit">
                <h5>App dev team</h5>
                <li>Hariharan K</li>
                <li>Kavi</li>
                <li>Krishna</li>
            </ol>
            </div>

            </div>
            </div>
        </section>
    )
};

export default aboutUs;