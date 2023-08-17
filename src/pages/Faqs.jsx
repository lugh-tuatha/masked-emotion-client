import React, { useState } from 'react';
import './pages.css';

import MainLayout from '../layout/MainLayout';
import { Collapse } from 'react-collapse';

import * as Ai from 'react-icons/ai';

import { FaqsData } from '../data/faqsData';

function Faqs() {
  const [faqsData, setFaqsData] = useState(FaqsData);

  const toggleCollapse = (index) => {
    const updatedFaqsData = [...faqsData];
    updatedFaqsData[index].isOpened = !updatedFaqsData[index].isOpened;
    setFaqsData(updatedFaqsData);
  };

  return (
    <MainLayout>
      <div className="container-width mt-6">
        <h1 className='text-3xl font-bold'>Some common questions often asked</h1>

        <div className='mt-4'>
          {faqsData.map((faqs, index) => (
            <div key={index} className={`duration-200 mb-2 ${faqs.isOpened ? 'bg-[#FF6882] text-black' : 'bg-[#081F4B] text-white'}`}>
              <div className='px-4 py-3 cursor-pointer flex items-center justify-between gap-2'
                onClick={() => toggleCollapse(index)}>
                <p>{faqs.question}</p>
                {faqs.isOpened ? <Ai.AiOutlineMinus size={24} /> : <Ai.AiOutlinePlus size={24} />}
              </div>
              <Collapse isOpened={faqs.isOpened}>
                <div className='px-4 pb-2 text-sm'>{faqs.answer}</div>
              </Collapse>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mt-4">Do you have a question you'd like to ask us?</h1>

        <div className="mt-4 bg-[#FF6882] rounded-lg px-20 py-5">
          <div className='flex justify-center gap-2'>
            <p>Our dm's is open kindly send your question at </p>
            <span className='inline-flex items-center gap-1'>
              <Ai.AiOutlineMail size={20}/> 
              <p className='inline-block font-bold'>acegabriel0710@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Faqs;
