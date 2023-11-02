import React from 'react';

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'

import config from '../../../config/config.json'

function MessagesContainerAnger(props) {
  const { title2, summary2, codename2, createdAt, cover2 } = props;
  return (
    <div>
      <div className="mssgeBox mb-3">
        <div className="ttle">
          <img src={cover2}/>     
          <h6>{title2}</h6>
          <ReactTimeAgo date={(createdAt)} locale="en-US"/>
        </div>
        
        <p>{summary2}</p>
        <p className='text-end codename'> - {codename2}</p>

      <div className="btnMssge">
        <div className='btn2'><Ai.AiOutlineHeart size={18}/> </div>
        <div className='btn2'><Ai.AiOutlineComment size={18}/> </div>
        <div className='btn2'><Ri.RiShareForwardLine size={18}/> </div>
        <div className='btn2'><Md.MdOutlineReportProblem size={18}/> </div>
      </div>
      </div>
    </div>
  );
}

export default MessagesContainerAnger;