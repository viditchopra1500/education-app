import React from 'react';
import './aboutUs.css'
import goal from './goal.png'
const aboutUs=(props)=>{
    return (
        <section className="aboutus">
        <div className="container-fluid header">
            <div className="big-heading">
                Who We Are
            </div>
            <div className="feature-title">
                HPC is an e-learning app that aims to provide high quality video lectures from the topic of 
                high performance computing. 
                The HPC learning app makes use of original content, rich animations, interactive simulations and engaging video
                 lessons from India’s brightest minds. This app is made during the internship period under Prof Rupesh Nasre , CSE, IITM 
            </div>
        </div>
        <div className="container-fluid">
            <img src={goal} alt="goal" height="100px"></img>
            <div className="big-heading">
                Mission
            </div>
            <div  className="feature-title middle">
            Our mission is to provide free, world-class education to anyone, anywhere.
            Anyone can learn anything for free.
            Education is a human right.
            Delivering world class learning experience, We try to make learning contextual and visual, and not just theoretical.
            </div>
            </div>
            <div className="container-fluid header">
            <i class="fas fa-users fa-5x"></i>
            <div className="big-heading">
                Our Team
            </div>
            <div  className="feature-title desc">
                This is a guided project under Prof. Rupesh Nasre , Faculty CSE ,IITM.
                Our team consists of 8 members
            </div>
            <div className="row">
            <div className="feature-box col-lg-3">
                Adit
            </div>
            <div className="feature-box col-lg-3">
                Vidit
            </div>
            <div className="feature-box col-lg-3">
                Hariharan K
            </div>
            <div className="feature-box col-lg-3">
                Janarthanan K                
            </div>
            <div className="feature-box col-lg-3">
                Kavi
            </div>
            <div className="feature-box col-lg-3">
                Niketha Nethaji
            </div>
            <div className="feature-box col-lg-3">
                Shridhar
            </div>
            <div className="feature-box col-lg-3">
                Aishvarya Gopu
            </div>

            </div>
            </div>
        </section>
    )
};

export default aboutUs;