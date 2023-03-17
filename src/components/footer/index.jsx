import React from 'react'
import './footer.css'

import * as Go from 'react-icons/go'
import * as Ai from 'react-icons/ai'

function Footer() {
  return (
    <div className='row footer'>
      <div className="col-lg-4 footer1">
        <h4>Who ARE WE?</h4>
        <img src="https://myprofitlistbiz.com/wp-content/uploads/2014/04/myprofitlistbiz-logo-Copy.png" alt="" />
        <h6>EmoWall</h6>
        <p>Our website provides a safe and supportive community for individuals to share their feelings and connect with others who may be going through similar experiences</p>
        <div className="address">
          <div className="addressIcon"><Go.GoLocation/><span>123 Main Street,Anytown, USA 12345</span>
          </div>
          <div className="addressIcon"><Go.GoMail/><span>Email: info@emowall.com</span>
          </div>
          <div className="addressIcon"><Ai.AiFillPhone/><span>Phone: +1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer