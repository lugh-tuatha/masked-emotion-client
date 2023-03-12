import React from 'react'

import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <nav>
      <h1>LOGO</h1>
      <p><Link to="/">Go back to home</Link></p>
    </nav>
  )
}

export default LoginHeader