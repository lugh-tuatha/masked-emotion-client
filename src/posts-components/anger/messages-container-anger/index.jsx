import React from 'react';
import './messages-container.css';

import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'

function MessagesContainerAnger(props) {
  const { title2, summary2, codename2, createdAt, cover2 } = props;
  return (
    <div>
      <div className="mssgeBox mb-3">
        <div className="ttle">
          <img src={'http://localhost:5000/' + cover2}/>     
          <h6>{title2}</h6>
          <ReactTimeAgo date={(createdAt)} locale="en-US"/>
        </div>
        
        <p>{summary2}</p>
        <p className='text-end codename'> - {codename2}</p>

        <div className="btnMssge">
          <div className='btn2'><Ai.AiOutlinePlus /> Add Comment</div>
          <div className='btn2'><Ai.AiOutlineHeart /> Care</div>
          <div className='btn2'><Bs.BsArrow90DegRight /> SHARE</div>
          <div className='btn2'><Md.MdOutlineReportProblem /> Report</div>
        </div>
      </div>
    </div>
  );
}

export default MessagesContainerAnger;