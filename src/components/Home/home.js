import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Card from "./Card.jsx"
function Home(props){
    return(<div className="home-div">
        <section className="title-section">
            <div className="container-fluid">
                <h1 className="title-heading">EDUCATION-APP</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="#cardid" className="title-button">Explore</a>
            </div>
        </section>
        <section className="feature-section" id="features">
            <div className="container-fluid">
                <div className="row">
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-laptop fa-4x"></i>
                        <h3 className="feature-title-home">Free For All</h3>
                        <p className="feature-para">All the contents on this website can be accessed free of cost</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-microchip fa-4x"></i>
                        <h3 className="feature-title-home">Important Skill</h3>
                        <p className="feature-para">This site imparts a very important skill in todays world</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="feature-icon fas fa-graduation-cap fa-4x"></i>
                        <h3 className="feature-title-home">Made by students</h3>
                        <p className="feature-para">All the contents on this site is made by students for students.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid card-section">
          <div className="row">
            <div className="col-md-4 fir" id="cardid">
              <Card titlename={1} place="01" title="High Performance Computing" content="add content here content here add content here add content here add content here" />
            </div>
            <div className="col-md-4 sec">
              <Card titlename={2} place="02" title="Parallel Programming" content="add content here add content here add content here add content here add content here" />
            </div>
            <div className="col-md-4 thi">
              <Card titlename={3} place="03" title="Open Multi-Processing" content="add content here add content here add content here add content here add content here" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 below-first fou">
              <Card titlename={4} place="04" title="Graphics Processing Unit" content="add content here add content here add content here add content here add content here" />
            </div>
            <div className="col-md-6 below-second fif">
              <Card titlename={5} place="05" title="Message Passing Interface" content="add content here add content here add content here add content here add content here" />
            </div>
          </div>
        </section>
</div>)
}
export default Home;

