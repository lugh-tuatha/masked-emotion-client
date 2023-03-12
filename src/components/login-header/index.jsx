import React from 'react'
import './login-header.css'

import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className='login-header'>
      <nav className='mx-auto'>
        <h1>LOGO</h1>
        <p><Link to="/">Go back to home</Link></p>
      </nav>
    </div>

  )
}

export default LoginHeader