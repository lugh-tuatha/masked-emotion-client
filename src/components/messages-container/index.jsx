import React from 'react';
import './messages-container.css';

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'
import config from '../../../config/config.json'

import { FacebookShareButton } from "react-share"

function MessagesContainer(props) {
  const { title, summary, codename, createdAt, cover } = props;

  const showAlert = () => {
    Swal.fire({
      title: 'Report Inappropriate Content',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Reported!',
          'Your report will be handled confidentially',
          'success'
        )
      }
    })
  };;
  return (
    <div className="mssgeBox mb-3">
      <div className="ttle">
        <img src={cover}/>     
        <h6>{title}</h6>
        <ReactTimeAgo date={(createdAt)} iocale="en-US"/>
      </div>
      
      <p>{summary}</p>
      <p className='text-end codename'> - {codename}</p>

      <div className="btnMssge">
        <div className='btn2'><Ai.AiOutlineHeart size={18}/> </div>
        <div className='btn2'><Ai.AiOutlineComment size={18}/> </div>
        <FacebookShareButton url='https://masked-emotion.vercel.app/' quote='I just share my feelings in this website masked emotion try now' hashtag="#MaskedEmotion" >
          <div className='btn2'><Ri.RiShareForwardLine size={18}/> </div>
        </FacebookShareButton>
        <div className='btn2' onClick={showAlert}><Md.MdOutlineReportProblem size={18}/> </div>
      </div>
    </div>
  );
}

export default MessagesContainer;