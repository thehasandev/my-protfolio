import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import ClintOne from "../../assets/client-one.jpg"
import ClintTwo from "../../assets/client-two.jpg"
import ClintThree from "../../assets/client-three.jpg"
import { AiFillStar } from 'react-icons/ai'

import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import { useSelector } from 'react-redux'


function Testomonia() {
    let darkData = useSelector((state)=>state.dark.darkitem)
    const testomniaSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                
                }
              },
            {
              breakpoint:480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
           
      
            
          ],
        appendDots: dots => (
            <div>
              <ul className='flex justify-center gap-x-5 '> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className='text-secondary text-7xl'>
              .
            </div>
          )
            

      };

      
  return (
    <section className='my-[120px]'>
        <Container>
           <h2 className={`font-dm font-bold  mb-8 text-[30px] text-center ${darkData ? "text-white": "text-secondary"}`}>Client Speak</h2>
            
           
            
             <Slider {...testomniaSettings}>

                <div className='w-[250px]'>
                    <div className='mx-5 bg-[#F0EBD8] px-10 py-8 rounded-[5px] '>
                        <Flex className="gap-x-5 mb-5">
                            <div>
                                <Image src={ClintOne} className="rounded-full"/>
                            </div>
                                <div>
                                    <h2 className='font-dm font-semibold text-secondary text-2xl'>Dennis</h2>
                                    <p className='font-dm font-medium text-secondary text-lg'>Jacques</p>
                                </div>
                        </Flex>
                                <p className='font-dm font-normal text-secondary text-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab officiis nostrum ipsam, dolores voluptate voluptatum. Nostrum quod soluta deserunt in ad ipsam laboriosam quasi odio, eos, numquam neque consequatur sequi.</p>
                            <Flex className="mt-5 gap-5-4 text-orange-500">
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </Flex>
                        </div>
                </div>

                <div className='w-[250px]'>
                    <div className='mx-5 bg-[#F0EBD8] px-10 py-8 rounded-[5px] '>
                    <Flex className="gap-x-5 mb-5">
                        <div>
                            <Image src={ClintTwo} className="rounded-full"/>
                        </div>
                            <div>
                                <h2 className='font-dm font-semibold text-secondary text-2xl'>Stevan</h2>
                                <p className='font-dm font-medium text-secondary text-lg'>Jacques</p>
                            </div>
                    </Flex>
                            <p className='font-dm font-normal text-secondary text-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab officiis nostrum ipsam, dolores voluptate voluptatum. Nostrum quod soluta deserunt in ad ipsam laboriosam quasi odio, eos, numquam neque consequatur sequi.</p>
                        <Flex className="mt-5 gap-5-4 text-orange-500">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </Flex>
                    </div>
                </div>

                <div className='w-[250px]  '>
                    <div className='mx-5 bg-[#F0EBD8] px-10 py-8 rounded-[5px]'>
                    <Flex className="gap-x-5 mb-5">
                        <div>
                            <Image src={ClintThree} className="rounded-full"/>
                        </div>
                            <div>
                                <h2 className='font-dm font-semibold text-secondary text-2xl'>Nelson Mandana</h2>
                                <p className='font-dm font-medium text-secondary text-lg'>Jacques</p>
                            </div>
                    </Flex>
                            <p className='font-dm font-normal text-secondary text-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab officiis nostrum ipsam, dolores voluptate voluptatum. Nostrum quod soluta deserunt in ad ipsam laboriosam quasi odio, eos, numquam neque consequatur sequi.</p>
                        <Flex className="mt-5 gap-5-4 text-orange-500">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </Flex>
                    </div>
                </div>



            
       

            </Slider>

              
          
       
        </Container>
    </section>
  )
}

export default Testomonia