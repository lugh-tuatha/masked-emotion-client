import React from 'react'

import LoginHeader from '../components/login-header'
import LoginForm from '../components/login-form'

function Login() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-6 bg-dark vh-100">
          
        </div>

        <div className="col-lg-6 bg-light vh-100">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login