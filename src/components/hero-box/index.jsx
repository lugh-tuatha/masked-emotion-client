import React from 'react'
import './hero-box.css'
import Computer from '../../assets/icons/comp.svg'
import Fruits from '../../assets/icons/fruits.svg'
import Chat from '../../assets/icons/chat.svg'
import Box from '../../assets/icons/box.svg'
import Arrow from '../../assets/icons/arrow.svg'

function heroBox() {
  return (
    <div className='col-lg-6'>
      <div className="hero-gal">
        <div className="hero-box">
          <h3>10K</h3>
          <p>Over 10,000 Active Users</p>
        </div>
        <div className="hero-box">
          <img src={Computer} alt="" />
          <p>Easy-to-use interface</p>
        </div>
        <div className="hero-box">
          <img src={Fruits} alt="" />
          <p>Discover different perspective</p>
        </div>
        <div className="hero-box">
          <img src={Chat} alt="" />
          <p>Engage with community</p>
        </div>
        <div className="hero-box">
          <img src={Box} alt="" />
          <p>Be part of something bigger</p>
        </div>
        <div className="hero-box">
          <img src={Arrow} alt="" />
          <p>Stay anonymous</p>
        </div>
      </div>
      <div className="cpost">
        <button id='btn3'>Create a post</button>
      </div>
    </div>
  )
}

export default heroBox