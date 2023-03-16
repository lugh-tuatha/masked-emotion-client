import React from 'react'
import './reset-password.css'

import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <div className="form-container">
      <h2>Reset Password?</h2>
      <form className='reset-form'>
        <div>
          <label>Email address</label> <br />
          <input type="email" className='w-100'/> <br />
          <input type="submit" value="Submit" className='w-100 my-2'/> <br />
          <Link to="/signup" className='my-2 text-end'><p>Sign Up</p></Link>
        </div>

      </form>
    </div>
  )
}

export default ResetPassword