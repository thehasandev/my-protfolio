import React from 'react'
import { useSelector } from 'react-redux'

function Input({text,placeholder,type,name}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <div className='relative'>
        <input type={type} name={name} required className=' w-full text-secondary border border-solid border-gray-400 py-5 px-5 mb-2 rounded-[5px]  placeholder:text-sm placeholder:font-dm' placeholder={placeholder} />
        <h4 className={`font-dm font-bold text-sm   py-1 px-5 inline absolute -top-4 left-5 ${darkData ? "text-secondary bg-[#F0EBD8]" : "text-sencondary bg-white"}`}>{text}</h4>
    </div>
  )
}

export default Input