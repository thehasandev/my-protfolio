import React from 'react'
import {FiChevronsRight}from "react-icons/fi"

function ServiceList({text}) {
  return (
    <p className='font-dm font-normal text-base text-center text-white flex items-center gap-x-5 pl-16'><FiChevronsRight/>{text}</p>
  )
}

export default ServiceList