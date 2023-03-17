import React from 'react'
import './hero-box.css'
import Computer from '../../assets/icons/comp.svg'

function heroBox() {
  return (
    <div className='col-lg-6 hero-gal'>
      <div className="hero-box">
        <h3>10K</h3>
        <p>Over 10,000 Active Users</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Easy-to-use interface</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Discover different perspective</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Engage with community</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Be part of something bigger</p>
      </div>
      <div className="hero-box">
        <img src={Computer} alt="" />
        <p>Stay anonymous</p>
      </div>
    </div>
  )
}

export default heroBox