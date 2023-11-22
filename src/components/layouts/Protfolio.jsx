import React, { useState } from 'react'
import Container from '../common/Container'

import protfolioData from "../Data/protfolio"


import Flex from '../common/Flex'
import Image from '../common/Image'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protfolio() {
  const [data,setData] = useState(protfolioData)
  const [filterProtfolio,setFilterProtfolio] = useState(protfolioData)

  let darkData = useSelector((state)=>state.dark.darkitem)


  const handleSubmit =(name)=>{
    let arr =[]
   data.filter((item)=>(
        item.type.filter((item2)=>{
        if(item2==name){
         arr.push(item)
        }

      })
      
      ))
      setFilterProtfolio(arr)
      



   
  }
  return (
    <section className={`  ${darkData ? "bg-secondary" : "bg-transparent"}`} id='protfolio'>
      <Container>
      <h2 className={`font-dm font-bold text-center  text-[30px] mb-5  ${darkData ? "text-white" : "text-secondary"}`}>My Protfolio </h2> 
         <ul className='flex  justify-center md:gap-x-10 gap-x-2 flex-wrap'>
            <li onClick={()=>{handleSubmit("Html Css")}} className='font-dm text-base hover:bg-secondary hover:text-white  px-2 md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
               Html Css
            </li>
            <li onClick={()=>{handleSubmit("Bootstrap")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2  md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
               Bootstrap
            </li>
            <li onClick={()=>{handleSubmit("Taillwind Css")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2  md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
                Taillwind Css
            </li>
            <li onClick={()=>{handleSubmit("Javascript")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2  md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
                Javascript
            </li>
            <li onClick={()=>{handleSubmit("React Js")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2  md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
                React Js
            </li>
            <li onClick={()=>{handleSubmit("Game")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2 md:px-3  cursor-pointer py-1 duration-300 rounded-[5px]'>
                Game 
            </li>
            <li onClick={()=>{handleSubmit("")}} className='font-dm text-base hover:bg-secondary hover:text-white px-2 md:px-3 cursor-pointer  py-1 duration-300 rounded-[5px]'>
                All
            </li>
         </ul>


      
          
          
        <Flex className="gap-10 flex-wrap justify-center mt-6  h-[450px] md:bg-transparent py-5 rounded-[5px] scroll overflow-y-scroll">

          {
            filterProtfolio.length ?

            filterProtfolio.map((item,index)=>{
              const {title} = item
            
         return <div key={index} >
                  <div className='w-[350px] group scale-105 group overflow-hidden relative rounded-[10px]'>
                    <Link to={title=="avada" ? "https://hasan-adava.netlify.app" : title=="discover" ? "https://hasan-natural.netlify.app" : title=="omah"? "https://omah-website.netlify.app" :title=="creative"? "https://thehasandev.github.io/creativeit/":title=="innovate"? "https://react-multiple-pages-website.netlify.app" :title=="charger"?"https://hasan-charger.netlify.app" : title=="daraz"? "https://daraz-ecommarce.netlify.app": title=="Orabai"? "https://ecommerce-orebi.netlify.app/" : title=="eduford"? "https://college-htmlcss.netlify.app": title=="waxom"? "https://waxxom.netlify.app" : title == "you tube" ? "https://dashing-clafoutis-ca5a45.netlify.app" : title == "sequrity" ? "https://bangel-force.netlify.app" : title == "todo" ? "https://react-facebook-todo.netlify.app" : title == "game"? "https://react-game-twoplayers.netlify.app" : title == "table search" ? "https://table-search-react.netlify.app": title == "gameFirebase"? "https://firebase-todo-murex.vercel.app/" :title == "tonix"? "https://tronix-ecommarce.netlify.app" :"/"}>
                       <Image src={item.url} className="rounded-[10px] group-hover:scale-110 duration-500"/>
                    </Link>
                      <div className='w-full h-full bg-black/25 group-hover:top-[100%] top-0 left-0 absolute'></div>
                  </div>
                </div>
  
              }
             
              
            
            )
            :
            data.map((item,index)=>{
            const {title} = item
            console.log(title);
           
       return <div key={index}>
                <div className='w-[350px] group scale-105 group overflow-hidden relative rounded-[10px]'>
                  <Link to={title=="avada" ? "https://hasan-adava.netlify.app" : title=="discover" ? "https://hasan-natural.netlify.app" : title=="omah"? "https://omah-website.netlify.app" :title=="creative"? "https://thehasandev.github.io/creativeit/":title=="innovate"? "https://react-multiple-pages-website.netlify.app" :title=="charger"?"https://hasan-charger.netlify.app" : title=="daraz"? "https://daraz-ecommarce.netlify.app": title=="Orabai"? "https://ecommerce-orebi.netlify.app/" : title=="eduford"? "https://college-htmlcss.netlify.app": title=="waxom"? "https://waxxom.netlify.app" : title == "you tube" ? "https://dashing-clafoutis-ca5a45.netlify.app" : title == "sequrity" ? "https://security-gurd.netlify.app" : title == "todo" ? "https://react-facebook-todo.netlify.app" : title == "game"? "https://react-game-twoplayers.netlify.app" : title == "table search" ? "https://table-search-react.netlify.app":"/"}>
                     <Image src={item.url} className="rounded-[10px] group-hover:scale-110 duration-500"/>
                  </Link>
                    <div className='w-full h-full bg-black/25 group-hover:top-[100%] top-0 left-0 absolute'></div>
                </div>
              </div>

            }
              )
            
            
          }
         </Flex>  

      </Container>
    </section>


  )
}

export default Protfolio