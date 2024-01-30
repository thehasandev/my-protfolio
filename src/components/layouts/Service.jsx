import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'

import Uixi from "../../assets/uixi.png"
import Development from "../../assets/develop.png"
import Insolation from "../../assets/insullation.png"
import Seo from "../../assets/seo.png"
import Data from "../../assets/data.png"


import ServiceList from '../common/ServiceList'
import { useSelector } from 'react-redux'

function Service() {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section className='md:my-[120px] my-[100px]' id='service'> 
      <Container>
      <h2 className={`font-dm font-bold  mb-8 text-[30px] text-center ${darkData ? "text-white" : "text-secondary"}`}>My Service</h2>
       <div className='flex flex-wrap md:gap-16  gap-5 justify-center'>
         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px] ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Uixi}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>UI/UX Design</h2>
              <ServiceList text="Landing Pages"/>
              <ServiceList text="User Flow"       />
              <ServiceList text="Wireframing"/>
              <ServiceList text="Prototyping"/>
              <ServiceList text="Mobile App Design"/>
          </div>

         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px] ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Development}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>Development</h2>
            <ServiceList text="HTML/CSS"/>
              <ServiceList text="Bootstrap"/>
              <ServiceList text="Tailwind"/>
              <ServiceList text="JavaScript"/>
              <ServiceList text="React"/>
          </div>

         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px] ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Insolation}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>Illustration</h2>
              <ServiceList text="Character Design"/>
              <ServiceList text="Icon Set"/>
              <ServiceList text="Illustration Guide"/>
              <ServiceList text="Motion Graphic"/>
              <ServiceList text="Illustration Set"/>
          </div>

         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px]  hidden md:block ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Seo}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>SEO Marketing</h2>
              <ServiceList text="White Hat SEO"/>
              <ServiceList text="Black Hat SEO"/>
              <ServiceList text="Grey Hat SEO"/>
              <ServiceList text="Negative SEO"/>
              <ServiceList text="On-Page SEO"/>
          </div>


         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px]  hidden md:block ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Data}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>Data Analysis</h2>
              <ServiceList text="Diagnostic Analysis"/>
              <ServiceList text="Predictive Analysis"/>
              <ServiceList text="Prescriptive Analysis"/>
              <ServiceList text="Risk Assessment"/>
              <ServiceList text="Sales Forecasting"/>
          </div>

         <div className={`w-[300px]  py-8 md:py-16 rounded-[5px]  hidden md:block ${darkData ? "bg-white " : "bg-[#F0EBD8] duration-500 hover:bg-transparent group"}`}>
            <div className={`w-8 mx-auto bg-secondary p-2 rounded-[5px]`}>
              <Image src={Data}/>
            </div>
            <h2 className={`font-dm font-normal text-2xl text-center   my-4 ${darkData ? "text-secondary": "text-secondary group-hover:text-secondary"}`}>Brand Identity</h2>
              <ServiceList text="Brand Architecture"/>
              <ServiceList text="Brand Authenticity"/>
              <ServiceList text="Brand Awareness"/>
              <ServiceList text="Brand Management"/>
              <ServiceList text="Brand Metrics"/>
          </div>
       </div>
      </Container>
    </section>
  )
}

export default Service