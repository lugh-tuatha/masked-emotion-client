import React, { Component } from 'react'
import './header.css'

import { Link } from "react-router-dom";

import Button from '../button';

export default class UserDetails extends Component {
  logOut=()=>{
    window.localStorage.clear();
    window.location.href="./login"
  }

  render() {

    const isLoggedIn = window.localStorage.getItem("loggedIn");

    const linkText = isLoggedIn ? 'Log out' : 'Sign up';
    const onClickHandler = isLoggedIn ? this.logOut : null;

    return (
      <div>
        
        <nav className='home-nav'>
          <img src="https://th.bing.com/th/id/OIG._vSorB44nuyRxXMEXWuJ?pcl=1b1a19&pid=ImgGn" alt="brand logo" />

          <ul className='d-flex gap-5 align-items-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/release">Release</Link></li>
            <Link to={isLoggedIn == "true" ? "/login" : "/signup"}  onClick={onClickHandler}><Button>{linkText}</Button></Link>
          </ul>
        </nav>

      </div>
    )
  }
}
