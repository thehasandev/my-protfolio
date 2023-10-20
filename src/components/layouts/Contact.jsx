import React from 'react'
import Container from '../common/Container'
import Input from '../common/Input'
import Flex from '../common/Flex'
import Button from '../common/Button'
import {GoProjectRoadmap} from "react-icons/go"
import {PiUsersThreeLight} from "react-icons/pi"
import {GiReturnArrow} from "react-icons/gi"

import CountUp from 'react-countup';
import { AiTwotonePhone,AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

function Contact() {
  return (
    <>
    <section className='my-[60px]'>
        <Container>
         <h2 className='font-dm font-bold text-secondary mb-16 text-[30px] text-center'>Contact Me</h2>
         

         <Flex className="justify-between">
            <div className='w-[40%]'>
              
                 <div className='flex gap-x-5 mb-5'>
                    <div className='w-96 py-10 bg-secondary rounded-[5px] text-white text-center'>
                        <Flex className="justify-center">
                         <GoProjectRoadmap size={50} />
                        </Flex>
                        <div className='font-dm font-semibold text-white text-2xl my-2'>
                          <CountUp start={0} end={80} delay={0}>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                            </CountUp>
                        </div>
                        <p className='font-dm font-semibold text-white text-xl '>Complete project</p>
                    </div>
                   
                    <div className='w-96 py-10'>
                      <Flex className="items-center gap-x-5">
                        <AiTwotonePhone size={30} className='text-secondary'/>
                        <p className='font-dm font-medium text-base text-secondary'>01764262634</p>
                      </Flex>
                      <Flex className="items-center gap-x-5 my-4">
                        <AiOutlineMail size={30} className='text-secondary'/>
                        <p className='font-dm font-medium text-base text-secondary'>thehasandev@gmail.com</p>
                      </Flex>
                      <Flex className="items-center gap-x-5">
                        <CiLocationOn size={30} className='text-secondary'/>
                        <p className='font-dm font-medium text-base text-secondary'>thehasandev@gmail.com</p>
                      </Flex>
                       
                    </div>

                   
                 </div>

                 <div className='flex gap-x-5'>
                    <div className='w-96 py-10 bg-secondary rounded-[5px] text-white text-center'>
                        <Flex className="justify-center">
                         <GiReturnArrow size={40} />
                        </Flex>
                        <div className='font-dm font-semibold text-white text-2xl my-4'>
                          <CountUp start={0} end={10} delay={0}>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                            </CountUp>
                        </div>
                        <p className='font-dm font-semibold text-white text-xl '>Project Pending</p>
                    </div>

                    <div className='w-96 py-10 bg-secondary rounded-[5px] text-white text-center'>
                        <Flex className="justify-center">
                         <PiUsersThreeLight size={50} />
                        </Flex>
                        <div className='font-dm font-semibold text-white text-2xl my-4'>
                          <CountUp start={0} end={150} delay={0}>
                                {({ countUpRef }) => (
                                  <div>
                                    <span ref={countUpRef} />
                                  </div>
                                )}
                          </CountUp>

                        </div>
                       
                        <p className='font-dm font-semibold text-white text-xl '>Client review</p>
                    </div>
                   
                 </div>
            </div>


            <Flex className='w-[48%] justify-between flex-wrap'>
                <div className='w-[48%]'>
                  <Input text="First Name *" placeholder="Enter your first name"/>
                </div>
                <div className='w-[48%]'>
                  <Input text="Last Name *" placeholder="Enter your last name"/>
                </div>
                <div className='w-full my-4'> 
                  <Input text="Email *" placeholder="Enter your email"/>
                </div>
                <div className='w-full relative'> 
                <h4 className='font-dm font-bold text-sm pb-3 bg-white py-1 px-5 inline absolute -top-4 left-5 '>Message</h4>
                  <textarea className='w-full border border-solid border-gray-400 rounded-[5px] py-5 px-5 mb-2  placeholder:text-sm placeholder:font-dm'>

                  </textarea>
                </div>
                <Flex className="justify-center w-full">
                  <Button text="Send a Message" className="mt-5 uppercase"/>
                </Flex>
            </Flex>
         </Flex>
        </Container>
    </section>

    </>
  )
}

export default Contact