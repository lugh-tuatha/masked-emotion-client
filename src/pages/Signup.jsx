import React from 'react'
import './pages.css'

import LoginHeader from '../components/login-header'
import SignupForm from '../components/signup-form'

function Signup() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-7 vh-100 login-hero-container">
          
        </div>

        <div className="col-lg-5 vh-100 signup-container">
          <div className='p-5 mt-5'>
            <p className='mb-0'>Welcome to EmoWall</p>
            <h2 className='w-75 fw-bold mb-5'>Share Your Emotions Anonymously and Find Support in Our Safe and Caring Community</h2>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup