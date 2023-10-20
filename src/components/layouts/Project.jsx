import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'

import ProjectOne from "../../assets/orebiBanner.png"
import ProjectTwo from "../../assets/daraz.png"
import ProjectThree from "../../assets/security.png"

import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrow from '../common/PrevArrow'
import NextArrow from '../common/NextArrow'

function Project() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow:<PrevArrow class=" -bottom-12 md:bottom-10 right-1/2"/>,
        nextArrow:<NextArrow class ="-bottom-12 md:bottom-10 left-1/2"/>        

      };
  return (
    <section className='mt-[120px] relative'>
         <Container>
         <h2 className='font-dm font-bold text-secondary text-center text-[30px] mb-5'>My Current Project </h2> 
        
        <Slider {...settings}>
        
             <div className='md:w-full  bg-white shadow-xl shadow-gray-400/20  px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectOne} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>View Code</p>
                        <p className='font-dm font-medium text-white text-lg '>Live Project</p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className='font-dm font-bold mb-2 md:mb-0 text-primary text-[20px]'>Orebi Ecommarce</h2> 
                    <p className='font-dm font-normal md:font-medium text-sm md:text-base text-secondary mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12'>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>React</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Tailwind</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Javascript</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Redux</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semiboldfont-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center gap-x-4 pt-8 ">
                            <Flex className='items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Code</p>
                                <AiFillGithub size={30}/>
                            </Flex>

                            <Flex className=' items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Live Demo</p>
                                <FiExternalLink size={25}/>
                            </Flex>
                        
                        </Flex>

                    </div>
                   </div>
                </Flex>
             </div>
             <div className='md:w-full  bg-white shadow-xl shadow-gray-400/20  px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectTwo} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>View Code</p>
                        <p className='font-dm font-medium text-white text-lg '>Live Project</p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className='font-dm font-bold mb-2 md:mb-0 text-primary text-[20px]'>Daraz Ecommarce</h2> 
                    <p className='font-dm font-normal md:font-medium text-sm md:text-base text-secondary mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12'>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>React</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Tailwind</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Javascript</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Redux</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semiboldfont-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center gap-x-4 pt-8 ">
                            <Flex className='items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Code</p>
                                <AiFillGithub size={30}/>
                            </Flex>

                            <Flex className=' items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Live Demo</p>
                                <FiExternalLink size={25}/>
                            </Flex>
                        
                        </Flex>

                    </div>
                   </div>
                </Flex>
             </div>
             <div className='md:w-full  bg-white shadow-xl shadow-gray-400/20  px-8 pt-8 md:pb-[140px] rounded-[5px]'>
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                   <div className='md:w-[40%] relative overflow-hidden group'>
                    
                    <div className='scale-105 group '>
                      <Image src={ProjectThree} className="group-hover:scale-110 duration-500 "/>
                    </div>

                     <div className='w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'> </div>
                     <div className='w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5'>
                        <p className='font-dm font-medium text-white text-lg '>View Code</p>
                        <p className='font-dm font-medium text-white text-lg '>Live Project</p>
                     </div>
                   </div>

                   <div className='md:w-[55%] md:text-left text-center'>
                   <h2 className='font-dm font-bold mb-2 md:mb-0 text-primary text-[20px]'>Security Gurd Website</h2> 
                    <p className='font-dm font-normal md:font-medium text-sm md:text-base text-secondary mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12'>
                    Website where you can get famous citation APIs collected by different RestApis and create your own citations by setting by your personal preferences.
                    </p>

                 <div className='hidden md:block'>
                    <p className='mt-10 hidden md:block font-dm font-semibold font-lg text-secondary mb-5'>Use is Project :</p>
                   
                    <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>React</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Tailwind</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Javascript</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semibold font-lg text-secondary '>Redux</p>
                         </div>
                         <div className='px-4 py-2 bg-white shadow-xl shadow-gray-400/30 rounded-[5px]'>
                             <p className='font-dm font-semiboldfont-lg text-secondary '>Context Api</p>
                         </div>
                    </Flex>


                        <Flex className="justify-center gap-x-4 pt-8 ">
                            <Flex className='items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Code</p>
                                <AiFillGithub size={30}/>
                            </Flex>

                            <Flex className=' items-center gap-x-2'>
                                <p className='font-dm font-medium font-base text-primary'>Live Demo</p>
                                <FiExternalLink size={25}/>
                            </Flex>
                        
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