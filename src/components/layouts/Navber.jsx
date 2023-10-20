import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'
import Logo from "../../assets/logo.png"
import List from '../common/List'
import Button from '../common/Button'
import Image from '../common/Image'
import {AiOutlineMenu} from "react-icons/ai"

function Navber() {
  const [open,setOpen] =useState(false)
  const [color,setColor] = useState(false)
  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <section className={` fixed w-full z-50 ${color && "bg-gray-300"} px-4 xl:px-0`}>
        <Container>
            <Flex className="justify-between items-center py-2">
                <div className='w-[10%]'>
                  <div className='w-10'>
                   <Image src={Logo} alt="Logo"/>
                  </div>
                </div>

                <div className='w-[40%]  '>
                  <ul className={`flex  justify-center items-center  flex-col absolute left-0 top-16 ${open ? "rotate-x-0 duration-500" : "duration-500 rotate-x-90 origin-top"} py-10 md:py-0  w-full  -translate-x-1/2 md:translate-x-0 md:static bg-gray-300 md:bg-transparent md:flex-row gap-y-5  gap-x-10 `}>
                    <List text="Home"/>
                    <List text="About"/>
                    <List text="Service"/>
                    <List text="Protfolio"/>
                    <List text="Blog"/>
                    <List text="Contact"/>
                  </ul>
                </div>

                <div className='w-[20%] flex justify-end '>
                   <Button text="Contract" className="hidden md:block"/>
                   <AiOutlineMenu size={30} className='md:hidden cursor-pointer' onClick={()=>{setOpen(!open)}}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber