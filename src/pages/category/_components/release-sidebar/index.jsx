import React, { useState } from 'react';
import './release-sidebar.css'

import { SectionBoxes } from '../../../../data/SectionBoxes'
import { Link } from 'react-router-dom';

function ReleaseSidebar() {  
  return (
    <div className='sidebar'>
      <h1 className='font-bold text-2xl'>Explore Emotions</h1>
      <ul className='mt-2'>
        {SectionBoxes.map((section_box) => (
          <Link key={section_box.id} to={`/release/${section_box.category}`}>
            <li className='text-lg flex items-center gap-2 hover:underline cursor-pointer'>
              {section_box.icon}
              {section_box.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ReleaseSidebar