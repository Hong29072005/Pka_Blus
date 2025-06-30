import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Rootlayout