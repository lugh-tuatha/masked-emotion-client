import React from 'react'
import './create-post.css'
import * as Ai from "react-icons/ai";

function CreatePost() {
  return (
    <div>
      <div className="Content">
        <h6>EVER lOVED SOMEONE YOU COULDN'T TELL?</h6>
          <div className='button1'>
              <div className="dropdown">
                <div className="btn"><Ai.AiOutlineHeart /> LOVE</div>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            <div className='btn'><Ai.AiOutlinePlus /> CREATE POST</div>
          </div>
      </div>
    </div>
  )
}

export default CreatePost