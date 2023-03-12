import React from 'react'
import './header.css'

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <img src="https://th.bing.com/th/id/OIG._vSorB44nuyRxXMEXWuJ?pcl=1b1a19&pid=ImgGn" alt="brand logo" />

        <ul className='d-flex gap-5 align-items-center'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/release">Release</Link></li>
          <button className='btn btn-primary'><Link to="/login">Sign-up</Link></button>
        </ul>
      </nav>
    </div>
  )
}

export default Header