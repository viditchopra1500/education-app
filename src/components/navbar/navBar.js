import {Link } from 'react-router-dom';
import React from 'react';
import './navBar.css';
function navBar() {
    return (
<nav class="navbar navbar-expand-lg navbar-light ">
<Link class="nav-link brand-name" to="/">HPC</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      </ul>
    <form class="form-inline my-2 my-lg-0">
    <ul class="navbar-nav mr-auto my-2 mt-lg-0">
    <Link class="nav-link mr-sm-2" to="/get-started">Get started</Link>
    <Link class="nav-link mr-sm-2" to="/about-us">About Us</Link>
      </ul>
   
    </form>
  </div>
</nav>
    )
}
export default navBar

