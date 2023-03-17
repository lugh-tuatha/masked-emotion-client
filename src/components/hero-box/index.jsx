import React from 'react'
import './hero-box.css'
import Computer from '../../assets/icons/comp.svg'

function heroBox() {
  return (
    <div className='herp-gal'>
      <div className="hero-box">
        <h3>10K</h3>
        <p>Over 10,000 Active Users</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Over 10,000 Active Users</p>
      </div>
    </div>
  )
}

export default heroBox