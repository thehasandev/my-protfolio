import React from 'react'
import { useSelector } from 'react-redux'

function List({text,footer,className}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
 

  return (
  
      <li className={`font-dm cursor-pointer text-base ${darkData && "text-white hover:text-white"} ${footer ? "text-white font-normal mb-1": " font-semibold text-white  md:text-secondary    relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0 after:bg-secondary after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100"}  ${className}`}>{text}</li>
      

    
  )
}

export default List