import React from 'react'

import Navber from "../components/layouts/Navber"
import Hero from "../components/layouts/Hero"
import Skill from "../components/layouts/Skill"
import Service from "../components/layouts/Service"
import Project from "../components/layouts/Project"
import ProblemSlove from "../components/layouts/ProblemSlove"
import Protfolio from "../components/layouts/Protfolio"
import Blog from "../components/layouts/Blog"
import Testomonia from "../components/layouts/Testomonia"
import About from "../components/layouts/About"
import Contact from "../components/layouts/Contact"
import Footer from "../components/layouts/Footer"



function Home() {
  return (
    <>
     
      <Hero/>
      <Skill/>
      <Service/>
      <Project/>
      <ProblemSlove/>
      <Protfolio/>
      <Blog/>
      <Testomonia/>
      <About/>
      <Contact/>
     
       
    </>
  )
}

export default Home