import React from 'react'
import { SiNike } from "react-icons/si";

const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <SiNike style={{ fontSize: "30px" }}/>𝔸𝔻𝕄𝕀ℕ
        <button onClick={()=>setToken('')} className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default NavBar