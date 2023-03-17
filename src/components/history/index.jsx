import React from 'react'
import './history.css'
import * as Fa from "react-icons/fa";

function History() {
  return (
    <div className='row mt-5'>
      <div className="col-lg-6"></div>
      <div className="col-lg-6 hstrySction">
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
            <p id='nmber'><b>02</b></p><span><b>Our Mission</b></span>
          </div> 
            <div className="Cntnt">
              <p>At EmoWall, our mission is to provide a safe and supportive online community for individuals to express their emotions, connect with others who share similar experiences, and find resources to help them navigate the challenges of life.</p>
            </div>
        </div>
        <div className="hstryCntnt">
          <div className='hstryIcon'>
            <Fa.FaRegDotCircle />
            <p id='nmber'><b>03</b></p><span><b>Our Mission</b></span>
          </div> 
            <div className="Cntnt">
              <p>At EmoWall, our mission is to provide a safe and supportive online community for individuals to express their emotions, connect with others who share similar experiences, and find resources to help them navigate the challenges of life.</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default History