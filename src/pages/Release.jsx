import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/sidebar'

function Release() {
  return (
    <div className='container'>
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>

        <div className="col-lg-9">
          <h1>Release</h1>

          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Release