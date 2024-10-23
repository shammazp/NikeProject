import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BackendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { IoTrashBinOutline } from "react-icons/io5";

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(BackendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(BackendUrl + "/api/product/remove", { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div>
      <>
        <p className='mb-2'>All Products</p>
        <div className='flex flex-col gap-2'>

          <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className='text-center'>Action</b>
          </div>

          {
            list.map((value, index) => {
              return (
                <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                  <img className='w-12' src={value.image[0]} alt="" />
                  <p>{value.name}</p>
                  <p className='ml-5'>{value.category}</p>
                  <p>{currency}{value.price}.00</p>
                  <p><IoTrashBinOutline onClick={() => removeProduct(value._id)} style={{ cursor: "pointer", fontSize: "20px" }} className='ml-12 md:text-center text-lg' /></p>
                </div>
              )
            })
          }

        </div>
      </>
    </div>
  )
}

export default List