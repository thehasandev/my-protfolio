import React from 'react'
import Container from '../common/Container'

import One from "../../assets/daraz.png"
import Two from "../../assets/orebiBanner.png"
import Three from "../../assets/security.png"
import Flex from '../common/Flex'
import BlogCart from '../common/BlogCart'
import { useSelector } from 'react-redux'

function Blog() {
  let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section id='blog'>
      <Container>
      <h2 className={`font-dm font-bold  text-[30px] text-center my-16 ${darkData ? "text-white" : "text-secondary"}`}>My Blogs</h2> 
      <Flex className="justify-center gap-10 flex-wrap ">
       
        <BlogCart src={One} heading="Ecommerce Website Daraz" link="https://daraz-ecommarce.netlify.app"/>
        <BlogCart src={Two} heading="Ecommerce Website Orebi" link="https://ecommerce-orebi.netlify.app/"/>
        <BlogCart src={Three} heading="Security Website Site" link="https://security-gurd.netlify.app"/>

      

      </Flex>
      </Container>
    </section>
  )
}

export default Blog