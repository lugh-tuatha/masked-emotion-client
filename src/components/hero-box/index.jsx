import React from 'react'
import './hero-box.css'
import Computer from '../../assets/icons/comp.svg'
import Fruits from '../../assets/icons/fruits.svg'
import Chat from '../../assets/icons/chat.svg'
import Box from '../../assets/icons/box.svg'
import Arrow from '../../assets/icons/arrow.svg'

function heroBox() {
  return (
    <div className='flex justify-start sm:justify-start lg:justify-end '>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="hero-box">
          <div>
            <h3 className='font-bold text-3xl mb-2'>3</h3>
            <p >Over 3 Active Users</p>
          </div>
        </div>
        <div className="hero-box">
          <div>
            <img src={Computer} alt="" />
            <p>Easy-to-use interface</p>
          </div>
        </div>
        <div className="hero-box">
          <div>
            <img src={Fruits} alt="" />
            <p>Discover different perspective</p>
          </div>
        </div>
        <div className="hero-box">
          <div>
            <img src={Chat} alt="" />
            <p>Engage with community</p>
          </div>
        </div>
        <div className="hero-box">
          <div>
            <img src={Box} alt="" />
            <p>Be part of something bigger</p>
          </div>
        </div>
        <div className="hero-box">
          <div>
            <img src={Arrow} alt="" />
            <p>Stay anonymous</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default heroBox