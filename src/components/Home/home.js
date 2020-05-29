import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {Link } from 'react-router-dom';
function Home(){
    const car1=["System Calls","Virtual Memory","Registers","Addressing Modes","Types Of instructions"];
    const car2=["ISA","Floating Point Arithmetic","ALU","Cache","Locality"];
    const car3=["Cache Replacement Policy","Page Table","TLB","Pipeline","Hazards"];
    const car4=["IPC","Process Scheduling Algorithm","Preemption","Priority inversions","Interrupts"];
    const car5=["Profiling","File Systems","Links","Belady's Anomaly","Setuid bit"];
    return(<div className="scroll">
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
                    {car1.map((value)=><h4>{value}</h4>)}
                </div>
                <div class="carousel-item">
                    {car2.map((value)=><h4>{value}</h4>)}
                </div>
                <div class="carousel-item">
                    {car3.map((value)=><h4>{value}</h4>)}
                </div>
                <div class="carousel-item">
                    {car4.map((value)=><h4>{value}</h4>)}
                </div>
                <div class="carousel-item">
                    {car5.map((value)=><h4>{value}</h4>)}
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators"  data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </section>

</div>)
}
export default Home;
