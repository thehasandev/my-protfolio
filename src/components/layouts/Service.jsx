import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'

import Uixi from "../../assets/uixi.png"
import Development from "../../assets/develop.png"
import Insolation from "../../assets/insullation.png"
import Seo from "../../assets/seo.png"
import Data from "../../assets/data.png"


import ServiceList from '../common/ServiceList'

function Service() {
  return (
    <section className='my-[120px]'> 
      <Container>
      <h2 className='font-dm font-bold text-secondary mb-8 text-[30px] text-center'>My Service</h2>
       <div className='flex flex-wrap gap-16 justify-center'>
         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Uixi}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>UI/UX Design</h2>
              <ServiceList text="Landing Pages"/>
              <ServiceList text="User Flow"/>
              <ServiceList text="Wireframing"/>
              <ServiceList text="Prototyping"/>
              <ServiceList text="Mobile App Design"/>
          </div>

         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Development}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>Development</h2>
              <ServiceList text="HTML/CSS"/>
              <ServiceList text="Bootstrap"/>
              <ServiceList text="Tailwind"/>
              <ServiceList text="JavaScript"/>
              <ServiceList text="React"/>
         </div>

         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Insolation}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>Illustration</h2>
              <ServiceList text="Character Design"/>
              <ServiceList text="Icon Set"/>
              <ServiceList text="Illustration Guide"/>
              <ServiceList text="Motion Graphic"/>
              <ServiceList text="Illustration Set"/>
         </div>

         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Seo}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>SEO Marketing</h2>
              <ServiceList text="White Hat SEO"/>
              <ServiceList text="Black Hat SEO"/>
              <ServiceList text="Grey Hat SEO"/>
              <ServiceList text="Negative SEO"/>
              <ServiceList text="On-Page SEO"/>
         </div>

         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Data}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>Data Analysis</h2>
              <ServiceList text="Diagnostic Analysis"/>
              <ServiceList text="Predictive Analysis"/>
              <ServiceList text="Prescriptive Analysis"/>
              <ServiceList text="Risk Assessment"/>
              <ServiceList text="Sales Forecasting"/>
         </div>

         <div className='w-[300px] bg-secondary py-16 rounded-[5px]'>
            <div className='w-8 mx-auto'>
              <Image src={Data}/>
            </div>
            <h2 className='font-dm font-normal text-2xl text-center text-white my-4'>Brand Identity</h2>
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