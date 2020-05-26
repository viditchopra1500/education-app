import React from 'react';
import './layout.css';
import { Route ,Switch} from 'react-router-dom';
// import {
//     CSSTransition,
//     TransitionGroup,
//   } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/core'

import Navbar from './navbar/navBar'
import Footer from './footer/footer'
import Home from './Home/home'
import GetStarted from './getStarted/getStarted'
import AboutUs from './AboutUs/aboutUs'

function blog() {
  return (
      <div>
        <div className="top">
        <Navbar></Navbar>
        </div>
      <div className="content">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/get-started" exact component={GetStarted}/>
      <Route path="/about-us" exact component={AboutUs}/>
      </Switch>
      </div>
      <div className="footer">
      <Footer ></Footer>
      </div>
      </div>
  )
}

export default blog 