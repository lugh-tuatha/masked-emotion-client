import React, { useState } from 'react';
import './create-post.css';
import * as Ai from "react-icons/ai";
import Modal from '../modal';
import Button from '../button';
import Alert from '../alert';

function CreatePost() {
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertDisplayed, setAlertDisplayed] = useState(false);

  const showAlertAndClose = () => {
    if (!alertDisplayed) {
      setShowAlert(true);
      setOpenModal(false);

      setTimeout(() => {
        setShowAlert(false);
        setAlertDisplayed(true);
      }, 4000);
    }
  };

  return (
    <div>
      <div className="Content">
        <h6>EVER LOVED SOMEONE YOU COULDN'T TELL?</h6>
        <span onClick={() => setOpenModal(true)}>
          <Button>
            <div className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div>
          </Button>
        </span>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} success={showAlertAndClose} />
      {showAlert && !alertDisplayed && <Alert />}
    </div>
  );
}

export default CreatePost;
