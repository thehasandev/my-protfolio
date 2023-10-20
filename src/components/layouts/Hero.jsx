import React from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'

import { TypeAnimation } from 'react-type-animation';

import {AiFillGithub} from "react-icons/ai"
import {BiLogoLinkedinSquare} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import Image from '../common/Image';
import Man from "../../assets/git.png"
function Hero() {
  return (
    <section className='md:py-[140px] py-[80px] '>
        <Container>
            <Flex className="flex-col-reverse gap-y-10 md:flex-row justify-center items-center">
                <div className='md:w-[50%] md:mx-0 mx:auto '>
                    <h1 className='font-dm font-bold md:w-[450px] px-4 md:px-0 w-[350px] mx-auto md:mx-0 md:text-3xl text-xl text-primary'>HI I'M MOHAMMED HASAN. I AM A    <TypeAnimation
                        sequence={[
                            'FRONT END DEVELOPER ',
                            1000,
                            'BACK END DEVELOPER ',
                            1000,
                            'BACK END DEVELOPER ',
                            1000,
                        
                        
                        ]}
                            wrapper="span"
                            speed={50}
                            className=' font-dm font-bold md:text-3xl inline-block text-xl text-primary text-center leading-[70px'
            
                            repeat={Infinity}
                    /></h1>
                
                    <p className='font-dm font-medium my-5 md:w-[400px] w-[360px] mx-auto md:mx-0 px-4 xl:px-0 text-sm md:text-lg text-secondary'>As a frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js</p>
                    
                    <Flex className="md:w-[360px] justify-between">
                        <div className='bg-secondary hover:bg-primary duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2'>
                            <AiFillGithub size={25} className='text-white'/><p className='font-dm font-medium text-lg inline-block text-white text-center'>Github</p>
                        </div>
                        <div className='bg-secondary hover:bg-primary duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2'>
                            <BiLogoLinkedinSquare size={25} className='text-white'/><p className='font-dm font-medium text-lg inline-block text-white text-center'>Linkin</p>
                        </div>
                        <div className='bg-secondary hover:bg-primary duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2'>
                            <MdEmail size={25} className='text-white'/><p className='font-dm font-medium text-lg inline-block text-white text-center'>Email</p>
                        </div>
                    
                    </Flex>

                </div>


                <div className='md:w-[30%] md:mx-0 mx-auto'>
                    <div className='w-[250px] mx-auto md:mx-0'>
                    <Image src={Man} className="rounded-full"/>
                    </div>
                </div>

            </Flex>    
        </Container>
    </section>
  )
}

export default Hero