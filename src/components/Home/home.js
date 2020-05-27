import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {Link } from 'react-router-dom';
function Home(){
    return(<div>
        {/* title section */}
        <section id="title">
            <div className="container-fluid">
                <h1 className="big-heading">High Performance Computing</h1>
                <p>High Performance Computing most generally refers to the practice of aggregating computing power in a way that delivers much higher performance than one could get out of a typical desktop computer or workstation in order to solve large problems in science, engineering, or business.</p>
                <Link to="/get-started" className="btn btn-info btn-lg align-button">Get Started</Link>
                <a className="btn btn-info btn-lg align-button" href="#cta">Explore</a>
            </div>
        </section>
        {/* feature section */}
        <section className="white-section" id="features">
            <div className="container-fluid">
                <div className="row">
                    <div className="feature-box col-lg-4">
                        <i className="icon fas fa-laptop fa-4x"></i>
                        <h3 className="feature-title">Free For All</h3>
                        <p>All the contents on this website can be accessed free of cost</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="icon fas fa-microchip fa-4x"></i>
                        <h3 className="feature-title">Important Skill</h3>
                        <p>This site imparts a very important skill in todays world</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="icon fas fa-graduation-cap fa-4x"></i>
                        <h3 className="feature-title">Made by students</h3>
                        <p>All the contents on this site is made by students for students.So we understand your needs</p>
                    </div>
                </div>
            </div>
        </section>
        {/* explore section */}
        <section className="colored-section" id="cta">
        <h1 className="topic-heading">Topics That We Cover...</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h4>System Calls</h4>
                    <h4>Virtual Memory</h4>
                    <h4>Registers</h4>
                    <h4>Addressing Modes</h4>
                    <h4>Types Of instructions</h4>
                </div>
                <div class="carousel-item">
                    <h4>ISA</h4>
                    <h4>Floating Point Arithmetic</h4>
                    <h4>ALU</h4>
                    <h4>Cache</h4>
                    <h4>Locality</h4>
                </div>
                <div class="carousel-item">
                    <h4>Cache Replacement Policy</h4>
                    <h4>Page Table</h4>
                    <h4>TLB</h4>
                    <h4>Pipeline</h4>
                    <h4>Hazards</h4>
                </div>
                <div class="carousel-item">
                    <h4>IPC</h4>
                    <h4>Process Scheduling Algorithm</h4>
                    <h4>Preemption</h4>
                    <h4>Priority inversions</h4>
                    <h4>Interrupts</h4>
                </div>
                <div class="carousel-item">
                    <h4>Profiling</h4>
                    <h4>File System</h4>
                    <h4>Links</h4>
                    <h4>Belady's Anomaly</h4>
                    <h4>Setuid bit</h4>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </section>
        {/*footer*/}

</div>)
}
export default Home;
