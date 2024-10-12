import React, { useState } from 'react';
import './create-post-modal.css';
import * as Ai from "react-icons/ai";
import CreatePostModal from '../create-post-modal';
import Button from '../../../../components/shared/button';
import PostedSuccessfullyAlert from '../posted-successfully-alert';

function CreatePostContainer() {
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
      <div className="content">
        <h6 className='uppercase'>All your emotions are valid.</h6>
        <span onClick={() => setOpenModal(true)}>
          <Button>
            <div className="flex items-center gap-1">
              <Ai.AiOutlinePlus />
              <span>CREATE POST</span>
            </div>
          </Button>
        </span>
      </div>

      <CreatePostModal open={openModal} onClose={() => setOpenModal(false)} onSuccess={showAlertAndClose} />
      {showAlert && !alertDisplayed && <PostedSuccessfullyAlert />}
    </div>
  );
}

export default CreatePostContainer;
