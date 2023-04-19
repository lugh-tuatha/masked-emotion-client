import React, { Component } from 'react';
import './header.css';
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png';

export default class Header extends Component {
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
  render() {
    const { screenWidth } = this.state;

    return (
      <div>
        <nav className='home-nav'>
          <NavLink to="/">
            <img src={logo} alt="brand logo" />
          </NavLink>

          {screenWidth < 768 ? (
            // ito yun
            <div className='mobile-menu'>
              <div><FaBars size={32} onClick={this.showNavbar} /></div>
              {this.state.navbar && (
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/release">Release</Link></li>
                </ul>
              )}
            </div>
          ) : (
            <ul className='d-flex gap-5 align-items-center'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/release">Release</NavLink></li>
            </ul>
          )}
        </nav>
      </div>
    );
  }
}
