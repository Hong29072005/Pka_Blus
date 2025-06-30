import React from 'react'
import Contact from '../Components/Contact'

const Login = () => {
  return (
    <>
        <div className='mt-10 max-w-[50%] lg:max-w-3xl mx-auto'>
            <h1 className='text-4xl font-Jost font-semibold text-center'>Login</h1>
            <div className='mt-16 flex justify-center'>
              <div>
                <form action="">
                  <label htmlFor="">Phone Number: *</label><br />
                  <input className='mt-2 w-[20rem] py-1 px-2 border-2' type="text" placeholder='0xx xxx xxx' /><br />
                  <button className='mt-3 py-1 w-full border-2 bg-pink-400 text-white font-semibold'>Login</button>
                </form>
              </div>
            </div>
        </div>
        <div className='mt-[20rem]'>
        <Contact/>
        </div>
        
    </>
  )
}

export default Login