import React from 'react'
import { useSelector } from 'react-redux'

function Button({text,className}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <button className={` hover:bg-transparentc  hover:text-[#111111] border border-[#111111] duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base ${darkData ?  "bg-white text-secondary" : "bg-secondary text-white"}  ${className}`}>{text}</button>
  )
}

export default Button