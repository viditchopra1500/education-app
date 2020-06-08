import {Link } from 'react-router-dom';
import React from 'react';
import './navBar.css';
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

function navBar(props) {
  function iconStyles() {
    return {
      darkIcon: {
        color: 'white',
      },
      darkButton: {
        "&:hover": {
          backgroundColor: "#3bba9c"
        }
      },
      lightIcon: {
        color: '#060c21',
      },
      lightButton: {
        "&:hover": {
          backgroundColor: "#FF69B4"
        }
      }
    }
  }//styles of light button and icon
  function handleClick(){
    props.handleFunc(!props.theme);
  }//handling click from light button
  const classes = makeStyles(iconStyles)();
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <Link class="nav-link nav-icon" to="/"><i class="fa fa-lg fa-home" aria-hidden="true"></i></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto my-2 mt-lg-0">
            <Link class="nav-link mr-sm-2" to="/about-us">About Us</Link>
            <IconButton onClick={handleClick} className={props.theme?classes.lightButton:classes.darkButton}>
              <FlareRoundedIcon className={props.theme?classes.lightIcon:classes.darkIcon} fontSize="inherit" />
            </IconButton>
          </ul>
        </form>
      </div>
    </nav>
)
}
export default navBar


