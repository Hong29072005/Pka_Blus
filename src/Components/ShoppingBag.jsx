import React from 'react'
import { HiShoppingBag } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import Contact from './Contact';

const ShoppingBag = () => {
    return (
        <>
            <div className='mt-16 max-w-[90%] lg:max-w-3xl mx-auto'>
                <div className='flex justify-center'>
                    <div className='flex gap-2 items-center text-4xl font-Jost font-semibold'>
                        <span><HiShoppingBag /></span>
                        <h1>Shopping Bag</h1>
                    </div>
                </div>
                <div className='mt-5 flex justify-center'>
                    <p>No Product in bag</p>
                </div>
                <div className='mt-20 flex justify-center'>
                    <div className='flex gap-2 items-center text-4xl font-Jost font-semibold'>
                        <span><AiFillDollarCircle /></span>
                        <h1>Checkout</h1>
                    </div>
                </div>

                <div className='flex justify-between gap-2'>
                    <div>
                        <div>
                            <h1 className='text-2xl font-Jost font-semibold'>Buyer Information</h1>
                            <form className='mt-2 ' action="">
                                <label className='text-lg font-semibold' htmlFor="">Name *</label><br />
                                <input className='mt-2 border py-1 px-10 rounded-sm' type="text" placeholder=' Ex. John Den' />
                            </form>
                            <form className='mt-2' action="">
                                <label className='text-lg font-semibold' htmlFor="">Phone Number: *</label><br />
                                <input className='mt-2 border py-1 px-10 rounded-sm' type="text" placeholder=' Ex: 0XX XXX XXX' />
                            </form>
                        </div>

                        <div className='mt-10'>
                            <h1 className='text-2xl font-Jost font-semibold'>Delivery Information</h1>
                            <div className='flex gap-3 items-center'>
                                <p>We will provide to </p>
                                <img src="./jnt.png" alt="" />
                            </div>

                            <form className='mt-5' action="">
                                <label className='text-lg font-semibold' htmlFor="">Address *</label><br />
                                <input className='mt-2 border py-1 px-10 rounded-sm' type="text" placeholder=' Ex. Tung Tompung' />
                            </form>
                            <form className='mt-5' action="">
                                <label className='text-lg font-semibold' htmlFor="">Province *</label><br />
                                <input className='mt-2 border py-1 px-10 rounded-sm' type="text" placeholder=' Ex. Prey Veng' />
                            </form>

                            <form className='mt-5' action="">
                                <label className='text-lg font-semibold' htmlFor="">Note *</label><br />
                                <input className='mt-2 border py-3 px-10 rounded-sm' type="text"  />
                            </form>
                        </div>

                    </div>
                    <div className=''>
                        <form className='mt-2' action="">
                            <label className='text-2xl font-Jost font-semibold' htmlFor="">Summary</label><br />
                            <input className='mt-2 border-2 border-dashed py-4 px-10 rounded-sm' type="text" placeholder='Total:' />
                        </form>
                    </div>
                </div>
                <Contact/>


            </div>
        </>
    )
}

export default ShoppingBag