import React from 'react'
import img9 from '../Image/M1.jpeg'
import img1 from '../Image/M2.jpeg'
import img2 from '../Image/M3.jpeg'
import img3 from '../Image/M4.jpeg'
import img4 from '../Image/M5.jpeg'
import img5 from '../Image/M6.jpeg'
import img6 from '../Image/M7.jpeg'
import img7 from '../Image/M8.jpeg'
import img8 from '../Image/M9.jpeg'


const MeteKa = () => {

    const data = [

        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },

    ]
    return (
        <>
            <div className='relative'>
                <h1 className='text-center font-Dangrek text-pink-500 text-4xl mt-10'>មាតិការ</h1>
            </div>
            <div className='mt-4 max-w-[70%] lg:max-w-3xl mx-auto bg-gray-200'>
                <div className='grid grid-cols-1 px-5 lg:px-0 lg:grid-cols-3 gap-4'>
                    {
                        data.map((item) => (
                            <div className='w-[15.8rem] h-[20rem] shadow-md p-8'>
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default MeteKa