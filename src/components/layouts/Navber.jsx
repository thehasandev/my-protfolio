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

function Navber() {
  let darkData = useSelector((state)=>state.dark.darkitem)

 
  const [open,setOpen] =useState(false)
  const [color,setColor] = useState(false)
  const [down,setDown] = useState(false)

  const [input,setInput] = useState("")

  const handleInput = (e)=>{
      setInput(e.target.checked)
  }
  

  


  const dispatch = useDispatch()

  dispatch(darkTrue(input))

 


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
    <section className={`fixed w-full z-50  ${color ? `${darkData ? "bg-secondary" : "bg-[#1D2D44]"}` : darkData ? "bg-secondary" : "bg-white" } px-4 xl:px-0`}>
        <Container>
            <Flex className="justify-between items-center py-2">
                <div className='w-[10%]'>
                  <div className='w-12 '>
                   <Image src={Logo} alt="Logo" className="rounded-[12px]"/>
                  </div>
                </div>

                <div className={`w-[40%] hidden md:block`}>
                 
                  <ul className={`flex   justify-center   gap-x-10  `}>
                    <Link 
                      to="home" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Home</li>
              
        
                    </Link>

                    <Link 
                      to="service" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Service</li>
                  
        
                    </Link> 

                    <Link 
                      to="protfolio" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                    <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Protfolio</li>
                  
        
                    </Link>

                    <Link 
                      to="blog" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                      <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Blog</li>
                    
        
                    </Link>

                    <Link 
                      to="contact" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                    <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Contact</li>
                      
        
                    </Link>

                    <Link 
                      to="about" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                <li onClick={()=>setDown(true)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>About</li>
                    
        
                    </Link>

                  </ul>

                  </div>

              {/* Responsive Menu  */}
              <div className='md:hidden block'>
                  <ul className={` absolute flex flex-col items-center gap-y-4 py-5 top-16 left-0 ${darkData ? "bg-secondary" : "bg-[#1D2D44]"} w-full ${open ? "rotate-x-0" : "rotate-x-90"}  duration-500`}>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Home</li>
             
      
                  </Link>


                  <Link 
                    to="service" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Service</li>
                 
      
                  </Link>

                  

                  <Link 
                    to="protfolio" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                   <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Protfolio</li>
                 
      
                  </Link>

                  <Link 
                    to="blog" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                    <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Blog</li>
                  
      
                  </Link>

                  <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
                   <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>Contact</li>
                     
      
                  </Link>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={2000} 
                  >
               <li onClick={()=>setOpen(false)} className={`font-dm cursor-pointer text-white text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 ${color ? "md:text-white hover:text-white after:bg-white" : darkData ? "md:text-white after:bg-white" : "md:text-secondary hover:text-secondary after:bg-secondary"}`}>About</li>
                   
      
                  </Link>

                    
                    
                        
                   
                  </ul>

              </div>


                

                <div className={`w-[250px] flex justify-end items-center gap-x-5 ${darkData && "text-black"}`}>
              
            
                  <label className="relative inline-flex items-center cursor-pointer ">
                    <input type="checkbox" checked={input}  onChange={handleInput} className="sr-only peer "/>
                    <div className={` w-12 h-6 border  peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full  peer-checked:-z-50  after:content-[''] after:absolute after:top-[2px] after:left-[4px]  after:border-secondary after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primary  focus:outline-0 peer-checked:bg-white ${color ? "border-white after:bg-white z-30" : "border-secondary after:bg-secondary"}`}></div>
                  <CiLight size={18} className={`absolute top-1/2 -translate-y-1/2 left-1 font-bold z-10 text-secondary  `}/>
                  <CiDark size={18} className={`absolute top-1/2 -translate-y-1/2 right-1 font-bold  ${color?"text-white": "text-secondary"}`}/>
                  
                    
                  </label>


           



                   <CgMenuRight size={25} className={` md:hidden cursor-pointer ${darkData && "text-white"}   ${color ? "text-white": "text-secondary"}`} onClick={()=>{setOpen(!open)}}/>
                  
                   <Link 
                      to="contact" 
                      spy={true} 
                      smooth={true} 
                      offset={-100} 
                      duration={2000} 
                    >
                   <button className={`hover:bg-transparent hidden md:block   duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base   ${color ? "bg-white text-secondary hover:text-white border border-white" : darkData ? "text-secondary bg-white hover:text-white border border-white" : "bg-secondary text-white hover:text-secondary border border-secondary"}`}>Contract</button>
                </Link>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navber