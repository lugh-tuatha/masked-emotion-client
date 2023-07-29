import React from 'react'
import './sidebar.css'
import { Link, NavLink } from 'react-router-dom'

import { SectionBoxes } from '../../data/SectionBoxes'

function Sidebar() {
  return (
    <div className='sidebar'>
      <h1 className='font-bold text-xl'>Explore Emotions</h1>
      <ul className='mt-2'>
        {SectionBoxes.map((section_box) => (
          <NavLink to={section_box.link}>
            <li key={section_box.id} className='text-lg flex items-center gap-2 hover:underline'>
              {section_box.icon}
              {section_box.title}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar