import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'
import Logo from "../../assets/logo.png"
import List from '../common/List'
import Button from '../common/Button'
import Image from '../common/Image'

function Navber() {
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
    <section className={` fixed w-full z-50 ${color && "bg-gray-300"}`}>
        <Container>
            <Flex className="justify-between items-center py-2">
                <div className='w-[10%]'>
                  <div className='w-10'>
                   <Image src={Logo} alt="Logo"/>
                  </div>
                </div>

                <div className='w-[40%]  '>
                  <ul className='flex  gap-x-10 justify-end'>
                    <List text="Home"/>
                    <List text="About"/>
                    <List text="Service"/>
                    <List text="Protfolio"/>
                    <List text="Blog"/>
                    <List text="Contact"/>
                  </ul>
                </div>

                <div className='w-[20%] flex justify-end '>
                   <Button text="Contract"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber