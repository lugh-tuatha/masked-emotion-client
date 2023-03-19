import React, { Component } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import Button from '../button';
import logo from '../../assets/icons/logo.png';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false,
      screenWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

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
    const { screenWidth } = this.state;

    return (
      <div>
        <nav className='home-nav'>
          <Link to="/signup">
            <img src={logo} alt="brand logo" />
          </Link>

          {screenWidth < 768 ? (
            // ito yun
            <div className='mobile-menu'>
              <div><FaBars size={32} onClick={this.showNavbar} /></div>
              {this.state.navbar && (
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/release">Release</Link></li>
                  <li>
                    <Link to="/signup" onClick={onClickHandler}>
                      <Button>{linkText}</Button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/release">Release</Link></li>
              <li>
                <Link to="/signup" onClick={onClickHandler}>
                  <Button>{linkText}</Button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}
