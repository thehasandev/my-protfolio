import React from 'react'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

function RoutsLayout() {
  return (
    <>
    <Navber/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default RoutsLayout