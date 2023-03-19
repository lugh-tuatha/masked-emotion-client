import React from 'react'
import './hero-box.css'
import Computer from '../../assets/icons/comp.svg'
import Fruits from '../../assets/icons/fruits.svg'
import Chat from '../../assets/icons/chat.svg'
import Box from '../../assets/icons/box.svg'
import Arrow from '../../assets/icons/arrow.svg'
import Button from '../button'
import { Link } from "react-router-dom";

function heroBox() {
  return (
    <div>
      <div className="hero-gal">
          <div className="hero-box">
            <h3 className='counter'>10K</h3>
            <p >Over 10,000 Active Users</p>
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
        <Link to="/release"><Button >Create a post</Button></Link>
      </div>
    </div>
  )
}

export default heroBox