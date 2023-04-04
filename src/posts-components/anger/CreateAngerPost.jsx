import React, { useState } from 'react';
import * as Ai from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

import { Navigate } from 'react-router-dom';
import Button from '../../components/button';

function CreateAngerPost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [codename2, setCodename2] = useState('');   
  const [title2, setTitle2] = useState('');
  const [summary2, setSummary2] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set('title2', title2);
    data.set('summary2', summary2);
    data.set('codename2', codename2);
    data.set('file', files[0]);
    console.log(files)
    
    const response = await fetch('https://emowall-backend.onrender.com/angerpost', {
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
        <h6>HAVE YOU EVER HAD TO KEEP YOUR TRUE FEELINGS HIDDEN, ONLY TO BE MET WITH FRUSTRATION AND ANGER?</h6>
          <Button><div onClick={handleShow}><Ai.AiOutlinePlus /> CREATE POST</div></Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='hdng'> 
              <Modal.Title >CREATING A POST</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>

              <form onSubmit={createNewPost}>
                <div className="d-flex justify-content-between mb-3">
                  <div className="modalBtn" id='modalHrt'><Ai.AiFillHeart /> LOVE</div>
                  <input type="codename" placeholder='INPUT CODENAME HERE' id='cdenme' value={codename2} onChange={ev => setCodename2(ev.target.value)}/>
                </div>
                
                <div className="modalMssg">
                  <input type="title" placeholder='TITLE :' value={title2} onChange={ev => setTitle2(ev.target.value)} className="mb-3"/>
                  <textarea type="summary" placeholder='SUMMARY' value={summary2} onChange={ev => setSummary2(ev.target.value)} className="mb-3"/>
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

export default CreateAngerPost