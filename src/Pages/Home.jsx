// import React, { useState } from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
import Card1 from '../Components/Card1'
import MeteKa from '../Components/MeteKa'
import Contact from '../Components/Contact'


const Home = ({ change }) => {

  return (
    <>
      <Slider />
      <div className='relative'>
        <h1 className='text-center font-Dangrek text-pink-500 text-4xl mt-10'>ផ្កា</h1>
      </div>
      <Card className="hidden" change={change} />
      {/* <Card/> */}

      <div className='relative'>
        <h1 className='text-center font-Dangrek text-pink-500 text-4xl mt-10'>ថែមទាំមស្បែក</h1>
      </div>
      <Card1 />

      <MeteKa/>
      <Contact/>
    </>
  )
}

export default Home