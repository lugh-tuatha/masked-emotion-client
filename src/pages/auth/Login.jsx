import React from 'react'
import './auth.css'

import LoginForm from '../../components/login-form'
import LoginHeader from '../../components/login-header'

function Login() {
  return (
    <div>
      <div className="row">
        <LoginHeader />

        <div className="col-lg-7 vh-100 auth-hero-container login-hero d-flex align-items-center">
          <div className='w-60 mx-auto text-white login-hero-text'>
            <p>Welcome back to EmoWall</p>
            <h2 className='fw-bold'>Your Safe Space to Confess and Connect</h2>
            <p className='mb-4'>Welcome back to the anonymous confession site, EmoWall! We're here to listen and support you</p>

            <img src="https://th.bing.com/th/id/OIG.gnkV7CfXSykaXE8Hsy68?pcl=1b1a19&pid=ImgGn" className='img-fluid'/>

            <p className='mt-4'>Follow us on Social Media</p>
          </div>
        </div>

        <div className="col-lg-5 vh-100 auth-container">
          <div className='p-5 mt-5 login-form-container'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login