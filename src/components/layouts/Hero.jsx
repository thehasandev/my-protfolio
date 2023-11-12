import React from 'react'

import Container from '../common/Container'
import Flex from '../common/Flex'

import { TypeAnimation } from 'react-type-animation';

import {AiFillGithub} from "react-icons/ai"
import {BiLogoLinkedinSquare} from "react-icons/bi"
import {MdEmail} from "react-icons/md"
import Image from '../common/Image';
import Man from "../../assets/git.png"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Hero() {
    let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section className={`md:py-[160px] py-[80px] `} id='home'>
        <Container>
            <Flex className="flex-col-reverse gap-y-10 lg:flex-row justify-center items-center">
                <div className='md:w-[50%] md:mx-0 mx:auto '>
                    <h1 className={`font-dm font-bold md:w-[550px] px-4 md:px-0  mx-auto md:mx-0 md:text-3xl text-xl text-secondary ${darkData && "text-white"}`}>HI I'M MOHAMMED HASAN. I AM A <br />    <TypeAnimation
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
                            className={`font-dm font-bold md:text-3xl inline-block text-xl  text-center `}
            
                            repeat={Infinity}
                    /></h1>
                
                    <p className={`font-dm  my-6 md:w-[400px] w-[360px] mx-auto md:mx-0 px-4 xl:px-0 text-sm md:text-lg ${darkData ? "text-white font-light" : "text-secondary font-normal"}`}>As a frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in React.js</p>
                    
                    <Flex className="md:w-[360px] justify-between">
                    <Link to='https://github.com/thehasandev'>
                        <div className={`duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 ${darkData ? "bg-white hover:bg-white" : "bg-secondary hover:bg-primary"}`}>
                            <AiFillGithub size={25} className={`${darkData ? " text-secondary":"text-white"}`}/><p className={`font-dm font-medium text-lg inline-block  text-center ${darkData ? "text-secondary" :"text-white"}`}>Github</p>
                        </div>

                    </Link>
                        <Link to='https://www.linkedin.com/in/hasanmia/'>
                            <div className={`duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 ${darkData ? "bg-white hover:bg-white" : "bg-secondary hover:bg-primary"}`}>
                            
                                <BiLogoLinkedinSquare  size={25} className={`${darkData ? " text-secondary":"text-white"}`}/><p className={`font-dm font-medium text-lg inline-block  text-center ${darkData ? "text-secondary" :"text-white"}`}> Linkin </p>
                            
                            </div>
                        </Link>

                        <Link to="mailto:theahasandev@gmail.com">
                            <div className={`duration-300 w-[110px] px-2 rounded-[2px] py-2 flex items-center justify-center gap-x-2 ${darkData ? "bg-white hover:bg-white" : "bg-secondary hover:bg-primary"}`}>
                                <MdEmail size={25} className={`${darkData ? " text-secondary":"text-white"}`}/><p className={`font-dm font-medium text-lg inline-block  text-center ${darkData ? "text-secondary" :"text-white"}`}>Email</p>
                            </div>
                        </Link>
                    
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