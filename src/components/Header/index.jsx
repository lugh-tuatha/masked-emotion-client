import React from 'react'

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Write</li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
    </div>
  )
}

export default Header