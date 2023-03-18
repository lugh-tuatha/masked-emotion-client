import React, { Component } from 'react'
import './header.css'

import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import Button from '../button';

import logo from '../../assets/icons/logo.png'

export default class UserDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      navbar: false,
    }
  }

  setNavbar = (navbar) => {
    this.setState({ navbar });
  }
  
  showNavbar = () => this.setNavbar(!this.state.navbar)

  logOut = () => {
    window.localStorage.clear();
    window.location.href="./login";
  }

  render() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");

    const linkText = isLoggedIn ? 'Log out' : 'Sign up';
    const onClickHandler = isLoggedIn ? this.logOut : null;

    return (
      <div>
        <nav className='home-nav'>
          <img src={logo} alt="brand logo" />

          <ul className='d-flex gap-5 align-items-center'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/release">Release</Link></li>
            <li>
              <Link to={isLoggedIn === "true" ? "/login" : "/signup"} onClick={onClickHandler}>
                <Button>{linkText}</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
