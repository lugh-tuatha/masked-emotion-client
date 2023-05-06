import React, { useState } from 'react'
import * as Ai from "react-icons/ai";

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
    <div className='border-2 border-red-500 modalContainer w-1/3 fixed left-1/3 top-1/4 bg-red-300'>
      <div className='flex justify-end'>
        <Ai.AiOutlineClose onClick={onClose}/>
      </div>
      <h1 >CREATING A POST</h1> 
      <div className='modalBody'>

        <form onSubmit={createNewPost}>
          <div className="flex justify-between mb-3">
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
      </div>
    </div>
  )
}

export default ModalAnger