import React, { useContext, useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { ShopContext } from '../Context/ShopContext'
import {useLocation} from 'react-router-dom'

const Search = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible,setVisible]=useState(false)
  const location=useLocation()

  useEffect(()=>{
    if(location.pathname.includes("collections")){
      setVisible(true)
    }
    else
    {
      setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className='border-t border-b text-center'>
      <div className='inline-flex items-center justify-center border px-5 py-2  my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input style={{ border: 'none', outline: 'none' }} value={search} onChange={(event) => setSearch(event.target.value)} className='flex-1 text-sm' type="text" placeholder='Search' />
        <IoSearchOutline  style={{ fontSize: "22px", cursor: "pointer"}} />
        <TiDeleteOutline onClick={() => setSearch('')} className='inline ml-4' style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>
      <MdDeleteOutline className='inline' style={{ fontSize: "22px", cursor: "pointer" }} onClick={() => setShowSearch(false)} />
    </div>
  ) : null
}

export default Search