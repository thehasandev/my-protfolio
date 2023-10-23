import React from 'react'
import {FiChevronsRight}from "react-icons/fi"
import { useSelector } from 'react-redux'

function ServiceList({text,className}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <p className={`font-dm font-normal text-base text-center  flex items-center gap-x-5 pl-16 ${className} ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}><FiChevronsRight/>{text}</p>
  )
}

export default ServiceList