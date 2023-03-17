import React from 'react'
import './auth.css'

import LoginHeader from '../../components/login-header'
import SignupForm from '../../components/signup-form'

import signupHero from '../../assets/img/hero-img/signup-hero.png'

function Signup() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-6 col-md-12 vh-100 auth-hero-container d-flex justify-content-center align-items-center">
          <div className='welcome-msg'>
            <p className='mb-2'>Welcome to EmoWall</p>
            <h2 className='fw-bold mb-3'>Share Your Emotions Anonymously and Find Support in Our Safe and Caring Community</h2>

            <img src={signupHero} alt="sign-up-hero"/>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 vh-100 auth-container d-flex justify-content-center align-items-center sign-up-form-container">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup