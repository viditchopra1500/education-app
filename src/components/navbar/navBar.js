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
        color: '#d7f1eb',
      },
      button: {
        "&:hover": {
          backgroundColor: "#3bba9c"
        }
      },
      lightIcon: {
        color: '#060c21',
      },
    }
  }//styles of light button and icon
  function handleClick(){
    props.handleFunc(!props.theme);
  }//handling click from light button
  const classes = makeStyles(iconStyles)();
  return (
    <nav className={props.theme?"navbar navbar-expand-lg navbar-light":"navbar navbar-expand-lg navbar-dark"}>
      <Link className="nav-link nav-icon" to="/"><i className="fa fa-lg fa-home" aria-hidden="true"></i></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        <form className="form-inline my-2 my-lg-0 lefter-form">
          <ul className="navbar-nav mr-auto my-2 mt-lg-0">
            <Link className="nav-Link" to="/about-us">About Us</Link>
            <IconButton onClick={handleClick} className={classes.button}>
              <FlareRoundedIcon className={props.theme?classes.lightIcon:classes.darkIcon} fontSize="inherit" />
            </IconButton>
          </ul>
        </form>
        <div  tabIndex="0" onBlur={ props.collapse } className="lefter-search-bar">
            <input type="text" className="search-bar form-control mr-sm-2" placeholder="Search..." value={props.searchQuery} onChange={props.handleChangeSearchBox}></input>
            <div  className={props.sug?"suggestions-box list-group":"suggestions-box-hide list-group"}>
              {props.sugArray.map((val,i)=>{
                return <Link to="/get-started" className="no-style" key={i}><h6 className="suggestions list-group-item list-group-item-action" onClick={()=>{props.handleSearch(val);}} id={i}>{val}</h6></Link>
              })}
            </div>
        </div>
      </div>
    </nav>
)
}
export default navBar


