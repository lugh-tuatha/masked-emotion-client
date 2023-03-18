import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/sidebar'

function Release() {
  return (
    <div>
      <Header />
      <div className='w-90 mx-auto mt-4'>
        <div className="row">
          <div className="col-lg-3 m-0 p-0">
            <Sidebar />
          </div>

          <div className="col-lg-9 p-0">
            <h1>Release</h1>

            <div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Release