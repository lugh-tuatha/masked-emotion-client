import React, { useState, useEffect } from 'react';
import './create-post.css'
import * as Ai from "react-icons/ai";

import { Navigate } from 'react-router-dom';
import Modal from '../modal';

import Button from '../button';
import Alert from '../alert';

function CreatePost() {
  const [openModal, setOpenModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const closeAlert = setTimeout(() => {
      setShowAlert(false)
    }, 4000)
    return () => clearTimeout(closeAlert)
  })

  const showAlertAndClose = () => {
    setShowAlert(true)
    setOpenModal(false)
  }

  return (
    <div >
      <div className="Content">
        <h6>EVER LOVED SOMEONE YOU COULDN'T TELL?</h6>
        <span onClick={() => setOpenModal(true)} >
          <Button><div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>
        </span>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} success={showAlertAndClose} />
      {showAlert &&
        <Alert />
      }
    </div>
  )
}

export default CreatePost