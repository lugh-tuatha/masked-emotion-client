import React, { useState } from 'react'
import './pages.css'
import axios from 'axios'


import Footer from '../components/footer'
import Button from '../components/button'
import Header from '../components/Header'

import empty from '../assets/img/empty.png'

function Faqs() {
  const [question, setQuestion]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      Question:question
    }
    axios.post('https://sheet.best/api/sheets/e052446c-1611-4579-add4-22d1ed58e624', data).then((response)=>{
      console.log(response);
      setQuestion('')
    })
  }
  return (
    <div>
      <Header />
    <div className="container-width faq">

      <div>
        <img src={empty} className='mx-auto mb-4' />

        <p className=' text-center text-2xl font-semibold text-red-500'>There are no questions in the FAQ yet. Please submit a question to the developers.</p>
      </div>

      <form className='text-center mt-4' onSubmit={handleSubmit}>
        <p className='text-xl mb-2 uppercase sub'>Submit your question here</p>
        <textarea rows="10" className='p-4 bg-transparent submit-faq w-full md:w-1/2' placeholder='Question.' onChange={(e)=>setQuestion(e.target.value)} value={question} /><br />
        

        <button type='submit'><Button>Submit</Button></button>
      </form>
    </div>

      <Footer />
    </div>
  )
}

export default Faqs