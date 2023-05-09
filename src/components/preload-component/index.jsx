import React from 'react'
import './preload-component.css'

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

function Preload(props) {
  const { title} = props;
  return (
    <div>
      <div className="mssgeBox mb-3 ">
        <div className="ttle">
          <div className='skeleton skeleton-avatar'></div>     
          <h6 className='skeleton skeleton-text'></h6>
          <h6 className='skeleton skeleton-text'></h6>
        </div>
        
        <h6 className='skeleton skeleton-content'></h6>
        <h6 className='skeleton skeleton-content-2'></h6>
        <div className="flex justify-end pb-1 pr-2">
          <h6 className='skeleton skeleton-text '></h6>
        </div>

        <div className="btnMssge">
          <div className='btn2'><Ai.AiOutlineHeart size={18}/> </div>
          <div className='btn2'><Ai.AiOutlineComment size={18}/> </div>
          <div className='btn2'><Ri.RiShareForwardLine size={18}/> </div>
          <div className='btn2'><Md.MdOutlineReportProblem size={18}/> </div>
        </div>
      </div>
      
    </div>
  )
}

export default Preload