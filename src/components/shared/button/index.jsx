import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button className='btn-main' disabled={props.disabled}>{props.children}</button>
  )
}

export default Button