import React from 'react'

function Input({text,placeholder,type}) {
  return (
    <div className='relative'>
        <input type={type} required className=' w-full border border-solid border-gray-400 py-5 px-5 mb-2 rounded-[5px]  placeholder:text-sm placeholder:font-dm' placeholder={placeholder} />
        <h4 className='font-dm font-bold text-sm pb-3 bg-white py-1 px-5 inline absolute -top-4 left-5'>{text}</h4>
    </div>
  )
}

export default Input