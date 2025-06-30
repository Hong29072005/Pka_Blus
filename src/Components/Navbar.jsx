
import { NavLink } from 'react-router'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { useContext, useState } from 'react';
import { ChangeContext } from './Context';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    
    const {setchange} = useContext(ChangeContext)

    return (
        <>
            <div className='sticky top-0 max-w-[90%] lg:max-w-4xl mx-auto mt-5 z-10'>
                <div className='flex justify-between items-center border-b-[1px] p-2 bg-white' >

                    {/* Navbar  */}
                    <ul className='uppercase flex gap-4 font-semibold text-xl items-center'>
                        <li>
                            <IoMdMenu onClick={() => setOpen(true)} className={`${open ? 'hidden' : 'inline-block'} cursor-pointer text-red`} />
                            <IoMdMenu onClick={() => setOpen(false)} className={`${open ? 'inline-block' : 'hidden'} cursor-pointer text-blue-600`} />
                        </li>
                    </ul>
                    {/* Logo  */}
                    <h1 className='font-Satisfy text-4xl text-pink-400 font-semibold tracking-[3px]'>Pich Pisey</h1>
                    {/* Icon  */}
                    <div>
                        <NavLink to="/shoppingbag">
                            <HiOutlineShoppingBag className='text-2xl' />
                        </NavLink>
                        
                    </div>
                </div>
                <ul className={`${open ? 'inline-block' : 'hidden'} " absolute bg-white rounded-md z-50 uppercase font-semibold w-[8rem] py-4 flex flex-col gap-1 shadow-md "`}>
                    <li  className='hover:bg-gray-300 px-2 '>
                        <NavLink onClick={() => setchange(true)} className="flex items-center gap-1">
                            <span className='text-xl'><CiFlag1 /></span>
                            kh
                        </NavLink>
                    </li>
                    <li className='hover:bg-gray-300 px-2'>
                        <NavLink to="/" className="flex items-center gap-1">
                            <span className='text-xl'><HiOutlineHome /></span>
                            Home
                        </NavLink>
                    </li>
                    <li className='hover:bg-gray-300 px-2'>
                        <NavLink to="/login" className="flex items-center gap-1">
                            <span className='text-xl'><CiUser /></span>
                            Login
                        </NavLink>
                    </li>
                </ul>
                {/* <Home change={change} /> */}


            </div>
        </>
    )
}

export default Navbar