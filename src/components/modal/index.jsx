import React from 'react'

function Modal({open}) {
  if(!open) return null;
  return (
    <div className=' modal border-2 border-red-500'>
      <div closeButton className=''> 
        <div >CREATING A POST</div>
      </div>
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

export default Modal