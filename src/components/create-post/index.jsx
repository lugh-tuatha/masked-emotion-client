import React, { useState } from 'react';
import './create-post.css'
import * as Ai from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../App'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';

function CreatePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState('');
  const [codename, setCodename] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('codename', codename);
    data.set('content', content);
    ev.preventDefault();
    fetch('http://localhost:5000/post', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      setRedirect(true)
    }
  }

  const   modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  if (redirect) {
    return  <App />
  }
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
            <div className='modalBtn' onClick={handleShow}><Ai.AiOutlinePlus /> CREATE POST</div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='hdng'> 
              <Modal.Title >CREATING A POST</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>

              <form onSubmit={createNewPost}>
                <div className="d-flex justify-content-between mb-3">
                  <div className="modalBtn" id='modalHrt'><Ai.AiFillHeart /> LOVE</div>
                  <input type="text" placeholder='INPUT CODENAME HERE' id='cdenme' value={codename} onChange={ev => setCodename(ev.target.value)}/>
                </div>
                
                <div className="modalMssg">
                  <input type="text" placeholder='TITLE :' value={title} onChange={ev => setTitle(ev.target.value)} className="mb-3"/>
                  <input type="text" placeholder='SUMMARY' value={summary} onChange={ev => setSummary(ev.target.value)} className="mb-3"/>
                </div>
                  <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
              </form>

            </Modal.Body>
            <Modal.Footer className='modalFtr'>

              <input type="submit" value="post" className='modalBtn'/>
              <Ai.AiFillCheckCircle/> POST
            </Modal.Footer>
          </Modal>           
      </div>
    </div>
  )
}

export default CreatePost