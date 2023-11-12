import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'

import ProjectOne from "../../assets/orebiBanner.png"
import ProjectTwo from "../../assets/daraz.png"
import ProjectThree from "../../assets/security.png"
import ProjectTronix from "../../assets/tronix.png"

import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrow from '../common/PrevArrow'
import NextArrow from '../common/NextArrow'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Project() {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow:<PrevArrow class=" -bottom-12 md:bottom-10 right-1/2"/>,
        nextArrow:<NextArrow class ="-bottom-12 md:bottom-10 left-1/2"/>        

      };

      let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section className='mt-[120px] relative'>
         
         <Container>
         <h2 className={`font-dm font-bold  text-center text-[30px] mb-5 ${darkData ? "text-white":"text-secondary"}`}>My Current Project </h2> 
        
        <Slider {...settings}>
        
             <div className='md:w-full    px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectOne} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>
                            <Link to="https://github.com/thehasandev/ecommerce-orebi.git">View Code</Link>
                        </p>
                        <p className='font-dm font-medium text-white text-lg '>
                            <Link to="https://ecommerce-orebi.netlify.app/">Live Project</Link>
                        </p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className={`font-dm font-bold mb-2 md:mb-0  text-[20px] ${darkData ? "text-white":"text-secondary"}`}>Orebi Ecommarce</h2> 
                    <p className={`font-dm font-normal md:font-normal text-sm md:text-base mt-5  mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12 ${darkData ? "text-white":"text-secondary"}`}>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>React</p>
                         </div>
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Tailwind</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Javascript</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Redux</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center items-center gap-x-4 pt-8 ">
                                <Link to="https://github.com/thehasandev/ecommerce-orebi.git">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Code</p>
                                        <AiFillGithub size={30}/>
                                    </Flex>
                                </Link>

                                <Link to="https://ecommerce-orebi.netlify.app/">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Live Demo</p>
                                        <FiExternalLink size={25}/>
                                    </Flex>
                                </Link>
                        </Flex>

                    </div>
                   </div>
                </Flex>
             </div>


             <div className='md:w-full    px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectTwo} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>
                           <Link to="https://github.com/thehasandev/daraz.git">View Code</Link>
                        </p>
                        <p className='font-dm font-medium text-white text-lg '>
                        <Link to="https://daraz-ecommarce.netlify.app">Live Project</Link>
                        </p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className={`font-dm font-bold mb-2 md:mb-0  text-[20px] ${darkData ? "text-white":"text-secondary"}`}>Daraz Ecommarce</h2> 
                    <p className={`font-dm font-normal md:font-normal text-sm md:text-base mt-5  mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12 ${darkData ? "text-white":"text-secondary"}`}>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>React</p>
                         </div>
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Tailwind</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Javascript</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Redux</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center items-center gap-x-4 pt-8 ">
                                <Link to="https://github.com/thehasandev/daraz.git">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Code</p>
                                        <AiFillGithub size={30}/>
                                    </Flex>
                                </Link>

                                <Link to="https://daraz-ecommarce.netlify.app">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Live Demo</p>
                                        <FiExternalLink size={25}/>
                                    </Flex>
                                </Link>
                        </Flex>

                 </div>
                   </div>
                </Flex>
             </div>

             <div className='md:w-full    px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectTronix} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>
                           <Link to="https://github.com/thehasandev/e_commerce_tronix.git">View Code</Link>
                        </p>
                        <p className='font-dm font-medium text-white text-lg '>
                        <Link to="https://tronix-ecommarce.netlify.app">Live Project</Link>
                        </p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className={`font-dm font-bold mb-2 md:mb-0  text-[20px] ${darkData ? "text-white":"text-secondary"}`}>Tronix Ecommarce</h2> 
                    <p className={`font-dm font-normal md:font-normal text-sm md:text-base mt-5  mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12 ${darkData ? "text-white":"text-secondary"}`}>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>React</p>
                         </div>
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Tailwind</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Javascript</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Redux</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center items-center gap-x-4 pt-8 ">
                                <Link to="https://github.com/thehasandev/e_commerce_tronix.git">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Code</p>
                                        <AiFillGithub size={30}/>
                                    </Flex>
                                </Link>

                                <Link to="https://tronix-ecommarce.netlify.app">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Live Demo</p>
                                        <FiExternalLink size={25}/>
                                    </Flex>
                                </Link>
                        </Flex>

                    </div>
                   </div>
                </Flex>
             </div>

        

             <div className='md:w-full    px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectThree} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>
                        <Link to="https://github.com/thehasandev/bangle-fourse.git">View Code</Link>
                        </p>
                        <p className='font-dm font-medium text-white text-lg '>
                          <Link to="https://bangel-force.netlify.app">Live Project</Link>
                        </p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className={`font-dm font-bold mb-2 md:mb-0  text-[20px] ${darkData ? "text-white":"text-secondary"}`}>Security Gurd Website</h2> 
                    <p className={`font-dm font-normal md:font-normal text-sm md:text-base mt-5  mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12 ${darkData ? "text-white":"text-secondary"}`}>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>React</p>
                         </div>
                         <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Tailwind</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Javascript</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm  font-semibold text-lg text-secondary '>Redux</p>
                         </div>
                          <div className={`px-4 py-2 bg-white  rounded-[5px] ${darkData ? "shadow-0 " : "shadow-xl shadow-gray-400/30"}`}>
                             <p className='font-dm font-semibold text-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center items-center gap-x-4 pt-8 ">
                              <Link to="https://github.com/thehasandev/bangle-fourse.git">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Code</p>
                                        <AiFillGithub size={30}/>
                                    </Flex>
                                </Link>

                                <Link to="https://bangel-force.netlify.app">
                                    <Flex className='items-center gap-x-2'>
                                        <p className={`font-dm font-medium font-base  ${darkData ? "text-white":"text-secondary"}`}>Live Demo</p>
                                        <FiExternalLink size={25}/>
                                    </Flex>
                                </Link>
                        </Flex>

                    </div>
                   </div>
                </Flex>
             </div>

        









         
        

     

        </Slider>

         </Container>
    </section>
  )
}

export default Project