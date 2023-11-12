import React, { useRef } from 'react';

import Container from '../common/Container'
import Input from '../common/Input'
import Flex from '../common/Flex'
import BackToUp from '@uiw/react-back-to-top';
import {GoProjectRoadmap} from "react-icons/go"
import {PiUsersThreeLight} from "react-icons/pi"
import {GiReturnArrow} from "react-icons/gi"

import CountUp from 'react-countup';
import { AiTwotonePhone,AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n80v8is', 'template_279n7dl', form.current, 'zcRWr5eZJRMzTUoYT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <>
    <section className='py-[60px]' id='contact'>
        <Container>

         <h2 className={`font-dm font-bold  mb-16 text-[30px] text-center ${darkData ? "text-white" :"text-secondary"}`}>Contact Me</h2>

         <Flex className="flex-wrap justify-between gap-y-10">
            <div className='lg:w-[40%] mx-auto xl:mx-0 '>
           

                 <div className='flex gap-5 flex-wrap md:flex-nowrap'>
                    <div className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center  ${darkData ? "bg-white text-secondary" :"bg-[#1D2D44] text-white"}`}>
                        <Flex className="justify-center">
                         <GiReturnArrow size={40} />
                        </Flex>
                        <div className={`font-dm font-semibold  text-2xl my-2 ${darkData ? "text-secondary":"text-white"}`}>
                          <CountUp start={0} end={10} delay={0}>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                            </CountUp>
                        </div>
                        <p className={`font-dm font-semibold  text-xl ${darkData ? "text-secondary" : "text-white"}`}>Project Pending</p>
                    </div>

                    <div className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center  ${darkData ? "bg-white text-secondary" :"bg-[#1D2D44] text-white"}`}>
                        <Flex className="justify-center">
                         <PiUsersThreeLight size={50} />
                        </Flex>
                        <div className={`font-dm font-semibold  text-2xl my-2 ${darkData ? "text-secondary":"text-white"}`}>
                          <CountUp start={0} end={150} delay={0}>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                          </CountUp>

                        </div>
                       
                        <p className={`font-dm font-semibold  text-xl ${darkData ? "text-secondary" : "text-white"}`}>Client review</p>
                    </div>
                   
                 </div>

                 <div className='flex flex-wrap md:flex-nowrap md:gap-5 mt-5  md:w-full'>
                    <div className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center  ${darkData ? "bg-white text-secondary" :"bg-[#1D2D44] text-white"}`}>
                        <Flex className="justify-center">
                         <GoProjectRoadmap size={50} />
                        </Flex>
                        <div className={`font-dm font-semibold  text-2xl my-2 ${darkData ? "text-secondary":"text-white"}`}>
                          <CountUp start={0} end={80} delay={0}>
                                {({ countUpRef }) => (
                                <div>
                                    <span  ref={countUpRef} />
                                  </div>
                                )}
                            </CountUp>
                        </div>
                        <p className={`font-dm font-semibold  text-xl ${darkData ? "text-secondary" : "text-white"}`}>Complete project</p>
                    </div>
                   
                    <div className='md:w-96 w-[360px] mx-auto    py-10'>
                      <Flex className="items-center gap-x-5">
                        <AiTwotonePhone size={30} className={`${darkData ? "text-white" : "text-secondary"}`}/>
                        <p className={`font-dm font-medium text-base  ${darkData ? "text-white":"text-secondary"}`}>01764262634</p>
                      </Flex>
                      <Flex className="items-center gap-x-5 my-4">
                        <AiOutlineMail size={30} className={`${darkData ? "text-white" : "text-secondary"}`}/>
                        <p  className={`font-dm font-medium text-base  ${darkData ? "text-white":"text-secondary"}`}>thehasandev@gmail.com</p>
                      </Flex>
                      <Flex className="items-center gap-x-5">
                        <CiLocationOn size={30} className={`${darkData ? "text-white" : "text-secondary"}`}/>
                        <p  className={`font-dm font-medium text-base  ${darkData ? "text-white":"text-secondary"}`}>Dhaka,Narsingdi</p>
                      </Flex>
                       
                    </div>
                   
                 </div>

  

            </div>
            
            <form className='lg:w-[45%]'>
              <Flex className='lg:w-full flex-wrap justify-between px-4 md:px-0'>
                  <div className='w-[48%] '>
                    <Input text="First Name *" name="user_name" placeholder="Enter your first name"/>
                  </div>
                  <div className='w-[48%]'>
                    <Input text="Last Name *" name="user_name" placeholder="Enter your last name"/>
                  </div>
                  <div className='w-full my-5'> 
                    <Input text="Email *" name="user_email" placeholder="Enter your email"/>
                  </div>
                  <div className='w-full relative'> 
                  <h4 className={`font-dm font-bold text-sm   text-secondary py-1 px-5 inline absolute -top-4 left-5 ${darkData ? "bg-[#F0EBD8]" : "bg-white"}`}>Message</h4>
                    <textarea placeholder='Enter your message' name="message" className='w-full border text-secondary border-solid border-gray-400 rounded-[5px]  py-5 px-5 mb-2  placeholder:text-sm placeholder:font-dm'>

                    </textarea>
                  </div>
                  <Flex className="justify-center w-full">
                    <input type="submit" value="Send" className ={` duration-500 px-6 uppercase cursor-pointer  rounded-[5px] py-2 font-dm font-medium text-base  ${darkData ?"bg-white text-secondary hover:bg-transparent  hover:text-white border border-white " : "bg-secondary text-white hover:bg-transparent  hover:text-secondary border border-secondary "}`}   />
                  </Flex>
              </Flex>

            </form>
             
         </Flex>
        <BackToUp><BsFillAirplaneFill size={16}/></BackToUp>
        </Container>
    </section>

    </>
  )
}

export default Contact