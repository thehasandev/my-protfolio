import React from 'react'

function List({text,footer,className}) {

  return (
  
      <li className={`font-dm cursor-pointer text-base ${footer ? "text-primary font-normal mb-1":" font-semibold text-secondary hover:text-primary  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0 after:bg-primary after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100"}  ${className}`}>{text}</li>
      

    
  )
}

export default List