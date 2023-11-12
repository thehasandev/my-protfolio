import React from 'react'

import Image from './Image'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BlogCart({src,heading,link}) {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
       <div className='w-[350px] ]'>
            <div className='h-[300px] relative group  bg-slate-100 scale-105 overflow-hidden shadow-lg '>
                <Image src={src} className="group-hover:scale-110 group-hover:duration-500"/>
                <div className='bg-black/10 absolute top-0 left-0 w-full h-full hover:bg-transparent hover:duration-300'></div>
            </div>
                <div className='p-4'>
                    <h2 className={`font-dm  font-bold text-2xl  mt-5 ${darkData ? "text-white":"text-secondary"}`}>{heading}</h2>
                    <p className={`font-dm my-4 font-normal text-sm  ${darkData ? "text-white" :"text-secondary"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum accusamus, maiores ratione exercitationem iusto?</p>
                    <Link to={link}>
                      <Button text="Veiw Blog"/>
                    </Link>
                
                </div>
        </div>
  )
}

export default BlogCart