import React from 'react';

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'

import config from '../../../config/config.json'

function MessagesContainerSad(props) {
  const { title1, summary1, codename1, createdAt, cover1 } = props;
  return (
    <div className="mssgeBox mb-3">
      <div className="ttle">
        <img src={`${config.baseUrl}` + cover1}/>     
        <h6>{title1}</h6>
        <ReactTimeAgo date={(createdAt)} locale="en-US"/>
      </div>
      
      <p>{summary1}</p>
      <p className='text-end codename'> - {codename1}</p>

      <div className="btnMssge">
        <div className='btn2'><Ai.AiOutlineHeart size={18}/> </div>
        <div className='btn2'><Ai.AiOutlineComment size={18}/> </div>
        <div className='btn2'><Ri.RiShareForwardLine size={18}/> </div>
        <div className='btn2'><Md.MdOutlineReportProblem size={18}/> </div>
      </div>
    </div>
  );
}

export default MessagesContainerSad;