import React, { useState } from 'react';
import './sidebar.css'

import { SectionBoxes } from '../../data/SectionBoxes'

function Sidebar({ categoryData }) {

  const handleCategoryChange = (data) => {
    categoryData(data);
  };
  return (
    <div className='sidebar'>
      <h1 className='font-bold text-2xl'>Explore Emotions</h1>
      <ul className='mt-2'>
        {SectionBoxes.map((section_box) => (
          <div key={section_box.id} onClick={() => handleCategoryChange(`${section_box.category}`)}>
            <li className='text-lg flex items-center gap-2 hover:underline'>
              {section_box.icon}
              {section_box.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar