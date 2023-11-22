import React, { useEffect, useState } from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'
import Logo from "../../assets/Document from Hasan (1).jpg"

import Image from '../common/Image'
import {CgMenuRight} from "react-icons/cg"
import { Link } from 'react-scroll';

import {CiLight,CiDark} from "react-icons/ci"

import { useDispatch, useSelector } from 'react-redux'
import { darkTrue } from '../../slices/darkSlices'
import { Link as Links } from 'react-router-dom'
import { MdOutlineDarkMode,MdOutlineLightMode  } from "react-icons/md";

function Navber() {
  let darkData = useSelector((state)=>state.dark.darkitem)
  
  let [dark,setDark] = useState(false)
 
  const [open,setOpen] =useState(false)
  const [color,setColor] = useState(false)


  const [input,setInput] = useState("")

  const handleInput = (e)=>{
      setInput(e.target.checked)
  }
  

  


  const dispatch = useDispatch()

  dispatch(darkTrue(dark))

 


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
    <section className={`fixed w-full z-50  ${color ? `${darkData ? "bg-secondary" : "bg-[white]"}` : darkData ? "bg-secondary" : "bg-transparent" } px-4 xl:px-0`}>
        <Container>
            <Flex className="justify-between items-center py-2">
                <div className='w-[10%]'>
                  <div className='w-12 '>
                   <Image src={Logo} alt="Logo" className="rounded-[12px]"/>
                  </div>
                </div>

                <div className={`w-[40%] hidden md:block`}>
                 
                  <ul className={`flex   justify-center   gap-x-10  `}>
                    <Links to='/'>
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>Home</li>
                    </Links>
                    
                    <Link 
                      to="service" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>Service</li>
                  
        
                    </Link> 

                    <Link 
                      to="protfolio" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                    <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>Protfolio</li>
                  
        
                    </Link>

                    <Link 
                      to="blog" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>Blog</li>
                    
        
                    </Link>

                    <Link 
                      to="contact" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                    <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>Contact</li>
                      
        
                    </Link>

                    <Link 
                      to="about" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${darkData ? "text-white after:bg-white" : "text-secondary md:text-secondary hover:text-secondary after:bg-secondary"}`}>About</li>
                    
        
                    </Link>

                  </ul>

                  </div>

              {/* Responsive Menu  */}
              <div className='md:hidden block'>
                  <ul className={` absolute flex flex-col items-center gap-y-4 py-5 top-16 left-0 ${darkData ? "bg-secondary" : "bg-white"} w-full ${open ? "rotate-x-0" : "rotate-x-90"}  duration-500`}>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>Home</li>
             
      
                  </Link>


                  <Link 
                    to="service" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>Service</li>
                 
      
                  </Link>

                  

                  <Link 
                    to="protfolio" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                   <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>Protfolio</li>
                 
      
                  </Link>

                  <Link 
                    to="blog" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>Blog</li>
                  
      
                  </Link>

                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                   <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>Contact</li>
                     
      
                  </Link>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
               <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-base font-semibold ${darkData ? "text-white":"text-secondary"}`}>About</li>
                   
      
                  </Link>
           
                  </ul>

              </div>


                

                <div className={`w-[250px] flex justify-end items-center gap-x-5 ${darkData && "text-black"}`}>
              
                 <MdOutlineDarkMode className={darkData ? "text-white cursor-pointer": "text-secondary cursor-pointer"} onClick={()=>{setDark(true)}} size={25}/>
                 <MdOutlineLightMode className={darkData ? "text-white cursor-pointer": "text-secondary cursor-pointer"} onClick={()=>{setDark(false)}}  size={25}/>
                  


           



                   <CgMenuRight size={25} className={` md:hidden cursor-pointer ${darkData && "text-white"}   `} onClick={()=>{setOpen(!open)}}/>
                  
                   <Link 
                      to="contact" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <button className={`${darkData ? "bg-white":"bg-secondary text-white hover:bg-transparent hover:text-secondary hover:border-secondary"} hidden md:block border  duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base border-secondary`}>Contract</button>
                </Link>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber