import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from "../Components/Title"
import axios from 'axios'

const Orders = () => {

  const { BackendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(BackendUrl + "/api/orders/userorders", {}, { headers: { token } })

      if (response.data.success) {
        let allOrders = []
        response.data.orders.map((value) => {
          value.items.map((item) => {
            item["status"] = value.status
            item["payment"] = value.payment
            item["paymentMethod"] = value.paymentMethod
            item["date"]=value.date
            allOrders.push(item)
          })
        })
        console.log(allOrders)
        setOrderData(allOrders.reverse())
      }

    } catch (error) {
      console.error("Error loading orders:", error);
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          orderData.map((value, index) => {
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={value.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{value.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>{currency}{value.price}</p>
                      <p>Quantity : {value.quantity}</p>
                      <p>Size : {value.size}</p>
                    </div>
                    <p className='mt-1'>Date : <span className='text-gray-400'>{new Date(value.date).toDateString()}</span> </p>
                    <p className='mt-1'>Payment : <span className='text-gray-400'>{value.paymentMethod}</span> </p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm text-base'>{value.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders