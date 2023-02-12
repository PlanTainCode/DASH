import React from 'react'

const Href = ({text, href}) => {
  return (
    <a href={href} className='font-bold text-sm text-gray hover:text-purple transition-all'>{text}</a>
  )
}

export default Href;