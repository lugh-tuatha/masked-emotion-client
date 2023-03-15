import React from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainer from '../../components/messages-container'


function Guilt() {
  return (
    <div className='container'>
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>

        <div className="col-lg-9">
          <h1>Guilt</h1>

          <div>
            <MessagesContainer />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Guilt