import React, { useState } from 'react'
import lekleak from '../Image/lekleak.png'
import lekut from '../Image/lekut.jpeg'



const Card1 = () => {

    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)



    const data = [
        {
            id: 1,
            img: lekleak,
            name: "ឡេក្លៀក",
            nameEng: "Tirk Dos",
            price: 7.5

        },
        {
            id: 2,
            img: lekut,
            name: "ឡេគូថ",
            nameEng: "Angkear Dey",
            price: 10

        },

    ]
    return (
        <>
            <div className='max-w-[70%] lg:max-w-3xl mx-auto mt-10'>
                <div className=' grid sm:grid-col-2 lg:grid-cols-3 gap-4'>
                    {

                        data.map((item) => (
                            <div className='w-[15.8rem] h-[28rem] shadow-md'>
                                <img className='' src={item.img} alt="" />
                                <div className={` px-2 flex justify-between`}>
                                    <h1 className='font-Dangrek text-2xl text-pink-500'>{item.name}</h1>
                                    <p className='font-serif text-2xl text-pink-500'>${item.price}</p>
                                </div>
                                {/* <div className={` px-2 flex justify-between`}>
                                    <h1 className='font-Pacifico text-2xl text-pink-500'>{item.nameEng}</h1>
                                    <p className='font-serif text-2xl text-pink-500'>${item.price}</p>
                                </div> */}
                                <div className='p-2'>
                                    <button onClick={() => setOpen(true)} className={`${open ? 'hidden' : 'inline-block'} mt-2 text-white font-Siemreap text-xl py-2 px-6 bg-pink-500 rounded-md w-full `}>ដាក់ចួលថង</button>
                                </div>
                                <div className={`${open ? 'inline-block' : 'hidden'} px-3 mt-5`}>
                                    <button onClick={() => setCount(count - 1)} className='px-4 py-2 shadow-md text-xl'>
                                        -
                                    </button>
                                    <button onClick={() => setOpen(false)} className='px-[70px] py-2 shadow-md text-xl'>
                                        {count}
                                    </button>
                                    <button onClick={() => setCount(count + 1)} className='px-3 py-2 shadow-md text-xl'>
                                        +
                                    </button>
                                </div>

                            </div>
                        )

                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Card1