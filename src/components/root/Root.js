import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'

function Root() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>

        
    </>
  )
}

export default Root