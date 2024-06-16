import React from 'react'

import { SectionBoxes } from '../../data/SectionBoxes'
import { Link } from 'react-router-dom'

function SectionBox() {
  return (
    <div className='flex justify-center flex-wrap my-6 boxes gap-4'>
      {SectionBoxes.map((section_box) => (
        <Link key={section_box.id} to="/release/emotions">
          <div className="border-2 w-36 h-36 rounded-xl bg-white border-black p-4">
            <img src={section_box.image} className='h-20 rounded-lg mx-auto'/>
            <h1 className='font-bold text-lg my-2'>{section_box.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SectionBox