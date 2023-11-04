import React, { useState, useEffect } from 'react';
import * as Ai from "react-icons/ai";

import Button from '../../components/button'
import Modal from '../../components/modal';
import Alert from '../../components/alert';

import { Navigate } from 'react-router-dom';

function CreateSadPost() {
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
        <h6>EVER HAD TO KEEP YOUR TRUE FEELINGS HIDDEN</h6>
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

export default CreateSadPost