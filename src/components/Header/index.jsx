import React from 'react'
import './header.css';
import { NavLink, Link} from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/icons/logo.png';

function index() {
  return (
    <div className='container-width'>
      <nav className=' home-nav'>
        <Link to="/"><img src={logo} /></Link>

        <ul>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/release"><li>Release</li></NavLink>
          <NavLink to="/faqs"><li>FAQs</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default index