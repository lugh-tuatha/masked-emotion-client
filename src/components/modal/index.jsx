import React, { useState } from 'react'
import * as Ai from "react-icons/ai";
import { Navigate } from 'react-router-dom';
import config from '../../../config/config.json'

import Button from '../button';

function Modal({open, onClose}) {
  if(!open) return null;

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
    
    const response = await fetch(`${config.baseUrl}post`, {
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
            <h1 className='text-xl font-semibold'>CREATE A POST</h1> 
            <Ai.AiOutlineClose onClick={onClose} size={30} className='cursor-pointer'/>
          </div>

          <div className='modal-body'>
            <form onSubmit={createNewPost}>
              <div className="sm:flex justify-between px-0 sm:px-6">
                <div className="flex items-center justify-center gap-2 w-full mb-3 sm:w-1/3 h-12 modal-category"><Ai.AiOutlineHeart size={24}/> LOVE</div>
                <input className='sm:mb-3 w-full sm:w-auto' type="codename" placeholder='CODENAME'value={codename} onChange={ev => setCodename(ev.target.value)}/>
              </div>
              
              <div className="flex flex-col py-4 px-0 sm:px-6 gap-3">
                <input type="title" placeholder='TITLE' value={title} onChange={ev => setTitle(ev.target.value)}/>
                <textarea type="summary" placeholder='CONTENT' value={summary} onChange={ev => setSummary(ev.target.value)} className="placeholder:text-white"/>
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

export default Modal