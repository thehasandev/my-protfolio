import React from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
function NextArrow(props) {
  const {onClick} = props
  return (
    <div onClick={onClick} className={`bg-secondary  rounded-[2px] inline-block cursor-pointer absolute  px-2 py-1 ${props.class}`}>
      <AiFillCaretRight size={20} className='text-white'/>
   </div>
  )
}

export default NextArrow