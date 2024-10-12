import React, { useState } from 'react';
import './post-container.css';
import config from '../../../../../config/config.json'

import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

import { FacebookShareButton } from "react-share"

import { showReport } from '../../../../utils/report-post.utils';

function PostContainer(props) {
  const { title, summary, codename, createdAt, cover, _id, likes } = props;
  const [ isHeart, setIsHeart ] = useState(false)
  const [ likeCount, setLikeCount ] = useState(likes)

  const report = () => {
    showReport()
  }

  // const updateLikes = async (likeNum) => {
  //   try {
  //     const response = await axios.patch(`${config.baseUrl}/${_id}`, {
  //       likes: likeNum
  //     });

  //     console.log('Update successful:', response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error updating likes:', error.response ? error.response.data : error.message);
  //     throw error;
  //   }
  // }

  const handleClick = () => {
    if(!isHeart) {
      like();
    }else{
      unlike();
    }
  }

  const like = () => {
    setIsHeart(true)
    setLikeCount(likeCount + 1)
    // console.log("run like")
    // console.log(likeCount)
    // updateLikes(likeCount)
  }

  const unlike = () => {
    setIsHeart(false)
    setLikeCount(likeCount - 1)
    // updateLikes(likeCount)
  }

  
  return (
    <div className="mssgeBox">
      <div className="ttle">
        <img src={cover == "" ? "https://masked-emotion.vercel.app/image/default-avatar.png" : cover }/>     
        <h6>{title}</h6>
        <ReactTimeAgo date={Date.parse((createdAt))} iocale="en-US"/>
      </div>

      <div className='h-full flex flex-col justify-between'>
        <p>{summary}</p>
        <p className='text-end codename'> - {codename}</p>
      </div>

      <div className="btnMssge">
        <div className='button-container px-0 flex gap-1' onClick={handleClick}>
          {isHeart ? (
            <Ai.AiFillHeart color="red" size={18} />
          ) : (
            <Ai.AiOutlineHeart size={18} /> 
          )}
          <span className='font-bold'>{likeCount}</span>
        </div>
        <div className='button-container' onClick={() => console.log(_id)}><Ai.AiOutlineComment size={18}/> </div>
        <FacebookShareButton url='https://masked-emotion.vercel.app/' quote='I just share my feelings in this website masked emotion try now' hashtag="#MaskedEmotion" >
          <div className='button-container'><Ri.RiShareForwardLine size={18}/> </div>
        </FacebookShareButton>
        <div className='button-container' onClick={report}><Md.MdOutlineReportProblem size={18}/> </div>
      </div>
    </div>
  );
}

export default PostContainer;