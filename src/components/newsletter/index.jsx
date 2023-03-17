import React from 'react'
import './newsletter.css'

function Newsletter() {
  return (
    <div className='row'>
      <div className="col-lg-6"></div>
      <div className="col-lg-6">
        <div className="nwslttr">
          <div className="Cntnt1">
            <h3>Join Our Newsletter</h3>
            <p>Stay Up-to-Date with EmoWall News and Updates</p>
          </div>
          <div className="frm">
          <form>
            <input type="text" placeholder='FULLNAME' required='required'/>
            <input type="email" placeholder='EMAIL ADDRESS' required='required'/>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter