import React, { useState } from 'react'
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";

import '../../components/modal/modal.css'

import { Navigate } from 'react-router-dom';
import Button from '../../components/button';

function ModalAnger({open, onClose }) {
  if(!open) return null;

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
                <div className="flex items-center justify-center gap-2 w-1/3 h-12 modal-category"><Bs.BsEmojiAngry /> ANGER</div>
                <input className='w-1/3 h-12' type="codename" placeholder='INPUT CODENAME HERE' value={codename2} onChange={ev => setCodename2(ev.target.value)}/>
              </div>
              
              <div className='flex flex-col py-4 px-6 gap-4'>
                <input type="title" placeholder='TITLE :' value={title2} onChange={ev => setTitle2(ev.target.value)}/>
                <textarea type="summary" placeholder='SUMMARY' value={summary2} onChange={ev => setSummary2(ev.target.value)}/>
                <input type="file" onChange={ev => setFiles(ev.target.files)}/>
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

export default ModalAnger