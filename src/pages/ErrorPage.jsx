import React from 'react'
import Error from "../assets/404.png"
import Image from "../components/common/Image"
import Button from "../components/common/Button"
import Flex from '../components/common/Flex'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


function ErrorPage() {
    let darkData = useSelector((state)=>state.dark.darkitem)
  return (
    <section className={`py-32 ${darkData ? "bg-secondary" : "bg-white"}`}>
        <div className='md:w-[600px] mx-auto'>
         <Image src={Error}/>
         <Flex className="justify-center my-5">
            <Link to='/'>
              <Button text="Back to Home"/>
            </Link>
         </Flex>
        </div>
    </section>
  )
}

export default ErrorPage