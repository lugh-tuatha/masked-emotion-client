import React, { useState } from 'react';
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";

import { Navigate } from 'react-router-dom';
import Button from '../../components/button'
import ModalSadness from './ModalSadness';

function CreateSadPost() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div >
      <div className="Content">
        <h6>EVER HAD TO KEEP YOUR TRUE FEELINGS HIDDEN</h6>
        <span onClick={() => setOpenModal(true)} >
          <Button><div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>
        </span>
      </div>

      <ModalSadness open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreateSadPost