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
    <section className='py-[140px]'>
        <Container>
            <Flex className="justify-center items-center">
                <div className='w-[50%]'>
                    <h1 className='font-dm font-bold w-[450px] text-3xl text-primary'>HI I'M MOHAMMED HASAN. I AM A    <TypeAnimation
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
                            className=' font-dm font-bold text-3xl inline-block text-primary text-center leading-[70px'
            
                            repeat={Infinity}
                    /></h1>
                
                    <p className='font-dm font-medium my-5 w-[400px]  text-lg text-secondary'>As a frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js</p>
                    
                    <Flex className="w-[360px] justify-between">
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

                <div className='w-[30%]'>
                    <div className='w-[250px] '>
                    <Image src={Man} className="rounded-full"/>
                    </div>
                </div>

            </Flex>    
        </Container>
    </section>
  )
}

export default Hero