import React from 'react'
import Container from '../common/Container'

import One from "../../assets/daraz.png"
import Two from "../../assets/orebiBanner.png"
import Three from "../../assets/security.png"
import Flex from '../common/Flex'
import BlogCart from '../common/BlogCart'

function Blog() {
  return (
    <section id='blog'>
      <Container>
      <h2 className='font-dm font-bold text-secondary text-[30px] text-center my-16'>My Blogs</h2> 
      <Flex className="justify-center gap-10 flex-wrap ">
       
        <BlogCart src={One} heading="Ecommerce Website Daraz"/>
        <BlogCart src={Two} heading="Ecommerce Website Orebi"/>
        <BlogCart src={Three} heading="Security Website Site"/>

      

      </Flex>
      </Container>
    </section>
  )
}

export default Blog