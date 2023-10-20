import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import Problem from "../../assets/problem.png"
import Flex from '../common/Flex'

function ProblemSlove() {
  return (
    <section className='md:mt-[120px] mt-[100px] px-4 xl:px-0'>
      <Container>
         <h2 className='font-dm font-bold text-secondary mb-8 text-[30px] text-center'>What sets me apart</h2>
        <Flex className="gap-x-5 justify-center flex-col md:flex-row">

         <div className='lg:w-[40%]'>
            <div className='md:w-[400px] w-[300px] mx-auto'>
            <Image src={Problem}/> 
            </div>
         </div>  


         <div className='lg:w-[40%]'>
            <h2 className='font-dm font-bold text-primary text-xl mt-5'>Problem-Solving Prowess, innovative Solutions and Collaborative Mindset</h2>
            <p className='font-dm font-medium text-secondary text-base mt-5'>I thrive on finding creative and innovative solutions to complex problems, pushing the boundaries of what's possible in web development.</p>
            <p className='font-dm font-medium text-secondary text-base mt-5'>tackling complex challenges and finding elegant solutions, turning obstacles into opportunities.</p>
            <p className='font-dm font-medium text-secondary text-base mt-5'>also I believe in the power of teamwork and collaboration, making me an excellent addition to any development project.</p>
        </div> 

        </Flex>
      </Container>
    </section>
  )
}

export default ProblemSlove