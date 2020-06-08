import React,{useState} from 'react';
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
import ScrollToTop from './../ScrollToTop'
function Edu() {
  const [isLight,setTheme]=useState(0);
  document.body.classList.add('body-dark');//applying dark-mode by default
  return (
      <div className="scrolling">
        <div className="top">
        <Navbar theme={isLight} handleFunc={setTheme} ></Navbar>
        <hr className="line" />
        </div>
      <div className="content">
      <ScrollToTop />
      <Switch>
      <Route
        path='/'
        exact
        render={(props) => <Home {...props} theme={isLight} />}
      />
      <Route
        path='/get-started'
        exact
        render={(props) => <GetStarted {...props} theme={isLight} />}
      />
      <Route
        path='/about-us'
        exact
        render={(props) => <AboutUs {...props} theme={isLight} />}
      />
      </Switch>
      </div>
      <div className="footer">
      <hr className="line" />
      <Footer theme={isLight} ></Footer>
      </div>
      </div>
  )
}
    // const [isLight,setTheme]=useState(0);
    // function handleClick(){
    //   setTheme(!Number(isLight))
    // }
    // if(Number(isLight)){
    //   document.body.classList.add('transition-dark');
    //   document.body.classList.add('body-light');
    //   document.body.classList.remove('body-dark');
    // }else{
    //   document.body.classList.add('body-dark');
    //   document.body.classList.remove('body-light');
    // }
    // document.body.classList.add('body-dark');//applying dark mode by default
export default Edu ;