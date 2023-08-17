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
            <div key={index} className={`duration-200 mb-2 ${faqs.isOpened ? 'bg-red-200' : 'bg-gray-200'}`}>
              <div className='px-4 py-3 cursor-pointer flex items-center justify-between gap-2'
                onClick={() => toggleCollapse(index)}>
                <p>{faqs.question}</p>
                {faqs.isOpened ? <Ai.AiOutlineMinus size={24} /> : <Ai.AiOutlinePlus size={24} />}
              </div>
              <Collapse isOpened={faqs.isOpened}>
                <div className='px-4 py-2'>{faqs.answer}</div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Faqs;
