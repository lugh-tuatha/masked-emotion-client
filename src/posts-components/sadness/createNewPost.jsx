import React, { useState } from 'react';
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";

import { Navigate } from 'react-router-dom';
import Button from '../../components/button'

function CreateSadPost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [codename1, setCodename1] = useState('');   
  const [title1, setTitle1] = useState('');
  const [summary1, setSummary1] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set('title1', title1);
    data.set('summary1', summary1);
    data.set('codename1', codename1);
    data.set('file', files[0]);
    console.log(files)
    
    const response = await fetch('https://emowall-backend.onrender.com/sadpost', {
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
        <h6 className='uppercase'>HAVE YOU EVER HAD TO KEEP A SECRET THAT WEIGHED HEAVILY ON YOUR HEART, UNABLE TO SHARE IT WITH ANYONE</h6>

          <Button><div onClick={handleShow} className='create-post'><Ai.AiOutlinePlus /> CREATE POST</div></Button>

          <div show={show} onHide={handleClose}>
            
            <div closeButton className='hdng'> 
              <div >CREATING A POST</div>
            </div>
            <div className='modalBody'>
              <form onSubmit={createNewPost}>
                <div className="flex justify-between mb-3">
                  <div className="modalBtn" id='modalHrt'><Ai.AiFillHeart /> LOVE</div>
                  <input type="codename" placeholder='INPUT CODENAME HERE' id='cdenme' value={codename1} onChange={ev => setCodename1(ev.target.value)}/>
                </div>
                
                <div className="modalMssg">
                  <input type="title" placeholder='TITLE :' value={title1} onChange={ev => setTitle1(ev.target.value)} className="mb-3"/>
                  <textarea type="summary" placeholder='SUMMARY' value={summary1} onChange={ev => setSummary1(ev.target.value)} className="mb-3"/>
                  <input type="file" onChange={ev => setFiles(ev.target.files)} className='mb-3'/>
                </div>                                                              

                  <Button type="submit" value="post" className='modalBtn'><Ai.AiFillCheckCircle/> POST</Button>
              </form>
            </div>
              
          </div>           
      </div>
    </div>
  )
}

export default CreateSadPost