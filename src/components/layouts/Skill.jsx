import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import SkillData from "../Data/skill"
import Image from "../common/Image"
import Button from '../common/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cv  from "../../assets/Hasan_resume.pdf"


function Skill() {
  const [data,setData] = useState(SkillData)
  const [input,setInput]=useState("")
  let darkData = useSelector((state)=>state.dark.darkitem)
  


  const handleChange = (e)=>{
      setInput(e.target.value)
  }
  
  useEffect(()=>{
    let filterdata = SkillData.filter((item)=>{
      const inputName = input.toLocaleLowerCase()
      const itemName = item.name.toLocaleLowerCase()
      
      return  inputName == "" ? itemName: itemName.includes(inputName)
    
      })
      setData(filterdata)
  
  },[input])


  const handleSubmit =(text)=>{
  let filt = SkillData.filter((item)=>{
      if(item.title==text){
        return item
      }
     })

     setData(filt)
     
  }





  return (
    <section className='md:mt-10'>
        <Container>
            <Flex className='justify-between flex-col md:flex-row px-4 xl:px-0 gap-y-10'>
               <div className='md:w-[40%] '>
                  <h2 className={`font-dm font-bold text-secondary text-[30px] ${darkData ? "text-white" : "text-secondary"}`}>Summary</h2> 
                  <p className={`font-dm font-normal md:font-medium  text-sm md:text-base mt-5  ${darkData ? "text-white md:font-light" : "text-secondary md:font-medium"}`}>
                        I am a passionate web application and software developer specializing in MERN Stack web development. As a
                        frontend developer, I bring a strong foundation in HTML, CSS, and JavaScript, coupled with deep expertise in
                        React.js. I can develop any Figma or PSD template into React.js, and it will be responsive. I develop using modern
                        frameworks like Tailwind CSS to create visually stunning websites.
                        Currently, I'm working with Node.js, MongoDB, and Express.js. Recently, I developed an e-commerce website named
                        Daraz, which showcases my capabilities and sets me apart from others in the field
                    </p>    
                  <Flex className="gap-x-2 items-center justify-center md:justify-start mt-5">
         
              
                
                  <Link to={Cv} target="_blank" download>
                     <Button text="DOWNLOAD CV" className="uppercase"/>
                  </Link>
              
        
                  </Flex>
               </div>

               <div className='md:w-[40%] '>
                  <div className='flex md:gap-x-10 gap-x-5 items-center mb-5'>
                    <h2 className={`font-dm font-bold  text-lg  lg:text-[30px] ${darkData ? 'text-white' : "text-secondary"}`}>My Skills</h2>
                      <input type="text" placeholder='Search in skill...' onChange={handleChange} className='border boreder-secondary px-5 py-2 rounded-[5px] md:w-[180px] placeholder:text-sm placeholder:font-dm placeholder:text-secodary'/>
                    </div>
                
               <ul className='flex gap-x-5 my-4 items-center'>
        
                    <li onClick={()=>{handleSubmit("Frontend")}} className='font-dm cursor-pointer text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                       Frontend
                    </li>

                    <li onClick={()=>{handleSubmit("Backend");}} className='font-dm cursor-pointer text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                      Backend
                    </li>

                    <li  onClick={()=>{setData(SkillData)}} className='font-dm cursor-pointer text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                      All
                    </li>
                   
               </ul>
                <Flex className="flex-wrap gap-10 scroll h-[200px] overflow-y-scroll ">
                   {

        data.map((item,index)=>{
              return  <div key={index}>
                        <div className='w-[60px] bg-white p-2 rounded-[5px]'>
                          <Image src={item.url}/> 
                        </div>
                      </div>
                    })
                   }
            
                    
                </Flex>
               </div>
            </Flex>
        </Container>

    </section>
  )
}

export default Skill