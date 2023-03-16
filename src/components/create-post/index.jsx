import React, { useState } from 'react';
import './create-post.css'
import * as Ai from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreatePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="Content">
        <h6>EVER lOVED SOMEONE YOU COULDN'T TELL?</h6>
          <div className='button1'>
              <div className="dropdown">
                <div className="btn"><Ai.AiFillHeart /> LOVE</div>
                <div className="dropdown-content">
                  <a href="#">Sadness</a>
                  <a href="#">Anger</a>
                  <a href="#">Happiness</a>
                </div>
              </div>
            <div className='btn' onClick={handleShow}><Ai.AiOutlinePlus /> CREATE POST</div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className='hdng'> 
                <Modal.Title >CREATING A POST</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modalBody'>
                <div className="modalbtn1">
                  <div className="btn" id='modalHrt'><Ai.AiFillHeart /> LOVE</div>
                  <input type="text" placeholder='INPUT CODENAME HERE' id='cdenme' />
                </div>
                <div className="modalMssg">
                  <input type="text" placeholder='TITLE'/>
                  <input type="text" placeholder='LOVED SOMEONE? SHARE IT TO US ANONYMOUSLY.' id='modaltxt'/>
                </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={handleClose}>
                    POST
                  </Button>
              </Modal.Footer>
            </Modal>           
          </div>
      </div>
    </div>
  )
}






export default CreatePost