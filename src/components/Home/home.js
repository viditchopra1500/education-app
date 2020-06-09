import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Card from "./Card.jsx"
function Home(props){
    return(<div className="home-div">
        <section className="title-section">
            <div className="container-fluid">
                <h1 className="title-heading">EDUCATION APP</h1>
                <p>Add a small description of website here.Add a small description of website here.Add a small description of website here.Add a small description of website here.Add a small description of website here.Add a small description of website here.</p>
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
              <Card theme={props.theme} titlename={2} place="02" title="Parallel Programming" content="High Performance Computing enables extracting performance out of your application to solve BIG problems in science, engineering, business, and beyond." />
            </div>
            <div className="col-md-4 thi">
              <Card theme={props.theme} titlename={3} place="03" title="Open Multi-Processing" content="High Performance Computing enables extracting performance out of your application to solve BIG problems in science, engineering, business, and beyond." />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 below-first fou">
              <Card theme={props.theme} titlename={4} place="04" title="Graphics Processing Unit" content="High Performance Computing enables extracting performance out of your application to solve BIG problems in science, engineering, business, and beyond." />
            </div>
            <div className="col-md-6 below-second fif">
              <Card theme={props.theme} titlename={5} place="05" title="Message Passing Interface" content="High Performance Computing enables extracting performance out of your application to solve BIG problems in science, engineering, business, and beyond." />
            </div>
          </div>
        </section>
</div>)
}
export default Home;

