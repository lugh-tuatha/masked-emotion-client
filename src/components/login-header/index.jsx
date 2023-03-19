import React from 'react'
import './login-header.css'

import { Link } from "react-router-dom";

import logo from '../../assets/icons/logo-white.png'

function LoginHeader() {
  return (
    <div className='login-header'>
      <nav className='mx-auto'>
        <Link>
          <img src={logo} />
        </Link>
        <p><Link to="/">Go back to home</Link></p>
      </nav>
    </div>

  )
}

export default LoginHeader