import React from 'react'

function Button(props) {
  return (
    <button className='bg-primary text-white font-medium px-4 py-2 rounded'>{props.children}</button>
  )
}

export default Button