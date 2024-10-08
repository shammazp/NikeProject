import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { SiNike } from "react-icons/si";

import { ShopContext } from '../Context/ShopContext';

const NavBar = () => {

    const [visible, setVisible] = useState(false)
    const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const logOut = () => {
        navigate("/login")
        localStorage.removeItem("token")
        setToken("")
        setCartItems({})
    }
    
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><SiNike style={{ fontSize: "40px" }}/></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                    <p>Collections</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <IoSearchOutline onClick={() => setShowSearch(!showSearch)} style={{ fontSize: "24px", cursor: "pointer" }} />
                
                <div className="group relative">
                    <CgProfile onClick={() => token ? null : navigate("/login")} style={{ fontSize: "24px", cursor: "pointer" }} />
                    {
                        token && <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>navigate("/orders")} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logOut} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                    }
                </div>

                <Link to='/cart' className='relative'>
                    <FiShoppingCart style={{ fontSize: "24px", cursor: "pointer" }} />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <RiMenu3Line onClick={() => setVisible(!visible)} style={{ fontSize: "24px", cursor: "pointer" }} className='sm:hidden' />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(!visible)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <IoIosArrowBack style={{ fontSize: "24px", cursor: "pointer" }} className='h-4' />
                        <p className='text-black'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-6 hover:text-black' to='/'>Home</NavLink>
                    <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-6 hover:text-black' to='/collections'>Collections</NavLink>
                    <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-6 hover:text-black' to='/about'>About</NavLink>
                    <NavLink onClick={() => setVisible(!visible)} className='py-2 pl-6 hover:text-black' to='/contact'>Contact</NavLink>
                </div>
            </div>

        </div>
    )
}

export default NavBar