import React from 'react'

function Button({text,className}) {
  return (
    <button className={`bg-secondary hover:bg-primary duration-500 px-6 text-white rounded-[5px] py-2 font-dm font-medium text-base ${className}`}>{text}</button>
  )
}

export default Button