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
import { useSelector } from 'react-redux'



function Home() {
  let darkData = useSelector((state)=>state.dark.darkitem)
 
  return (
    <div className={`${darkData? "bg-secondary text-white" : "bg-white"}`}>  
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
     
       
    </div>
  )
}

export default Home