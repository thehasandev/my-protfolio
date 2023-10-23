import React from 'react'
import { useSelector } from 'react-redux'

function Button({text,className}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <button className={`duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base    ${darkData ? "bg-white text-secondary hover:bg-transparent  hover:text-white border border-white " : "bg-secondary text-white hover:bg-transparent  hover:text-secondary border border-secondary "}   ${className}`}>{text}</button>
  )
}

export default Button