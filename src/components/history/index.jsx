import React from 'react'
import './history.css'
import * as Fa from "react-icons/fa";

function History() {
  return (
      <div className="hstrySction ">
        <div className="hstryTxt">
          <h5>Share, Express, Connect</h5>
          <h3><b>Empower Your Emotions with EmoWall</b></h3>
        </div>
        <div className="hstryCntnt">
          <div className='hstryIcon'>
            <Fa.FaRegDotCircle />
            <p id='nmber'><b>01</b></p><span><b>Our Mission</b></span>
          </div> 
            <div className="Cntnt">
              <p>At EmoWall, our mission is to provide a safe and supportive online community for individuals to express their emotions, connect with others who share similar experiences, and find resources to help them navigate the challenges of life.</p>
            </div>
        </div>
        <div className="hstryCntnt">
          <div className='hstryIcon'>
            <Fa.FaRegDotCircle />
            <p id='nmber'><b>02</b></p><span><b>Our History</b></span>
          </div> 
            <div className="Cntnt">
              <p>EmoWall was founded in 2023 with a vision to create a safe and inclusive online space where individuals can freely express their thoughts and emotions without fear of judgment or criticism.</p>
            </div>
        </div>
        <div className="hstryCntnt">
          <div className='hstryIcon'>
            <Fa.FaRegDotCircle />
            <p id='nmber'><b>03</b></p><span><b>Our Team</b></span>
          </div> 
            <div className="Cntnt">
              <p>Our team is made up of passionate individuals who are dedicated to providing a safe and supportive space for users to express their emotions. We pride ourselves on our expertise in website moderation and user support and our commitment to providing the best possible experience for our users.</p>
            </div>
        </div>
      </div>
  )
}

export default History