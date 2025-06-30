import React, { useState } from 'react'
import { useContext } from 'react'
import { ChangeContext } from './Context'

import pka1 from '../../public/pka1.jpeg'
import pka2 from '../../public/pka2.jpeg'
import pka3 from '../../public/pka3.jpeg'
import pka4 from '../../public/pka4.jpeg'
import pka5 from '../../public/pka5.jpeg'
import pka6 from '../../public/pka6.jpeg'
import pka7 from '../../public/pka7.jpeg'


// import { useContext } from 'react';
// import { ChangeContext } from '../context/ChangeContext';

const Card = () => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const { change } = useContext(ChangeContext);
    

    // const {change}=props


    const data = [
        {
            id: 1,
            img: pka1,
            name: "ទឺកដោះ",
            nameEng: "Tirk Dos",
            price: 10

        },
        {
            id: 2,
            img: pka2,
            name: "អង្គារដី",
            nameEng: "Angkear Dey",
            price: 10

        },
        {
            id: 3,
            img: pka3,
            name: "នគររាជ",
            nameEng: "Nokoreach",
            price: 10

        },
        {
            id: 4,
            img: pka4,
            name: "ផ្គរលាន់",
            nameEng: "Pkor Lorn",
            price: 10

        },
        {
            id: 5,
            img: pka5,
            name: "កុលាប",
            nameEng: "Kolab",
            price: 10

        },
        {
            id: 6,
            img: pka6,
            name: "ឈូក",
            nameEng: "Chhuk",
            price: 10

        },
        {
            id: 7,
            img: pka7,
            name: "រំដួល",
            nameEng: "Romdoul",
            price: 10

        }
    ]


    return (
        <>
            <div className='max-w-[70%] lg:max-w-3xl mx-auto mt-10'>
                <div className=' grid sm:grid-col-2 lg:grid-cols-3 gap-4'>
                    {

                        data.map((item) => (
                            <div className='w-[15.8rem] h-[24rem] shadow-md'>
                                <img className='' src={item.img} alt="" />
                                <div  className={`${change ? 'hidden' : 'inline-block'} px-2 flex justify-between`}>
                                    <h1 className='font-Dangrek text-2xl text-pink-500'>{item.name}</h1>
                                    <p className='font-serif text-2xl text-pink-500'>${item.price}</p>
                                </div>
                                <div className={`${change? 'inline-block':'hidden'} px-2 flex justify-between`}>
                                    <h1 className='font-Pacifico text-2xl text-pink-500'>{item.nameEng}</h1>
                                    <p className='font-serif text-2xl text-pink-500'>${item.price}</p>
                                </div>
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

export default Card