import React from 'react'

import LoginHeader from '../../components/login-header'
import SignupForm from '../../components/signup-form'
import ResetPassword from '../../components/reset-password-form'

function Reset() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-8 vh-100 ">
          <div>
            <p>Reset password</p>
          </div>

        </div>

        <div className="col-lg-4 vh-100">
          <ResetPassword />
        </div>
      </div>
    </div>
  )
}

export default Reset