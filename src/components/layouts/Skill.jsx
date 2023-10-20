import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'

import {AiFillGithub} from "react-icons/ai"
import {BiLogoLinkedinSquare} from "react-icons/bi"

import SkillData from "../Data/skill"
import Image from "../common/Image"



function Skill() {
  const [data,setData] = useState(SkillData)
  const [input,setInput]=useState("")
  

  const handleChange = (e)=>{
      setInput(e.target.value)
  }
  
  useEffect(()=>{
    let filterdata = SkillData.filter((item)=>{
      return  input == "" ? item.name : item.name.includes(input)
    
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
    <section className='mt-10'>
        <Container>
            <Flex className='justify-between'>
               <div className='w-[40%] '>
                  <h2 className='font-dm font-bold text-secondary text-[30px]'>Summary</h2> 
                  <p className='font-dm font-medium text-secondary text-base mt-5'>Knowledgeable Full Stack Developer brings superior front-end and back-end design to promote organization-specific website presence. Thorough comprehension of complex HTML, CSS and JavaScript programming languages to generate custom webpage design. Extensive collaboration with frontend to ascertain company expectations and oversee site creation, from initial planning through rollout and support. Detail-oriented approach to maintaining website responsiveness, effectiveness and security</p>    
                  <Flex className="gap-x-2 items-center mt-5">
                    <AiFillGithub size={40} className='text-primary'/>
                    <BiLogoLinkedinSquare size={40} className='text-primary'/>
                  </Flex>
               </div>

               <div className='w-[40%] '>
                <div className='flex gap-x-10  mb-5'>
                 <h2 className='font-dm font-bold text-secondary text-[30px]'>My Skills</h2>
                  <input type="text" placeholder='Search in skill...' onChange={handleChange} className='border boreder-secondary px-5 py-2 rounded-[5px] w-[200px] placeholder:text-sm placeholder:font-dm placeholder:text-secodary'/>
                </div>
                
               <ul className='flex gap-x-5 my-4 items-center'>
        
                    <li onClick={()=>{handleSubmit("Frontend")}} className='font-dm text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                       Frontend
                    </li>

                    <li onClick={()=>{handleSubmit("Backend");}} className='font-dm text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                      Backend
                    </li>

                    <li  onClick={()=>{setData(SkillData)}} className='font-dm text-base hover:bg-secondary hover:text-white px-3 py-1 duration-300 rounded-[5px]'>
                      All
                    </li>
                   
               </ul>
                <Flex className="flex-wrap gap-10  h-[200px] overflow-y-scroll ">
                   {

        data.map((item,index)=>{
              return  <div key={index}>
                        <div className='w-[60px]'>
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