import React from 'react'
function App(){
    return(<div>
        <header>HEADER</header>
        {/* title section */}
        <section className="colored-section" id="title">
            <div className="container-fluid">
                <div className="col-lg-6 buffer">
                    <h1 className="big-heading">High Performance Computing</h1>
                    <a className="btn btn-outline-info btn-lg align-button" href="">Get Started</a>
                    <a className="btn btn-outline-info btn-lg align-button" href="#cta">Explore</a>
                </div>
                <div class="col-lg-6">
                    <img className="title-image" src="./images/intro.png" alt="intro-img" />
                </div>
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
            <div className="container-fluid">
                <h3 className="big-heading">Add content here</h3>
            </div>
        </section>
        {/*footer*/}
        <footer>FOOTER</footer>

</div>)
}
export default App;