import React from 'react'

import Love from '../../assets/section-icon/Love.gif'

import { SectionBoxes } from '../../data/SectionBoxes'

function SectionBox() {
  return (
    <div className='grid grid-cols-3'>
      <div className="border-2 border-black p-4">
        <img src={Love}/>
      </div>
    </div>
  )
}

export default SectionBox