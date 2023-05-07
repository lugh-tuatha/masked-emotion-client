import React, { useState } from 'react';
import * as Ai from "react-icons/ai";

import ModalAnger from './ModalAnger'
import Button from '../../components/button';

function CreateAngerPost() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div >
      <div className="Content">
        <h6>HAVE YOU EVER HAD TO KEEP YOUR TRUE FEELINGS HIDDEN, ONLY TO BE MET WITH FRUSTRATION AND ANGER?</h6>
        <div onClick={() => setOpenModal(true)} >
          <Button><div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>
        </div>
      </div>

      <ModalAnger open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default CreateAngerPost