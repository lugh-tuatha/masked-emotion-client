import React from 'react'
import UserDetails from '../components/Header'

import Header from '../components/Header'
import Users from '../components/users'
import Love from '../assets/section-icon/love.svg'
import Sad from '../assets/section-icon/sadness.svg'

function About() {
  return (
    <div className='container'>
      <Header />
      < Users />
      <img src={Love} alt="" />
      <img src={Sad} alt="" />
    </div>
  )
}

export default About