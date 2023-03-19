import React from 'react';
import './messages-container.css';

import * as Ai from "react-icons/ai";
import * as Bs from "react-icons/bs";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'

function MessagesContainer(props) {
  const { title, summary, codename, createdAt, cover } = props;
  return (
    <div>
      <div className="mssgeBox mb-3">
        <div className="ttle">
          <img src={'http://localhost:5000/' + cover}/>     
          <h6>{title}</h6>
          <ReactTimeAgo date={(createdAt)} locale="en-US"/>
        </div>
        
        <p>{summary}</p>
        <p className='text-end codename'> - {codename}</p>

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

export default MessagesContainer;