import React from 'react'
import './preload-component.css'

function Preload() {
  return (
    <div>
      <div className="mssgeBox justify-between">
        <div className="ttle">
          <div className='s44keleton skeleton-avatar'></div>     
          <h6 className='skeleton skeleton-text'></h6>
          <h6 className='skeleton skeleton-text'></h6>
        </div>
        
        <div>
          <h6 className='skeleton skeleton-content'></h6>
          <h6 className='skeleton skeleton-content-2'></h6>
          <div className="flex justify-end pb-1 pr-2">
            <h6 className='skeleton skeleton-text '></h6>
          </div>
        </div>

        <div className="btnMssge">
            <div className='preloader-box skeleton'></div>
            <div className='preloader-box skeleton'></div>
            <div className='preloader-box skeleton'></div>
            <div className='preloader-box skeleton'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Preload