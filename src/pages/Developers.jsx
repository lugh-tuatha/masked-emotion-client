import React from 'react'
import './pages.css'

import Header from '../components/Header';
import Devs from '../components/devs'
import Footer from '../components/footer'

function Developers() {
  return (
    <div>
      <Header/>
      <h1 className='text-center mt-5'>The Developers</h1>      
      <Devs />
      <Footer />
    </div>
  )
}

export default Developers