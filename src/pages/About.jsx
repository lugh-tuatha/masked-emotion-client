import React from 'react'
import UserDetails from '../components/Header'

import Header from '../components/Header'
import Users from '../components/users'
import Admin_Sidebar from '../components/admin-sidebar'

function About() {
  return (
    <div className='container'>
      <Header />
      <Admin_Sidebar />
      < Users />
    </div>
  )
}

export default About