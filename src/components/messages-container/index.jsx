import React from 'react'
import './messages-container.css'

import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Md from "react-icons/md";

function MessagesContainer() {
  return (
    <div>
      <div className="mssgeBox">
        <div className="ttle">
          <h6>Title:Feeling Alone</h6>        
          <span>DATE: MM/DD/YYYY</span>
        </div>
        <p>I've been feeling really alone lately, even though I have plenty of friends and a supportive family. It's like there's this emptiness inside me that I can't fill no matter what I do. I know that I should be grateful for what I have, but sometimes it feels like it's not enough. I'm scared to talk about this with anyone because I don't want to come across as ungrateful or needy. I don't know what to do.</p>
      </div>
      <div className="btnMssge">
        <div className='btn'><Ai.AiOutlinePlus /> Add Comment</div>
        <div className='btn'><Ai.AiOutlineHeart /> Care</div>
        <div className='btn'><Bs.BsArrow90DegRight /> SHARE</div>
        <div className='btn'><Md.MdOutlineReportProblem /> Report</div>
      </div>
    </div>
  )
}

export default MessagesContainer