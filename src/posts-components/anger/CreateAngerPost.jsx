import React, { useState } from 'react';
import * as Ai from "react-icons/ai";

import ModalAnger from './ModalAnger'
import Button from '../../components/button';

function CreateAngerPost() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div >
      <div className="Content">
        <h6>DO YOU HAVE FRUSTRATION AND ANGER YOU COULDN'T RELEASE?</h6>
        <span onClick={() => setOpenModal(true)} >
          <Button><div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>
        </span>
      </div>

      <ModalAnger open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreateAngerPost