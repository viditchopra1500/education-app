import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import {Link } from 'react-router-dom';

function Home(){
    
    return(    
    <div className="container-fluid pack">
      <div className="row">
        <Link to={{pathname:"/get-started",titlename:1}} className="nodecoration">
          <div className="card">
            <div class="card-image"></div>
            <div class="card-text">
              <h2>Post One</h2>
              <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div class="card-stats">
              <div class="stat">

              </div>

              <div class="stat">

              </div>
            </div>
          </div>
        </Link>

        <Link to={{pathname:"/get-started",titlename:2}}>
          <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
              <h2>Post One</h2>
              <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div class="card-stats">
              <div class="stat">

              </div>

              <div class="stat">

              </div>
            </div>
          </div>
        </Link>
        <Link to={{pathname:"/get-started",titlename:3}}>
          <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
              <h2>Post One</h2>
              <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div class="card-stats">
              <div class="stat">

              </div>

              <div class="stat">

              </div>
            </div>
          </div>
        </Link>
        <Link to={{pathname:"/get-started",titlename:4}}>
          <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
              <h2>Post One</h2>
              <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div class="card-stats">
              <div class="stat">

              </div>

              <div class="stat">

              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    )
}
export default Home;
