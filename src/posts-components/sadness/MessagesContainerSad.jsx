import React, { useState } from 'react';

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";
import * as Pi from "react-icons/pi";

import ReactTimeAgo from 'react-time-ago'

import { showReport } from '../../utils/reportUtils';

function MessagesContainerSad(props) {
  const { title1, summary1, codename1, createdAt, cover1 } = props;
  const [isSad, setIsSad] = useState(false)

  const report = () => {
    showReport()
  }

  const toggleReaction = () => {
    setIsSad(!isSad)
  }
  return (
    <div className="mssgeBox">
      <div className="ttle">
        <img src={cover1}/>     
        <h6>{title1}</h6>
        <ReactTimeAgo date={Date.parse((createdAt))} locale="en-US"/>
      </div>

      <div className='h-full flex flex-col justify-between'>
        <p>{summary1}</p>
        <p className='text-end codename'> - {codename1}</p>
      </div>

      <div className="btnMssge">
        <div className='btn2' onClick={toggleReaction}>
          {isSad ? (
            <Pi.PiSmileySadFill color='#081F4B' size={18} />
          ) : (
            <Pi.PiSmileySadLight size={18} />
          )}  
        </div>
        <div className='btn2'><Ai.AiOutlineComment size={18}/> </div>
        <div className='btn2'><Ri.RiShareForwardLine size={18}/> </div>
        <div className='btn2' onClick={report}><Md.MdOutlineReportProblem size={18}/> </div>
      </div>
    </div>
  );
}

export default MessagesContainerSad;