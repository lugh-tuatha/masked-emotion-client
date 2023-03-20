import React, { useState } from 'react';
import './create-post.css'
import * as Ai from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

import { Navigate } from 'react-router-dom';

import Button from '../button';

function CreatePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [codename, setCodename] = useState('');   
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('codename', codename);
    data.set('file', files[0]);
    console.log(files)
    
    const response = await fetch('http://localhost:5000/post', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return  <Navigate to={'/'} />
  }
  return (
    <div>
      <div className="Content">
        <h6>EVER lOVED SOMEONE YOU COULDN'T TELL?</h6>
          <div className='button1'>
              <div className="dropdown">
                <Button><Ai.AiFillHeart /> LOVE</Button>
                <div className="dropdown-content">
                  <a href="#">Sadness</a>
                  <a href="#">Anger</a>
                  <a href="#">Happiness</a>
                </div>
              </div>
            <Button className='modalBtn' onClick={handleShow} ><Ai.AiOutlinePlus /> CREATE POST</Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='hdng'> 
              <Modal.Title >CREATING A POST</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>

              <form onSubmit={createNewPost}>
                <div className="d-flex justify-content-between mb-3">
                  <div className="modalBtn" id='modalHrt'><Ai.AiFillHeart /> LOVE</div>
                  <input type="codename" placeholder='INPUT CODENAME HERE' id='cdenme' value={codename} onChange={ev => setCodename(ev.target.value)}/>
                </div>
                
                <div className="modalMssg">
                  <input type="title" placeholder='TITLE :' value={title} onChange={ev => setTitle(ev.target.value)} className="mb-3"/>
                  <textarea type="summary" placeholder='CONTENT' value={summary} onChange={ev => setSummary(ev.target.value)} className="mb-3"/>
                  <input type="file" onChange={ev => setFiles(ev.target.files)} className='mb-3'/>
                </div>                                                              

                  <Button type="submit" value="post" className='modalBtn'><Ai.AiFillCheckCircle/> POST</Button>
              </form>

            </Modal.Body>
              
          </Modal>           
      </div>
    </div>
  )
}

export default CreatePost