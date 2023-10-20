import React from 'react'
import {AiFillCaretLeft} from "react-icons/ai"
function PrevArrow(props) {
  const {onClick} = props
  return (
    <div onClick={onClick} className={`rounded-[2px] inline-block px-2 py-1 bg-secondary absolute cursor-pointer  mr-5 z-20 ${props.class}`}>
          <AiFillCaretLeft size={20} className='text-white'/>
    </div>
  )
}

export default PrevArrow