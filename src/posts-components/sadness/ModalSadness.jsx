import React, { useState } from 'react'
import * as Tb from "react-icons/tb";
import * as Ai from "react-icons/ai";

import '../../components/modal/modal.css'

import { Navigate } from 'react-router-dom';
import Button from '../../components/button';

function ModalSadness({open, onClose }) {
  if(!open) return null;

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
    <div className='relative'>
      <div onClick={(e) => { e.stopPropagation() }} className='modal absolute top-1/2 left-1/2 z-30'>
        <div className='mx-8 my-6'>
          <div className='flex items-center justify-between mb-4 pb-2 modal-header'>
            <h1 className='text-xl font-semibold'>CREATING A POST</h1> 
            <Ai.AiOutlineClose onClick={onClose} size={30}/>
          </div>

          <div className='modal-body'>
            <form onSubmit={createNewPost}>
              <div className="flex justify-between px-6">
                <div className="flex items-center justify-center gap-2 w-1/3 h-12 modal-category" id='modalHrt'><Tb.TbHeartBroken size={24}/> SADNESS</div>
                <input type="codename" placeholder='INPUT CODENAME HERE' id='cdenme' value={codename1} onChange={ev => setCodename1(ev.target.value)}/>
              </div>
              
              <div className='flex flex-col py-4 px-6 gap-4'>
                <input type="title" placeholder='TITLE :' value={title1} onChange={ev => setTitle1(ev.target.value)} className="mb-3"/>
                <textarea type="summary" placeholder='SUMMARY' value={summary1} onChange={ev => setSummary1(ev.target.value)} className="mb-3"/>
                <input type="file" onChange={ev => setFiles(ev.target.files)} className='mb-3'/>
              </div>                                                              
              <div className='w-28 mx-auto'>
                <Button type="submit" value="post" ><div className='flex items-center gap-2'><Ai.AiFillCheckCircle/> POST</div></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSadness