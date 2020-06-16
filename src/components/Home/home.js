import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Card from "./Card.jsx"
function Home(props){
    return(<div className="home-div">
        <section className="title-section">
            <div className="container-fluid">
                <h1 className="title-heading">HPC EDUCATION</h1>
                <p> "A platform for HPC enthusiasts to learn the basic concepts in high performance computing."</p>
                <a href="#cardid" className={props.theme?"title-button-light":"title-button-dark"}>Explore</a>
            </div>
        </section>
        <section className="feature-section" id="features">
            <div className="container-fluid">
                <div className="row">
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-laptop fa-4x"></i>
                        <h3 className="feature-title-home">Free For All</h3>
                        <p>All the contents on this website can be accessed free of cost</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-microchip fa-4x"></i>
                        <h3 className="feature-title-home">Important Skill</h3>
                        <p>This site imparts a very important skill in todays world</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-graduation-cap fa-4x"></i>
                        <h3 className="feature-title-home">Made by students</h3>
                        <p>All the contents on this site is made by students for students.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid card-section">
          <div className="row">
            <div className="col-md-4 fir" id="cardid">
              <Card theme={props.theme} titlename={1} place="01" title="High Performance Computing" content="High Performance Computing enables extracting performance out of your application to solve BIG problems in science, engineering, business, and beyond." />
            </div>
            <div className="col-md-4 sec">
              <Card theme={props.theme} titlename={2} place="02" title="Parallel Programming" content="Parallel Programming is about thinking using aggregates, synchronizing with multiple workers, and executing simultaneously on several compute units. Together, the team of workers completes its subtasks to achieve efficient completion of a major task." />
            </div>
            <div className="col-md-4 thi">
              <Card theme={props.theme} titlename={3} place="03" title="Open Multi-Processing" content="OpenMP is one of the most popular frameworks to parallelize your CPU applications. It provides an annotation-based API to incrementally parallelize a sequential application." />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 below-first fou">
              <Card theme={props.theme} titlename={4} place="04" title="Graphics Processing Unit" content="CUDA is a popular language to program NVIDIA GPUs. It divides hundreds of thousands of threads into a computation hierarchy, exposes memory hierarchy, and provides several optimization techniques to make programs more efficient." />
            </div>
            <div className="col-md-6 below-second fif">
              <Card theme={props.theme} titlename={5} place="05" title="Message Passing Interface" content="MPI is a de facto standard to program distributed systems. It works with message passing across various nodes in the network where senders and receivers exchange information, and communicate to achieve a common task. Unlike other paradigms, distributed systems do not have a shared memory." />
            </div>
          </div>
        </section>
</div>)
}
export default Home;

