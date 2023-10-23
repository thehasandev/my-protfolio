import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import SkillData from "../Data/skill"
import Image from "../common/Image"
import Button from '../common/Button'
import ExamplePdf from '../../assets/cv.pdf';
import { useSelector } from 'react-redux'


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
                  <p className={`font-dm font-normal md:font-medium  text-sm md:text-base mt-5  ${darkData ? "text-white md:font-light" : "text-primary md:font-medium"}`}>Knowledgeable Full Stack Developer brings superior front-end and back-end design to promote organization-specific website presence. Thorough comprehension of complex HTML, CSS and JavaScript programming languages to generate custom webpage design. Extensive collaboration with frontend to ascertain company expectations and oversee site creation, from initial planning through rollout and support. Detail-oriented approach to maintaining website responsiveness, effectiveness and security</p>    
                  <Flex className="gap-x-2 items-center justify-center md:justify-start mt-5">
         
                  {/* <a
                    href={ExamplePdf}
                    download="Example-PDF-document"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button><Button text="Downlod CV" className="uppercase"/></button>
                  </a> */}
        
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
                <Flex className="flex-wrap gap-10  h-[200px] overflow-y-scroll ">
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