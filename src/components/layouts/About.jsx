import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import Computer from "../../assets/DSC_0011.jpg"
import { useSelector } from 'react-redux'
function About() {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section className='md:mb-[80px] md:mt-[120px ' id='about'>
        <Container >
            <Flex className="justify-between gap-y-10 flex-col md:flex-row">
               <div className='md:w-[40%] w-[360px] mx-auto md:mx-0 px-4 xl:px-0'>
                 <Image src={Computer} className="rounded-[10px] shadow-lg"/>
               </div>
               <div className='md:w-[50%] w-[360px] mx-auto md:mx-0 px-4 xl:px-0'>
               <h2 className={`font-dm font-bold  text-xl ${darkData ? "text-white":"text-secondary"}`}>About Me</h2> 
               <h2 className={`font-dm font-bold text-lg md:text-xl md:w-8/12   my-2 ${darkData ? "text-white " : "text-secondary "}`}>A dedicated Full Stack Web Developer based in Market Place</h2>
                <p className={`font-dm font-normal  text-sm md:text-base md:w-8/12  ${darkData ? "text-white " : "text-primary "}`}>Hello! My name is Franklin Carlos Huichi Contreras, and I'm a Full Stack web developer. I specialize in Java, JavaScript, Spring Boot, Angular, and ReactJs. My focus is on creating responsive web pages and software systems using REST. Currently, I have professional experience with these technologies. I look forward to working together and creating amazing web solutions!</p>
               </div>
            </Flex>
        </Container>
    </section>
  )
}

export default About