import React from 'react';
import './section-box.css';

function SectionBox(props) {
  return (
    <div className="emo-box d-flex align-items-center justify-content-center">
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SectionBox;
