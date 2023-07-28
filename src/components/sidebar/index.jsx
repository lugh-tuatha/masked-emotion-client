import React from 'react'
import { Link } from 'react-router-dom'

import { SectionBoxes } from '../../data/SectionBoxes'

function Sidebar() {
  return (
    <div>
      <h1 className='font-bold text-xl'>Explore Emotions</h1>
      <ul className='mt-2'>
        {SectionBoxes.map((section_box) => (
          <li key={section_box.id} className='text-lg flex items-center gap-2 '>
            {section_box.icon}
            <Link to={section_box.link}>
              {section_box.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar