import React, { useState } from 'react';
import './create-post.css'
import * as Ai from "react-icons/ai";

import { Navigate } from 'react-router-dom';
import Modal from '../modal';

import Button from '../button';

function CreatePost() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div >
      <div className="Content">
        <h6>EVER LOVED SOMEONE YOU COULDN'T TELL?</h6>
        <span onClick={() => setOpenModal(true)} >
          <Button><div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>
        </span>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreatePost