import React from 'react'
import './sections.css'

import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import MessagesContainer from '../../components/messages-container'


function Confusion() {
  return (
    <div>
      <Header />
      <div className="row w-90 mx-auto mt-4">
        <div className="col-lg-3 m-0 p-0">
          <Sidebar />
        </div>

        <div className="col-lg-9 p-0">
          <h1>Confusion</h1>

          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Confusion