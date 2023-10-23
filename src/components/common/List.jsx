import React from 'react'
import { useSelector } from 'react-redux'

function List({text,footer,className}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
 

  return (
  
      <li className={` ${className}`}>{text}</li>
      

    
  )
}

export default List