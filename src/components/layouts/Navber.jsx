import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'
import Logo from "../../assets/logo.png"
import List from '../common/List'
import Button from '../common/Button'
import Image from '../common/Image'
import {CgMenuRight} from "react-icons/cg"
import { Link } from 'react-scroll';
import {HiOutlineLightBulb} from "react-icons/hi"
import {MdOutlineDarkMode,MdDarkMode} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { darkTrue } from '../../slices/darkSlices'

function Navber() {
  let darkData = useSelector((state)=>state.dark.darkitem)

 
  const [open,setOpen] =useState(false)
  const [color,setColor] = useState(false)

  const dispatch = useDispatch()

  const handleDark = (data)=>{
    dispatch(darkTrue(data))
  }

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
    <section className={`fixed w-full z-50  ${color && `${darkData ? "bg-secondary" : "bg-[#1D2D44]"}`} px-4 xl:px-0`}>
        <Container>
            <Flex className="justify-between items-center py-2">
                <div className='w-[10%]'>
                  <div className='w-10'>
                   <Image src={Logo} alt="Logo"/>
                  </div>
                </div>

                <div className={`w-[40%]`}>
                  <ul className={`flex  justify-center items-center  flex-col absolute left-0 top-16 ${open ? "rotate-x-0 duration-500" : "duration-500 rotate-x-90 origin-top"} py-10 md:py-0  w-full  -translate-x-1/2 md:translate-x-0 md:static  md:bg-transparent md:flex-row gap-y-5  gap-x-10  ${darkData ? "bg-secondary" : "bg-[#1D2D44]"}`}>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <List text="Home" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>


                  <Link 
                    to="service" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                   <List text="Service" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>

                  

                  <Link 
                    to="protfolio" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                     <List text="Protfolio" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>

                  <Link 
                    to="blog" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                      <List text="Blog" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>

                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                       <List text="Contact" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <List text="About" className={`${color?"text-white after:bg-white hover:text-white" : "hover:text-white"}`}/>
      
                  </Link>

                    
                    
                        
                   
                  </ul>
                </div>

                <div className={`w-[200px] flex justify-end items-center gap-x-5 ${darkData && "text-white"}`}>
              
                   <MdOutlineDarkMode size={25} className={` ${color&& "text-white"}`} onClick={()=>{handleDark(true)}}/>
              
                   <HiOutlineLightBulb  size={25} className={` ${color&& "text-white"}`} onClick={()=>{handleDark(false)}}/>
                   <CgMenuRight size={25} className={` md:hidden cursor-pointer ${darkData && "text-white"}   ${color ? "text-white": "text-secondary"}`} onClick={()=>{setOpen(!open)}}/>
                  
                   <Button text="Contract" className={`hidden md:block ${darkData && "bg-white text-[#111111]"} ${color&& "border-white bg-white text-[#111111] hover:bg-white"}`} />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber