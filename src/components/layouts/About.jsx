import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import Computer from "../../assets/computer.jpg"
function About() {
  return (
    <section className='mb-[80px]'>
        <Container className="mt-[120px]">
            <Flex className="justify-between">
               <div className='w-[40%]'>
                 <Image src={Computer} className="rounded-[10px] shadow-lg"/>
               </div>
               <div className='w-[50%]'>
               <h2 className='font-dm font-bold text-secondary text-xl'>About Me</h2> 
               <h2 className='font-dm font-bold text-primary text-xl w-8/12  my-2'>A dedicated Full Stack Web Developer based in Market Place</h2>
                <p className='font-dm font-medium text-secondary text-base w-8/12'>Hello! My name is Franklin Carlos Huichi Contreras, and I'm a Full Stack web developer. I specialize in Java, JavaScript, Spring Boot, Angular, and ReactJs. My focus is on creating responsive web pages and software systems using REST. Currently, I have professional experience with these technologies. I look forward to working together and creating amazing web solutions!</p>
               </div>
            </Flex>
        </Container>
    </section>
  )
}

export default About